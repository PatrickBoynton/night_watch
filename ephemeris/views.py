from django.views.generic import ListView
from rest_framework import generics, permissions
from .models import Ephem
from .serializers import EphemSerializer


# Create your views here.
class EphemListView(generics.ListAPIView):
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer


class EphemDetailView(generics.RetrieveAPIView):
    queryset = Ephem.objects.all()
    serializer_class = EphemSerializer
