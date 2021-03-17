from django.urls import path

from .views import ProfileListView, ProfileDetailView

app_name = "accounts"

urlpatterns = [
    path("", ProfileListView.as_view()),
    path("<int:id>/", ProfileDetailView.as_view())
]
