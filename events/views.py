from django.shortcuts import render
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer
from rest_framework import permissions


# Create your views here.
class EventView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Event.objects.all()
    serializer_class = EventSerializer
