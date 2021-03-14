from django.urls import path, include

app_name = "api_v1"

urlpatterns = [
    # Short for ephemeris which
    # describes the various things about a celestial body.
    path("ephim/", include("ephim.urls", namespace="ephim"))
]
