Time API
========

A simple REST API that gives you the current time and date in GMT.

Installation
------------

```
git clone git@github.com:per-nilsson/time-api.git
npm install
```

Run
---

```
node server.js
open http://0.0.0.0:8000/time
```

Remote Access
-------------

Time API is deployed to Heroku:

`curl http://peaceful-dawn-5311.herokuapp.com/time`

```
{
  "timezone": "GMT",
  "date": "Mon Aug 04 2014",
  "time": "9:23:42",
  "hour": 9,
  "minute": 23,
  "second": 42,
  "year": 2014,
  "month": 7,
  "day": 4
}
```

