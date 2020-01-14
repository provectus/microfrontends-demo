import * as singleSpa from 'single-spa';

singleSpa.registerApplication('header', () =>
  import ('../header/app.js'), () => true);
singleSpa.registerApplication('menu', () =>
  import ('../menu/app.js'), () => true);
singleSpa.registerApplication('products', () =>
  import ('../products/app.js'), pathPrefix('/orders'));
singleSpa.registerApplication('orders', () =>
  import ('../orders/app.js'), pathPrefix('/products'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}