from rest_framework import serializers

from .models import Profile, CustomUser


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        models = CustomUser
        fields = '__all__'
