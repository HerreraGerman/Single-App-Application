import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import { Epic } from "../pages/Epic";
import { MyProyects } from "../pages/MyProjects";
import { MyStories } from "../pages/MyStories";
import { Story } from "../pages/Story";
import ProjectDetails from "../pages/ProjectDetails";
import Settings from "../pages/Settings";
import Login from "../pages/Login";

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
        path: "/myprojects",
        element: <MyProjects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/myprojects/:projectId",
        element: <ProjectDetails />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/myprojects/:projectId/:epicId",
        element: <Epic />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/myprojects/:projectId/:epicId/:storyId",
        element: <Story />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mystories",
        element: <MyStories />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/settings",
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default Router;