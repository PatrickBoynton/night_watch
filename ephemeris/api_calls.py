from skyfield.api import N,  W, wgs84, load
from skyfield.almanac import find_discrete, risings_and_settings
from pytz import timezone
from django.db import models
from django.conf import settings
from ephemeris.models import Ephem

# ts = load.timescale()
# t0 = ts.utc(2021, 3, 18)
# t1 = ts.utc(2021, 3, 19)
# eph = load('de421.bsp')
#
# greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
# planet = eph['sun']
#
# f = risings_and_settings(eph, planet, greenville)
# tz = timezone('US/Eastern')
#
# for t, updown in zip(*find_discrete(t0, t1, f)):
#     print(t.astimezone(tz).strftime('%a %d %H:%M'), 'EST',
#           'rises' if updown else 'sets')


# sun = Ephem.objects.all().filter(name='Sun')
sun = Ephem.objects.get(name='Sun')
print(sun)

# mercury = Ephem.objects.all().filter(name='Mercury')
# venus = Ephem.objects.all().filter(name='Venus')
# moon = Ephem.objects.all().filter(name='Moon')
# mars = Ephem.objects.all().filter(name='Mars')
# jupiter = Ephem.objects.all().filter(name='Jupiter')
# saturn = Ephem.objects.all().filter(name='Saturn')
# uranus = Ephem.objects.all().filter(name='Uranus')
# neptune = Ephem.objects.all().filter(name='Neptune')

