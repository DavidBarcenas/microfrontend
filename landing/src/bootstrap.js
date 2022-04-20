import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
}

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = mount(document.getElementById('_landing-root'))

  if (devRoot) {
    mount(devRoot)
  }
}

// We are running through container
// and we should export the mount function
export { mount }