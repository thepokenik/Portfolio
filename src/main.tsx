import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

// Routes
import App from './App.tsx';

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Toast
import { Toaster } from './components/ui/toaster.tsx';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={BrowserRouter} />
      <Toaster />
  </React.StrictMode>,
)
