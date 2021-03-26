from celery import shared_task


@shared_task
def hello():
    print('Hello World!')


@shared_task
def send_text():
    print('Sent Text!')

@shared_task
def find_stuff():
    print('Testing!')
