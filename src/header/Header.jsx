import * as React from 'react';
import { navigateToUrl } from 'single-spa';
export default function Root(props) {
  return (
    <div class="navbar">
      <ul>
        <a onClick={() => navigateToUrl('/app1')}>
          <li>App 1</li>
        </a>
        <a onClick={() => navigateToUrl('/app2')}>
          <li>App 2</li>
        </a>
      </ul>
    </div>
  );
}
