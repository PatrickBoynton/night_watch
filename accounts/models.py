from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    pass


class Profile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles/', blank=True,
                                        null=True)
    about_me = models.TextField(null=True, blank=True)

    receive_notifications = models.BooleanField(null=True,
                                                blank=True,
                                                default=False)

    location = models.CharField(max_length=50,
                                null=True,
                                blank=True,
                                default='Greenville')

    phone = models.CharField(max_length=11,
                             null=True,
                             blank=True,
                             default='18646405680')

    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
