# Generated by Django 3.1.7 on 2021-03-29 15:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20210329_1504'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='ephemeris_notifications',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='user_event_notifications',
        ),
    ]
