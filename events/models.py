from django.db import models


# Create your models here.
class Event(models.Model):
    name = models.CharField(max_length=60)
    # ephemeris = models.CharField(max_length=30)
    time = models.TimeField(null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.name
