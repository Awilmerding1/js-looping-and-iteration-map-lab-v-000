// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(d) {return d.toLowerCase()});
  return newDrivers;
}

function nameToAttributes(drivers) {
  const newDrivers = drivers.map(function(d) { return Object.assign({}, d, { firstName: d.split(" ") })
  });
  return newDrivers;
}