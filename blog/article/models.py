from django.db import models
from datetime import datetime

# done fixme: metod/property - publish for publishing post
# done fixme: field - is_published (boolean fill from .publish())
# done fixme: field - publish_date (fill from .publish())
# done fixme: include .publish in admin for publishing

class Article(models.Model):
    is_publish = models.BooleanField(default = False)
    header = models.TextField(max_length = 256)
    text = models.TextField()
    date = models.DateTimeField(auto_now=True)
    publish_date = models.TextField(blank=True, max_length = 50,null=True, default= None)
    image = models.ImageField(blank=True, upload_to='static/images')

    @property
    def publish_it(self):
        self.publish_date = datetime.strftime(datetime.now(), "%Y.%m.%d %H:%M")
        self.is_publish = True
        self.save()

    #first 7 words in text for sort representation
    @property
    def shorttext(self):
        return ' '.join(self.text.split(' ')[:7]) + ' ...'

    def __str__(self):
        return "%s %s %s" % (self.id, self.date, self.header)
