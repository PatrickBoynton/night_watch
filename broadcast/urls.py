from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.broadcast_sms, name='default')
]
