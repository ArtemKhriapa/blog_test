from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from ..models import Article
# from utils.helpers_for_tests import dump


class ArticleTest(TestCase):
    test_text = 'It\'s test text like \"Lorem Ipsum\" '*5
    test_header = 'Header test header'

    def setUp(self):
        self.c = APIClient()
        self.article = Article.objects.create(text = self.test_text, header = self.test_header)

    def test_get_blog(self):
        response = self.c.get('/blog/all/')

        # print (dump(response))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['count'], 1)
        self.assertEqual(response.data['results'][0]['text'], self.article.shorttext)
        self.assertEqual(response.data['results'][0]['header'], self.test_header)

    def test_get_article(self):
        response = self.c.get('/blog/id/{}/'.format(self.article.id))

        # print (dump(response))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['id'], self.article.id)
        self.assertEqual(response.data['header'], self.article.header)
        self.assertEqual(response.data['text'], self.article.text)
        self.assertEqual(response.data['image'], None)