# Generated by Django 3.1.7 on 2021-03-23 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_auto_20210323_2000'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='receive_notifications',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
