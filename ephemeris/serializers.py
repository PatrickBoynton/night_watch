from rest_framework import serializers

from .models import Ephem


class EphemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ephem
        fields = '__all__'
