# from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .models import Article
from .serializers import ArticleSerializer, ArticleBreifSerializer
from django.shortcuts import render

from django.http import Http404, HttpResponse
from django.template.loader import get_template, render_to_string
from django.template import Context

def TestView(request):
    article_list = Article.objects.all()
    t = get_template('test.html')
    html = {'article_list':article_list}
    return HttpResponse(t.render(html))


def HomeView(request):
    return render(request, 'index.html')

class CustomPagePagination(PageNumberPagination):
    #class for set pagination parameters
    page_size = 3 #obj in page
    page_size_query_param = 'page_size'
    max_page_size = 3

class BlogView(generics.ListAPIView):
    serializer_class = ArticleBreifSerializer
    pagination_class = CustomPagePagination

    def get_queryset(self, *args, **kwargs):
        return Article.objects.filter(is_publish= True).order_by('-publish_date')

class  ArticleView(generics.RetrieveAPIView):
    serializer_class = ArticleSerializer
    pagination_class = CustomPagePagination

    #FIXME: ugly place! CHANGE IF !
    def get_object(self):
        article = Article.objects.get(id =self.kwargs.get('article_id'))
        if article.is_publish:
            return article
        else:
            raise Http404