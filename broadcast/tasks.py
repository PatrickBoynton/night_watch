from celery import app
from .views import broadcast_sms


@app.shared_task
def send_sms():
    pass
