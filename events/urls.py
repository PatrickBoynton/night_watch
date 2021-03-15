from django.urls import path
from .views import EventView, EventDetailView

app_name = "events"

urlpatterns = [
    path('<int:pk>/', EventDetailView.as_view()),
    path('', EventView.as_view())
]
