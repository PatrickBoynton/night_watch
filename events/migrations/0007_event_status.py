# Generated by Django 3.1.7 on 2021-03-22 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_event_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='status',
            field=models.CharField(max_length=40, null=True),
        ),
    ]