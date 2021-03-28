from celery import app
from ephemeris.models import Ephem
from skyfield.api import N, W, wgs84, load, Star
from skyfield.almanac import find_discrete, risings_and_settings
from pytz import timezone
from datetime import datetime, timedelta

# Planets
sun = Ephem.objects.get(name='Sun')
mercury = Ephem.objects.get(name='Mercury')
venus = Ephem.objects.get(name='Venus')
moon = Ephem.objects.get(name='Moon')
mars = Ephem.objects.get(name='Mars')
jupiter = Ephem.objects.get(name='Jupiter')
saturn = Ephem.objects.get(name='Saturn')
uranus = Ephem.objects.get(name='Uranus')
neptune = Ephem.objects.get(name='Neptune')

# Stars
betelgeuse = Ephem.objects.get(name='Betelgeuse')
sirius = Ephem.objects.get(name='Sirius')
andromeda = Ephem.objects.get(name='Andromeda')
orion_nebula = Ephem.objects.get(name="Orion's Nebula")
pleadies = Ephem.objects.get(name='The Pleadies')


eph = load('de421.bsp')
planet = eph['sun']
# Betelgeuse
# star = Star(ra_hours=(5, 55, 10.3053), dec_degrees=(7, 24, 25.4))
# Sirius
# star = Star(ra_hours=(6, 45, 8.9), dec_degrees=(-16, 42, 58))
# Andromeda Galaxy
# star = Star(ra_hours=(0, 42, 44.3), dec_degrees=(41, 16.9))
# Orion's Nebula
# star = Star(ra_hours=(5, 35.4), dec_degrees=(-5, 27))
# The Pleadies
star = Star(ra_hours=(3, 47, 24), dec_degrees=(24, 7, 0))


@app.shared_task
def get_ephem_times():
    ts = load.timescale()

    # Updates the date.
    today = datetime.today().strftime('%Y-%m-%d').split('-')
    tomorrow = (datetime.today() + timedelta(days=1)).strftime(
        '%Y-%m-%d').split('-')

    t0 = ts.utc(int(today[0]), int(today[1]), int(today[2]))
    t1 = ts.utc(int(tomorrow[0]), int(tomorrow[1]), int(tomorrow[2]))

    dates = []

    greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
    global planet

    f = risings_and_settings(eph, star, greenville)
    tz = timezone('US/Eastern')

    for t, updown in zip(*find_discrete(t0, t1, f)):
        dates.append(t.astimezone(tz).strftime('%Y-%m-%d %H:%M'))
    print(dates)
    pleadies.rise_time = dates[0]
    pleadies.set_time = dates[1]

    pleadies.save()
