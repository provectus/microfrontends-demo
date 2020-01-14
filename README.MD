
Example of microfrontends using [single-spa](https://github.com/CanopyTax/single-spa)

Based on [simple-single-spa-webpack-example](https://github.com/joeldenning/simple-single-spa-webpack-example)

Every "component" is a separate React application. They all use shared React version to make user download less (however, we can use separate versions). They all use [Bulma](https://github.com/jgthms/bulma) css-framework for UI consistency.

## What can be improved
* Move every app into separate repository using `system-js` (example [https://github.com/joeldenning/coexisting-vue-microfrontends](https://github.com/joeldenning/coexisting-vue-microfrontends))
* Create event-bus to pass messages
