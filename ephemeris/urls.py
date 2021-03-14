from django.urls import path

from .views import EphemListView, EphemDetailView

app_name = 'ephemeris'

urlpatterns = [
    path('<int:pk>/', EphemListView.as_view()),
    path('', EphemDetailView.as_view())
]
