import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.update(BROKER_URL=os.environ['REDIS_URL'],
                CELERY_RESULT_BACKEND=os.environ['REDIS_URL'])

app.autodiscover_tasks()

app.conf.beat_schedule = {
    # Planets and sun
    'get_sun_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_sun_rise_and_set',
        'schedule': 60.00
    },
    'get_mercury_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_mercury_rise_and_set',
        'schedule': 60.00
    },
    'get_venus_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_venus_rise_and_set',
        'schedule': 60.00
    },
    'get_mars_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_mars_rise_and_set',
        'schedule': 60.00
    },
    'get_jupiter_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_jupiter_rise_and_set',
        'schedule': 60.00
    },
    'get_saturn_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_saturn_rise_and_set',
        'schedule': 60.00
    },
    'get_neptune_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_neptune_rise_and_set',
        'schedule': 60.00
    },
    'get_uranus_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_uranus_rise_and_set',
        'schedule': 60.00
    },
    'get_moon_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_moon_rise_and_set',
        'schedule': 60.00
    },
    # Stars
    'get_betelgeuse_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_betelgeuse_times',
        'schedule': 60.00
    },
    'get_sirius_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_sirius_times',
        'schedule': 60.00
    },
    'get_pleadies_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_pleadies_times',
        'schedule': 60.00
    },
    'get_orions_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_orion_times',
        'schedule': 60.00
    },
    'get_andromeda_rise_and_set_time': {
        'task': 'ephemeris.tasks.get_andromeda_times',
        'schedule': 60.00
    },
    # 'get_star_rise_and_set_times': {
    #     'task': 'ephemeris.tasks.get_star_times',
    #     'schedule': 61.00
    # },
    'send_sms': {
        'task': 'events.tasks.run_sms',
        'schedule': 60.0
    },
    'send_ephem_sms': {
        'task': 'ephemeris.tasks.send_ephem_message',
        'schedule': 60.0
    },
}

app.conf.timezone = 'UTC'
