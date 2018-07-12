from django.conf.urls import url
from .views import BlogView, ArticleView

urlpatterns = [
    url(r'^id/(?P<article_id>[0-9]+)/$', ArticleView.as_view()),
    url(r'^all/', BlogView.as_view()),

]
