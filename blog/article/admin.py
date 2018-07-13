from django.contrib import admin
from .models import Article

# func for do something with obj in queryset
def make_publishing(modeladmin, request, queryset):
    for obj in queryset:
        obj.publish_it

        print('Publishing : ', obj.id)

def make_unpublishing(modeladmin, request, queryset):
    for obj in queryset:
        obj.is_publish =False
        obj.save()
        print('Publishing : ', obj.id)

# description for action 'make_publishing'
make_publishing.short_description = "Publish in my blog"
make_unpublishing.short_description ="Remove from my blog"

class ArticleAdmin(admin.ModelAdmin):
    list_display = ['header', 'is_publish',]
    actions = [make_publishing, make_unpublishing]

admin.site.register(Article, ArticleAdmin)