import React from 'react';
import { navigateToUrl } from 'single-spa';

export default () => (
  <div className="menu">
    <p className="menu-label">Menu</p>
    <ul className="menu-list">
      <li>
        <a onClick={() => navigateToUrl('/orders')}>Orders</a>
      </li>
      <li>
        <a onClick={() => navigateToUrl('/products')}>Products</a>
      </li>
    </ul>
  </div>
);
