from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from twilio.rest import Client


# Create your views here.
@csrf_exempt
def broadcast_sms(data):
    # construct your message using the data object that is passed in
    # send message to phone number that is passed in on the data object
    # import pdb; pdb.set_trace()
    recipient = data['phone']
    message = data['event_name']
    # message_to_broadcast = request
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    client.messages.create(to=recipient,
                           from_=settings.TWILIO_NUMBER,
                           body=message)
    #
    # for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
    #     if recipient:
    #         client.messages.create(to=recipient,
    #                                from_=settings.TWILIO_NUMBER,
    #                                body=message_to_broadcast)

    return HttpResponse("Message sent!", 200)
