from django.urls import path

from . import views
app_name = 'ephemeris'

urlpatterns = [
    path('<int:pk>/subscribe/', views.EphemAddSubscriber.as_view()),
    path('<int:pk>/unsubscribe/', views.EphemRemoveSubscriber.as_view()),
    path('<int:pk>/subscribers/', views.EphemListSubscriber.as_view()),
    path('<int:pk>/', views.EphemUpdateView.as_view()),
    path('', views.EphemListView.as_view()),
]
