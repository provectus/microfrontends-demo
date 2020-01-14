import React from 'react';
import { navigateToUrl } from 'single-spa';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function getVersionName(location) {
  return location.pathname.startsWith('/v2') ? 'v2' : '';
}

function getPathWithVersion(location, path) {
  return (location.pathname.startsWith('/v2') ? '/v2/' : '/') + path;
}

export default () => {
  return (
    <Router basename="/">
      <Route
        render={({ location }) => (
          <div className="menu">
            <p className="menu-label">Menu {getVersionName(location)}</p>
            <ul className="menu-list">
              <li>
                <a
                  href={getPathWithVersion(location, '')}
                  onClick={navigateToUrl}
                  className={
                    !location.pathname.includes('products') ? 'is-active' : undefined
                  }
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href={getPathWithVersion(location, 'products')}
                  onClick={navigateToUrl}
                  className={
                    location.pathname.includes('products') ? 'is-active' : undefined
                  }
                >
                  Products
                </a>
              </li>
            </ul>
          </div>
        )}
      />
    </Router>
  );
};
