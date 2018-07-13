from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = (
            'id',
            'publish_date',
            'header',
            'text',
            'image'
        )

class ArticleBreifSerializer(serializers.ModelSerializer):

    text = serializers.ReadOnlyField(source='shorttext')

    class Meta:
        model = Article
        fields = (
            'id',
            'publish_date',
            'header',
            'text',
            'image',
        )