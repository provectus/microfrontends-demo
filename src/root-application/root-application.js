import * as singleSpa from 'single-spa';

singleSpa.registerApplication(
  'header',
  () => import('../header/app.js'),
  () => true,
);
singleSpa.registerApplication(
  'menu',
  () => import('../menu/app.js'),
  () => true,
);
singleSpa.registerApplication(
  'products',
  () => import('../v1/products/app.js'),
  pathPrefix('/products'),
);
singleSpa.registerApplication(
  'orders',
  () => import('../v1/orders/app.js'),
  exactPath('/'),
);
singleSpa.registerApplication(
  'new-products',
  () => import('../v2/products/app.js'),
  pathPrefix('/v2/products'),
);
singleSpa.registerApplication(
  'new-orders',
  () => import('../v2/orders/app.js'),
  exactPath('/v2'),
);

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  };
}

function exactPath(path) {
  return function(location) {
    return location.pathname === path || location.pathname === path + '/';
  };
}
