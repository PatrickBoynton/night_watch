from django.db import models


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=60)
    ephemeris = models.CharField(max_length=30, null=True, blank=True)
    time = models.TimeField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name
