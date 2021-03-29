from django.test import TestCase, Client
from ephemeris.models import Ephem
from django.contrib.auth import get_user_model
from django.urls import reverse

from .models import Ephem
from .serializers import EphemSerializer


# Create your tests here.
class EphemTests(TestCase):
    def setUp(self):
        user = get_user_model().objects.create(
            username='jpb3',
            email='jpb3@example.com',
            password='safepass1',
        )

        self.ephem = Ephem.objects.create(
            name='Neptune',
            rise_time='2021-03-29 00:15:54',
            set_time='2021-03-29 00:16:26',
            is_visible=False,
            magnitude=2.0,
            description='a description.'
        )

    def test_ephem_content(self):
        ephem = Ephem.objects.get(id=1),
        self.assertEqual(f'{ephem.name}', 'Neptune')
        self.assertContains(ephem.rise_time, '2021-03-29 00:15:54')
        self.assertContains(ephem.set_time, '2021-03-29 00:16:26')
        self.assertFalse(ephem.is_visible, False)


    def test_ephem_list_view(self):
        response = self.client.get(reverse)
        self.assertEqual(response.status_code, 200)
        self.assertNotContains('Pluto')
