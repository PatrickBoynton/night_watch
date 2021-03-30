from django.shortcuts import render
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer
from rest_framework import permissions


# Create your views here.
class SolarEventView(generics.ListCreateAPIView):
    queryset = Event.objects.all().order_by('date_of_event')
    serializer_class = EventSerializer

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(user=user)

    def get_queryset(self):
        return Event.objects.filter(solar_event=True)


class SolarEventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        return Event.objects.filter(solar_event=True)


class MyEventsView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        user = self.request.user
        return Event.objects.filter(user=user)


class MyEventsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

