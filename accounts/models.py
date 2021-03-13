from django.conf import settings
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class CustomUser(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles', null=True)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


    def __str__(self):
        return self.user.username
