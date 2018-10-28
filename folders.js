// 1. parse routes into a data structure
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

// 2.Traverse data and display as:
/*********************************************

    - account
      - orders
        - id
      - profile
        - edit
    - drugs
      - lipitor
        - usage
        - warnings
      - xanax
        - usage
        - warnings

    *********************************************/
/*
    {
      'account': { 'orders': {'id': null}}
    }
    */

const listOfRoutes = [];

let routeMap = {};
for (let route of routes) {
  addRoutes(route.split('/'), routeMap);
}

function addRoutes(items, current) {
  for (let item of items) {
    if (!current[item]) current[item] = {};
    current = current[item];
  }
}

let printThese = getKeys(routeMap);

for (let item of printThese) {
  console.log(item);
}

function getKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push('-' + key);
    if (obj[key].constructor === Object) {
      keys = keys.concat(
        getKeys(obj[key]).map(function(subkey) {
          return ' ' + subkey;
        })
      );
    }
  }
  return keys;
}
