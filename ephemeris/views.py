from django.views.decorators.csrf import csrf_exempt
from django.views.generic import ListView
from rest_framework import generics, permissions
from .models import Ephem
from .serializers import EphemSerializer
from datetime import date


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
    queryset =  Ephem.objects.all()
    serializer_class = EphemSerializer

    def perform_update(self, serializer):
        instance = Ephem.objects.get(pk=self.kwargs['pk'])
        instance.subscribers.remove(self.request.user)
        instance = serializer.save()
