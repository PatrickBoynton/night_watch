import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf', broker='redis://localhost:6379')

app.config_from_object('django.conf:settings', namespace='Celery')

app.autodiscover_tasks()

app.conf.beat_schedule = {
    'print-testing':{
      'task': 'ephemeris.tasks.find_stuff',
      'schedule': 3.0
    },
    'print-sent-text': {
        'task': 'ephemeris.tasks.send_text',
        'schedule': 50.0,
    },
    'print-hello-world': {
        'task': 'ephemeris.tasks.hello',
        'schedule': 10.0,
    },

}

app.conf.timezone = 'UTC'


@app.task(bind=True)
def debug_task(self):
    print(f'Request: {self.request!r}')
