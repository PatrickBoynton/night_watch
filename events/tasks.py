from celery import app
from events.views import message_users


@app.shared_task
def run_sms():
    message_users()
