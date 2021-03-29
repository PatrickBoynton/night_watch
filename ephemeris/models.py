from django.db import models
from accounts.models import CustomUser


# Create your models here.
class Ephem(models.Model):
    name = models.CharField(max_length=40)
    rise_time = models.DateTimeField(null=True, blank=True)
    set_time = models.DateTimeField(null=True, blank=True)
    is_visible = models.BooleanField()
    magnitude = models.FloatField()
    image = models.ImageField(upload_to='ephemeris/')
    description = models.TextField()
    subscribers = models.ManyToManyField(CustomUser)

    def __str__(self):
        return self.name


class Test(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
