# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-07-13 18:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_publish', models.BooleanField(default=False)),
                ('header', models.TextField(max_length=256)),
                ('text', models.TextField()),
                ('date', models.DateTimeField(auto_now=True)),
                ('publish_date', models.TextField(blank=True, default=None, max_length=50, null=True)),
                ('image', models.ImageField(blank=True, upload_to='static/images')),
            ],
        ),
    ]
