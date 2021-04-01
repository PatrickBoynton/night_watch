from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    pass


class CustomUserToken:
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    is_subscribed = models.BooleanField(default=False)
    phone = models.CharField(max_length=11,
                             null=True,
                             blank=True,
                             default='18646405680')

    def __str__(self):
        return self.user.username
