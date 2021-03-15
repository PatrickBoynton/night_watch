from django.urls import path

from .views import EphemListView, EphemDetailView

app_name = 'ephemeris'

urlpatterns = [
    path('<int:pk>/', EphemDetailView.as_view()),
    path('', EphemListView.as_view()),
]
