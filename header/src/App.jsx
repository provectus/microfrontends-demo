import React from 'react';
import { navigateToUrl } from 'single-spa';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter basename="/">
    <Route
      render={({ location }) => (
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <div className="navbar-item">Microfrontends Demo single-spa</div>
          </div>
          <div className="navbar-start">
            <a href="/" onClick={navigateToUrl} className={'navbar-item ' + (!location.pathname.includes('products') ? 'is-active' : undefined)}>
              Orders
            </a>
            <a href="/products" onClick={navigateToUrl} className={'navbar-item ' + (location.pathname.includes('products') ? 'is-active' : undefined)}>
              Products
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">Some User</div>
          </div>
        </nav>
      )}
    />
  </BrowserRouter>
);

export default App;
