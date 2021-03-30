import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf', broker='redis://localhost:6379')

app.config_from_object('django.conf:settings', namespace='Celery')

app.autodiscover_tasks(['ephemeris.celery_app', 'events.celery_app'])

app.conf.beat_schedule = {
    # 'print_rise_and_set_times': {
    #     'task': 'ephemeris.tasks.get_planet_times',
    #     # 'schedule': crontab(minute=0, hour=0),
    #     'schedule': 120.00
    # },
    # 'get_star_rise_and_set_times': {
    #     'task': 'ephemeris.tasks.get_star_times',
    #     'schedule': 121.00
    # },
    'send_sms': {
        'task': 'events.tasks.message_user',
        'schedule': 60.0
    }
}

app.conf.timezone = 'UTC'


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
