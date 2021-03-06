from django.shortcuts import render, get_object_or_404
from rest_framework import generics, permissions

from .models import Profile, CustomUser
from .serializers import ProfileSerializer, CustomUserSerializer


# Create your views here.
class ProfileListView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetailView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_object(self):
        return get_object_or_404(Profile, user=self.request.user)


class ProfileCreateView(generics.CreateAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProfileUpdateView(generics.RetrieveUpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)


class ProfileDeleteView(generics.RetrieveDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)


class CustomUserView(generics.RetrieveAPIView):
    permission_classes = (permissions.IsAuthenticated, )
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
