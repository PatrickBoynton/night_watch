# Generated by Django 3.1.7 on 2021-03-24 12:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_profile_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='my_equipment',
        ),
    ]
