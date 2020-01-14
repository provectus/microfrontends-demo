import React from 'react';
import { navigateToUrl } from 'single-spa';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default () => (
  <Router basename="/">
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
          <div className="navbar-end">
            <a href="/" onClick={navigateToUrl} className={'navbar-item ' + (!location.pathname.startsWith('/v2') && 'is-active')}>
              v1
            </a>
            <a href="/v2" onClick={navigateToUrl} className={'navbar-item ' + (location.pathname.startsWith('/v2') && 'is-active')}>
              v2
            </a>
            <div className="navbar-item">Some User</div>
          </div>
        </nav>
      )}
    />
  </Router>
);
