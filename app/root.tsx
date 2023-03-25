import { Outlet, LiveReload } from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>MY Remix Blog</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development"}
      </body>
    </html>
  );
}
