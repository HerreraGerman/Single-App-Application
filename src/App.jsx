import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './styles/App.css';
import ErrorPage from "./pages/ErrorPage";
import Home from './pages/Home';
import MyProyects from './pages/MyProjects';
import MyStories from './pages/MyStories';
import Settings from './pages/Settings';
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
        path: "myproyects",
        element: <MyProyects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "mystories",
        element: <MyStories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "epics",
        element: <Epics />,
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