from celery import app
from ephemeris.models import Ephem
from skyfield.api import N, W, wgs84, load
from skyfield.almanac import find_discrete, risings_and_settings
from pytz import timezone

sun = Ephem.objects.get(name='Sun')
mercury = Ephem.objects.get(name='Mercury')
venus = Ephem.objects.get(name='Venus')
moon = Ephem.objects.get(name='Moon')
mars = Ephem.objects.get(name='Mars')
jupiter = Ephem.objects.get(name='Jupiter')
saturn = Ephem.objects.get(name='Saturn')
uranus = Ephem.objects.get(name='Uranus')
neptune = Ephem.objects.get(name='Neptune')

planets = [sun, mercury, venus, moon, mars, jupiter, saturn, uranus, neptune]

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


# sun.rise_time = '03:04:05'
# sun.save()

eph = load('de421.bsp')
planet = eph['sun']


@app.shared_task
def get_ephem_times():
    ts = load.timescale()
    t0 = ts.utc(2021, 3, 26)
    t1 = ts.utc(2021, 3, 27)

    results = []
    # sun.rise_time = results[0]
    # sun.save()

    greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
    global planet

    f = risings_and_settings(eph, planet, greenville)
    tz = timezone('US/Eastern')

    for t, updown in zip(*find_discrete(t0, t1, f)):
        results.append(t.astimezone(tz).strftime('%y-%m-%d %H:%M'))

    print(results[0])
