from django.shortcuts import render
from rest_framework import generics, status
from .models import Event
from datetime import datetime, timedelta
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import EventSerializer
from rest_framework import permissions
from broadcast.views import broadcast_sms
from accounts.models import Profile


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


def message_users():
    print('running message users')
    today = datetime.today()
    scheduled_time = datetime.now() + timedelta(minutes=60)

    queryset = Event.objects.filter(date_of_event__date=today,
                                    date_of_event__hour=scheduled_time.hour,
                                    date_of_event__minute=scheduled_time.minute)

    # serializer = EventSerializer(queryset, many=True)

    # User events not JS event.
    for event in queryset:
        if not event.solar_event:
            phone = Profile.objects.get(user=event.user).phone
            # import pdb; pdb.set_trace()
            message_info = {
                "phone": phone,
                "event_name": event.name,
            }
            broadcast_sms(message_info)

        elif event.solar_event:
            subscribers = Profile.objects.filter(receive_notiications=True)
            for subscriber in subscribers:
                message_info = {
                    "phone": subscriber.phone,
                    "name": event.name,
                }
                broadcast_sms(message_info)

    # return Response(serializer.data, status=status.HTTP_200_OK)
