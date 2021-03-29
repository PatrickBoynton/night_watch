from django.db import models
# from accounts.models import CustomUser
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Ephem(models.Model):

    name = models.CharField(max_length=40, blank=True, null=True)
    rise_time = models.DateTimeField(null=True, blank=True)
    set_time = models.DateTimeField(null=True, blank=True)
    is_visible = models.BooleanField()
    magnitude = models.FloatField(blank=True, null=True)
    image = models.ImageField(upload_to='ephemeris/', blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    subscribers = models.ManyToManyField(User, blank=True, null=True)

    def __str__(self):
        return self.name


class Test(models.Model):
    # name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
