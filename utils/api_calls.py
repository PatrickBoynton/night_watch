from skyfield.api import N, W, load, wgs84

planets = load('de421.bsp')
earth, sun = planets['earth'], planets['sun']
ts = load.timescale()
t = ts.now()

greenville = earth + wgs84.latlon(34.8526 * N, 82.3940 * W)
astrometric = greenville.at(t).observe(sun)

alt, az, d = astrometric.apparent().altaz()

print(alt)
