from ephemeris.views import message_users_ephems
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

ephems = [sun, mercury, venus, mars, jupiter, saturn, neptune, uranus]
star_ephems = [betelgeuse, sirius, andromeda, orion_nebula, pleadies]

eph = load('de421.bsp')
planet1 = eph['sun']
planet2 = eph['mercury']
planet3 = eph['venus']
planet4 = eph['mars']
# Jupiter
planet5 = eph[5]
# Saturn
planet6 = eph[6]
# Uranus
planet7 = eph[7]
# Neptune
planet8 = eph[8]
planet9 = eph['moon']

planets = [planet1,
           planet2,
           planet3,
           planet4,
           planet5,
           planet6,
           planet7,
           planet8,
           planet9]
# Betelgeuse
bet = Star(ra_hours=(5, 55, 10.3053), dec_degrees=(7, 24, 25.4))
# Sirius
sir = Star(ra_hours=(6, 45, 8.9), dec_degrees=(-16, 42, 58))
# Andromeda Galaxy
androm = Star(ra_hours=(0, 42, 44.3), dec_degrees=(41, 16.9))
# Orion's Nebula
orion = Star(ra_hours=(5, 35.4), dec_degrees=(-5, 27))
# The Pleadies
plead = Star(ra_hours=(3, 47, 24), dec_degrees=(24, 7, 0))

stars = [bet,
         sir,
         androm,
         orion,
         plead]


@app.shared_task
def get_planet_times():
    ts = load.timescale()

    # Updates the date.
    today = datetime.today().strftime('%Y-%m-%d').split('-')
    tomorrow = (datetime.today() + timedelta(days=1)).strftime(
        '%Y-%m-%d').split('-')

    t0 = ts.utc(int(today[0]), int(today[1]), int(today[2]))
    t1 = ts.utc(int(tomorrow[0]), int(tomorrow[1]), int(tomorrow[2]))

    dates = []

    greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
    # global planet
    for i in planets:
        f = risings_and_settings(eph, i, greenville)
        tz = timezone('US/Eastern')

        for t, updown in zip(*find_discrete(t0, t1, f)):
            dates.append(t.astimezone(tz).strftime('%Y-%m-%d %H:%M'))

    for ephem in ephems:
        ephem.rise_time = dates[0]
        ephem.rise_time = dates[0]
        ephem.set_time = dates[1]
        ephem.save()


@app.shared_task
def get_star_times():
    ts = load.timescale()

    # Updates the date.
    today = datetime.today().strftime('%Y-%m-%d').split('-')
    tomorrow = (datetime.today() + timedelta(days=1)).strftime(
        '%Y-%m-%d').split('-')

    t0 = ts.utc(int(today[0]), int(today[1]), int(today[2]))
    t1 = ts.utc(int(tomorrow[0]), int(tomorrow[1]), int(tomorrow[2]))

    dates = []

    greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
    # global planet
    for ep in stars:
        f = risings_and_settings(eph, ep, greenville)
        tz = timezone('US/Eastern')

        for t, updown in zip(*find_discrete(t0, t1, f)):
            dates.append(t.astimezone(tz).strftime('%Y-%m-%d %H:%M'))

        for star in star_ephems:
            star.rise_time = dates[0]
            star.set_time = dates[1]
            star.save()


@app.shared_task
def send_ephem_message():
    message_users_ephems()
