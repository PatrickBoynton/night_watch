from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

from .models import Event
from .serializers import EventSerializer


# Create your tests here.
class EventTests(TestCase):
    def setUp(self):
        user = get_user_model().objects.create(
            username='jpb3',
            email='jpb3@example.com',
            password='safepass1'
        )

        self.event = Event.objects.create(
            name='A new event to watch!',
            ephemeris='Supernova',
            date_of_event='2021-03-29 00:15:54',
            description='Testing a creation!',
            user=user,
            phone='15555555555',
            image=''
        )

    def test_create_event(self):
        event = Event.objects.get(id=1)
        self.assertEqual(f'{event.name}', 'A new event to watch!')
        self.assertEqual(f'{event.ephemeris}', 'Supernova')
        self.assertContains(f'{event.date_of_event}', '2021-03-29 00:15:54')
        self.assertEqual(f'{event.description}', 'Testing a creation!')
        self.assertEqual(event.user, self.user)
        self.assertEqual(f'{event.phone}', '15555555555')

