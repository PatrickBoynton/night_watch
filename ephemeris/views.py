from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
from rest_framework import generics, permissions
from ephemeris.models import Ephem
from accounts.models import Profile
from .serializers import EphemSerializer
from datetime import datetime, timedelta
from broadcast.views import broadcast_sms
from django.conf import settings


# Create your views here.
class EphemListView(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Ephem.objects.all().order_by('rise_time')
    serializer_class = EphemSerializer


class EphemDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer


class EphemUpdateView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer


class EphemAddSubscriber(generics.UpdateAPIView):
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer

    def perform_update(self, serializer):
        instance = Ephem.objects.get(pk=self.kwargs['pk'])
        instance.subscribers.add(self.request.user)
        instance = serializer.save()


class EphemRemoveSubscriber(generics.UpdateAPIView):
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer

    def perform_update(self, serializer):
        instance = Ephem.objects.get(pk=self.kwargs['pk'])
        instance.subscribers.remove(self.request.user)
        instance = serializer.save()



def message_users_ephems():
    today = datetime.today()
    scheduled_time = datetime.now() + timedelta(minutes=60)

    queryset = Ephem.objects.filter(rise_time__date=today,
                                    rise_time__hour=scheduled_time.hour,
                                    rise_time__minute=scheduled_time.minute)
    serializer = EphemSerializer(queryset, many=True)


    for ephem in queryset:
        # for all the subscribers in the ephem,
        # get their number and message them
        import pdb; pdb.set_trace()

        for subscriber in ephem:
            phone = Profile.objects.get(user=subscriber).phone

        # phone = Profile.objects.get(user=ephems.user).phone
        # import pdb; pdb.set_trace()
            message_info = {
                "phone": phone,
                "name": ephem.name,
                "rise_time": ephem.rise_time,
            }
            broadcast_sms(message_info)


