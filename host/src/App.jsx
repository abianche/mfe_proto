import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remote1/RemoteButton"));
const RemoteHeader = React.lazy(() => import("remote2/RemoteHeader"));

export default function App() {
  return (
    <div>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading Remotes...</div>}>
        <RemoteHeader />
        <RemoteButton />
      </Suspense>
    </div>
  );
}
