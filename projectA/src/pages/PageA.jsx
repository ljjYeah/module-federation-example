import React from 'react';

const RemoteButton = React.lazy(() => import("projectB/Button"));

export default () => {
  return <div>
    <h1>project A ---> page A</h1>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
}
