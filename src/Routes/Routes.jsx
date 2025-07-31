// File path__
import Main from "../Layouts/MainLayouts/Main/Main";
import SignIn from "../Layouts/Authentication/SignIn/SignIn";
import SignUp from "../Layouts/Authentication/SignUp/SignUp";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import HomePageLayout from "../Layouts/MainLayouts/Pages/HomePageLayout/HomeLayout/HomePageLayout";

// Imported package__
import { createBrowserRouter } from "react-router";
import Dashboard from "../Layouts/DashboardLayouts/Dashboard/Dashboard";
import AddJob from "../Layouts/DashboardLayouts/Pages/AddJob/AddJob";
import FindJobsLayout from "../Layouts/MainLayouts/Pages/FindJobs/FindJobsLayout/FindJobsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>,
      },
      {
        path: "/find-jobs",
        element: <FindJobsLayout></FindJobsLayout>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/add-job",
        element: <AddJob></AddJob>,
      },
    ],
  },
]);

export default router;
