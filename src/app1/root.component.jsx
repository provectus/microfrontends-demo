import * as React from 'react';

export default class Root extends React.Component {
  render() {
    const message = 'This was rendered by app 1 which was written in React';

    return <div style={{ marginTop: '100px' }}>{message}</div>;
  }
}
