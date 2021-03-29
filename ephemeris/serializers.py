from rest_framework import serializers

from .models import Ephem


class EphemSerializer(serializers.ModelSerializer):
    is_subscribed = serializers.SerializerMethodField('is_subscriber')

    def is_subscriber(self, obj):
        request = self.context.get('request', None)
        return request.user in obj.subscribers.all()

    class Meta:
        model = Ephem
        fields = '__all__'
