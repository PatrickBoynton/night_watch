from django.urls import path
from . import views

app_name = "events"

urlpatterns = [
    path('<int:pk>/solar-events/', views.SolarEventDetailView.as_view()),
    path('solar-events/', views.SolarEventView.as_view()),
    path('my-events/', views.MyEventsView.as_view()),
    path('<int:pk>/my-events/', views.MyEventsDetailView.as_view())
]
