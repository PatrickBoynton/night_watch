from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from twilio.rest import Client
from rest_framework import generics, permissions
from .models import Appointment


# Create your views here.
@csrf_exempt
def broadcast_sms(request):
    message_to_broadcast = request

    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

    for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
        if recipient:
            client.messages.create(to=recipient,
                                   from_=settings.TWILIO_NUMBER,
                                   body=message_to_broadcast)

    return HttpResponse("Message sent!", 200)