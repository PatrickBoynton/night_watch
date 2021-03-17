from django.urls import path, include

app_name = "api_v1"

urlpatterns = [
    # Short for ephemeris which
    # describes the various things about a celestial body.
    path("ephem/", include("ephemeris.urls", namespace="ephemeris")),
    path("events/", include("events.urls", namespace='events')),
    path("profiles/", include("accounts.urls", namespace="accounts"))

]
