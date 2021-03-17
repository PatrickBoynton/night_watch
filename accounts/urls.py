from django.urls import path

from . import views

app_name = "accounts"

urlpatterns = [
    path('', views.ProfileListView.as_view()),
    path('<int:pk>', views.ProfileDetailView.as_view()),
    path('create/', views.ProfileCreateView.as_view()),
    path('update/<int:pk>', views.ProfileUpdateView.as_view()),
    path('delete/<int:pk>', views.ProfileDeleteView)
]
