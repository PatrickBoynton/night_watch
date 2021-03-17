from django.shortcuts import render
from rest_framework import generics, permissions

from .models import Profile
from .serializers import ProfileSerializer


# Create your views here.
class ProfileListView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileCreateView(generics.CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileUpdateView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDeleteView(generics.RetrieveDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
