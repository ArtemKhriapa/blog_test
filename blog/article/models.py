from django.db import models
from django.contrib.auth.models import User

# fixme: metod/property - publish for publishing post
# fixme: field - is_published (boolean fill from .publish())
# fixme: field - publish_date (fill from .publish())
# fixme: include .publish in admin for publishing

class Article(models.Model):
    # user = models.ForeignKey(User)
    header = models.TextField(max_length = 256)
    text = models.TextField()
    date = models.DateTimeField(auto_now=True)
    image = models.ImageField(blank=True, upload_to='static/images')

    #first 5 words in text
    @property
    def shorttext(self):
        return ' '.join(self.text.split(' ')[:7]) + ' ...'

    def __str__(self):
        return "%s %s" % (self.date, self.header)
