from django.db import models


# Create your models here.
class Ephem(models.Model):
    name = models.CharField(max_length=40)
    alt = models.FloatField()
    az = models.FloatField()
    is_visible = models.BooleanField()
    magnitude = models.FloatField()
    image = models.ImageField()
    description = models.TextField()
