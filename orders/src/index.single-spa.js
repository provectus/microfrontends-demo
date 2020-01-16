/* This file is an entrypoint for the "single-spa" version so it can work with root-application */

import './setPublicPath';
import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './App';
import singleSpaReact from 'single-spa-react';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
  domElementGetter: () => document.getElementById('content'),
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
