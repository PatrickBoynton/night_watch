from django.db import models


# Create your models here.
class Ephem(models.Model):
    name = models.CharField(max_length=40)
    # rise_time = models.TimeField(null=True, blank=True)
    # set_time = models.TimeField(null=True, blank=True)
    is_visible = models.BooleanField()
    magnitude = models.FloatField()
    image = models.ImageField(upload_to='ephemeris/')
    description = models.TextField()

    def __str__(self):
        return self.name


class Test(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name
