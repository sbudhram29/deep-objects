const routes = [
  'account',
  'account/orders',
  'account/orders/id',
  'account/profile',
  'account/profile/edit',
  'drugs',
  'drugs/lipitor',
  'drugs/lipitor/usage',
  'drugs/lipitor/warnings',
  'drugs/xanax',
  'drugs/xanax/usage',
  'drugs/xanax/warnings'
];

let parms = {};

for (let i of routes) {
  let current = parms;

  for (let j of i.split('/')) {
    if (typeof current[j] === 'object') {
      current = current[j];
    } else {
      current[j] = {};
    }
  }
}

function printParams(routes, delimeter) {
  for (let i in routes) {
    console.log(delimeter + i);

    if (typeof routes[i] === 'object') {
      printParams(routes[i], ' ' + delimeter);
    }
  }
}

printParams(parms, '-');
console.log(typeof routes);
