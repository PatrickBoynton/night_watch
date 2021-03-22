# Generated by Django 3.1.7 on 2021-03-22 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0008_auto_20210322_1325'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='occurrences',
            field=models.CharField(choices=[('one', 'once'), ('rec', 'recurring')], default='recurring', max_length=50),
        ),
        migrations.AlterField(
            model_name='event',
            name='status',
            field=models.CharField(choices=[('upc', 'upcoming'), ('can', 'cancelled'), ('fin', 'finished')], default='upcoming', max_length=40),
        ),
    ]