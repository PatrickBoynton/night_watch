from django.urls import path, include
from . import views

app_name = 'broadcast'

urlpatterns = [
    path('', views.broadcast_sms, name='broadcast_sms')
]
