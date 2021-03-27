from django.db import models
from timezone_field import TimeZoneField


# Create your models here.
class Appointment(models.Model):
    name = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=15)
    time_zone = TimeZoneField(default='UTC')

    task_id = models.CharField(max_length=50, blank=True, editable=False)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Appointment #{self.pk} - {self.name}'
