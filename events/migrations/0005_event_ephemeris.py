# Generated by Django 3.1.7 on 2021-03-16 01:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_event_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='ephemeris',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
