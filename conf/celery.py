import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf', broker='redis://localhost:6379')

app.config_from_object('django.conf:settings', namespace='Celery')

app.autodiscover_tasks()

app.conf.beat_schedule = {
    'print-hello-world': {
        'task': 'ephemeris.say_hello',
        'schedule': 5.0
    }
}
