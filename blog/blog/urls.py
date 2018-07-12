from django.conf.urls import url, include
from django.contrib import admin
from article.views import HomeView
urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'^blog/', include('article.urls')),
    url(r'^', HomeView),
]
