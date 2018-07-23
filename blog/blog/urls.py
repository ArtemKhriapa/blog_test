from django.conf.urls import url, include
from django.conf import settings
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from article.views import HomeView, TestView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^blog/', include('article.urls')),
    url(r'myblog/', HomeView),
    url(r'^htmlblog/', TestView)
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()