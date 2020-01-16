
## Example of microfrontends using [single-spa](https://github.com/CanopyTax/single-spa)

Based on [simple-single-spa-webpack-example](https://github.com/joeldenning/simple-single-spa-webpack-example) and [coexisting-vue-microfrontends](https://github.com/joeldenning/coexisting-vue-microfrontends)

Every "component" is a separate React application. They all use [Bulma](https://github.com/jgthms/bulma) css-framework for UI consistency.

Notice that even though all those apps are in the same repo, you can move them to separate repos.

## Demo
Demo is at [https://microfrontends-demo-with-cdn.now.sh/products](https://microfrontends-demo-with-cdn.now.sh/products)

Notice that every app is loaded from external resource [https://microfrontends-example-cdn.now.sh/](https://microfrontends-example-cdn.now.sh/)

## How to use

### 1. Develop single app
If you want to develop single app, go to app folder (`header`, `orders`, `product`) and run
`npm install`
`npm run dev`
This will run `webpack-dev-server` with only this app and it will open in your browser.

### 2. Run all apps
If you need to run them all locally, you can do so with the following instructions

```sh
# First terminal tab
cd header
npm install
npm run serve
```
```sh
# Second terminal tab
cd orders
npm install
npm run serve
```

```sh
# Third terminal tab
cd products
npm install
npm run serve
```

```sh
# Fourth terminal tab
cd root-application
npm install
npm run serve
```

Now go to http://localhost:5000 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of `root-application/index.html` and in corresponding `webpack.serve.config`

## What can be improved
* Combine webpack config for less code duplication
* Combine entrypoints for less code duplication
* Download "react" from cdn / modify webpack config not to include react
* Script/docker to start all apps
* Script for building and deploying apps