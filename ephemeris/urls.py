from django.urls import path

from .views import EphemListView, EphemUpdateView

app_name = 'ephemeris'

urlpatterns = [
    path('<int:pk>/', EphemUpdateView.as_view()),
    path('', EphemListView.as_view()),
]
