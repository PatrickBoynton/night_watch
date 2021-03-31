import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.autodiscover_tasks()

app.conf.beat_schedule = {
    'print_rise_and_set_times': {
        'task': 'ephemeris.tasks.get_planet_times',
        'schedule': 60.00
    },
    'get_star_rise_and_set_times': {
        'task': 'ephemeris.tasks.get_star_times',
        'schedule': 61.00
    },
    'send_sms': {
        'task': 'events.tasks.run_sms',
        'schedule': 60.0
    },
    'send_ephem_sms': {
        'task': 'ephemeris.tasks.send_ephem_message',
        'schedule': 60.0
    }
}

app.conf.timezone = 'UTC'


# @app.task(bind=True)
# def debug_task(self):
#     print(f'Request: {self.request!r}')
