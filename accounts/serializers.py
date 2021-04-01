from rest_framework import serializers
from rest_auth.models import TokenModel
from .models import Profile, CustomUser


class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    date = serializers.ReadOnlyField(source='user.date_joined')

    class Meta:
        model = Profile
        fields = '__all__'


class CustomUserSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    date = serializers.ReadOnlyField(source='user.date_joined')

    class Meta:
        model = CustomUser
        fields = '__all__'


class TokenSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.id')
    # profile = serializers.ReadOnlyField(source='CustomUser.profile')
    # phone = serializers.ReadOnlyField(source='user.phone')

    class Meta:
        model = TokenModel
        fields = '__all__'
