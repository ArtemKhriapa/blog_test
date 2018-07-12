from django.db import models
from django.contrib.auth.models import User

class Article(models.Model):
    user = models.ForeignKey(User)
    header = models.TextField()
    text = models.TextField()
    date = models.DateTimeField(auto_now=True)
    # image = models.ImageField()

    def __str__(self):
        return "%s %s" % (self.date, self.user)
