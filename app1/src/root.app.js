import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './App';
import singleSpaReact from 'single-spa-react';
import './setPublicPath';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter: () => document.getElementById('header'),
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
