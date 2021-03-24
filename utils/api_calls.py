from skyfield.api import N,  W, wgs84, load
from skyfield.almanac import find_discrete, risings_and_settings
from pytz import timezone

ts = load.timescale()
t0 = ts.utc(2021, 3, 18)
t1 = ts.utc(2021, 3, 19)
eph = load('de421.bsp')

greenville = wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)
planet = eph['andromeda']

f = risings_and_settings(eph, planet, greenville)
tz = timezone('US/Eastern')

for t, updown in zip(*find_discrete(t0, t1, f)):
    print(t.astimezone(tz).strftime('%a %d %H:%M'), 'EST',
          'rises' if updown else 'sets')
