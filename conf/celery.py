import os
from celery import Celery

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'conf.settings')

app = Celery('conf', broker='redis://localhost:6379')

app.config_from_object('django.conf:settings', namespace='Celery')

app.autodiscover_tasks()


# app.conf.beat_schedule = {
#     'print-hello-world': {
#         'task': 'ephemeris.say_hello',
#         'schedule': 5.0
#     }
# }

@app.on_after_configure.connect
def setup_periodic_taasks(sender, **kwargs):
    sender.add_periodic_task(10.0, test.s('hello'), name='add every 10')

    sender.add_periodic_task(30.0, test.s('world'), expires=10)


@app.task
def test(arg):
    print(arg)
