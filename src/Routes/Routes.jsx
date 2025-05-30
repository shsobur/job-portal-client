// File path__
import Main from "../Layouts/MainLayouts/Main/Main";
import SignIn from "../Layouts/Authentication/SignIn/SignIn";
import SignUp from "../Layouts/Authentication/SignUp/SignUp";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import HomePageLayout from "../Layouts/MainLayouts/Pages/HomePageLayout/HomeLayout/HomePageLayout";

// Imported package__
import { createBrowserRouter } from "react-router";

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
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;