from django.urls import path

from .views import ProfileListView

app_name = "accounts"

urlpatterns = [
    path("", ProfileListView.as_view()),
]
