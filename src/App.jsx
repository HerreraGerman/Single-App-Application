import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './styles/App.css';
import ErrorPage from "./error-page";
import Home from './routes/home';
import MyProyects from './routes/myProyects';
import MyStories from './routes/myStories';
import Settings from './routes/settings';
import NavBar from './components/navBar';

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "myProyects",
        element: <MyProyects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "myStories",
        element: <MyStories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

export default App;