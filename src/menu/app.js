import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Menu from './Menu.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Menu,
  domElementGetter,
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('menu');
  return el;
}
