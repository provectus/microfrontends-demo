import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Header from './Header.js';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Header,
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
  let el = document.getElementById('header');
  return el;
}
