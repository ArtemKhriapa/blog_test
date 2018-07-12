from rest_framework import generics, status
from rest_framework.pagination import PageNumberPagination
from .models import Article
from .serializers import ArticleSerializer


class CustomPagePagination(PageNumberPagination):
    #class for set pagination parameters
    page_size = 10 #obj in page
    page_size_query_param = 'page_size'
    max_page_size = 10

class BlogView(generics.ListAPIView):
    serializer_class = ArticleSerializer
    pagination_class = CustomPagePagination

    def get_queryset(self, *args, **kwargs):
        return Article.objects.all().order_by('id')