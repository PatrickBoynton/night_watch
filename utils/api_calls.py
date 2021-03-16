from skyfield.api import N, W, load, wgs84
from skyfield import almanac

ts = load.timescale()
t = ts.now()

planets = load('de421.bsp')
mars = planets['mars']
earth = planets['earth']
greenville = earth + wgs84.latlon(34.8526 * N, 82.3940 * W, elevation_m=299.923)


