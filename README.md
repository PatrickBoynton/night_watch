# night_watch
This is a site desiged to show regular users the rise and set times of planests and stars. 
The people who create an account and log in can either create their own event to go to or they can ask to be notified of a planet rise happening via text.
## Note
Currently texts are not turned on as my number is the only one Twilio will currently let me send to. 
# Tech Used
This was a Django/React project that used Celery for automating the texts, and setting the rise and set times. 
Redis so that the regular application wouldn't be slowed down. Skyfield API for getting the rise and set times of the various celestial bodies.
I also used Twilio for  sending out the text messages.
## Note
Ephemeris is basically describing a celestial body like a planet or star.
