# Generated by Django 3.1.7 on 2021-03-29 19:04

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ephemeris', '0010_ephem_ephem_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ephem',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='ephem',
            name='subscribers',
            field=models.ManyToManyField(blank=True, null=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
