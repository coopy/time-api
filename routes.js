function getTime(request, reply) {
  var date = new Date();
  
  reply({
    timezone: 'GMT',
    date: date.toDateString(),
    time: [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].join(':'),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
    second: date.getUTCSeconds(),
    year: date.getFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDate(),
    weekday: date.get
  });
}

module.exports = [
  { method: 'GET', path: '/time', handler: getTime }
];

