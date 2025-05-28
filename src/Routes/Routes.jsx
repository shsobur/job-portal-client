// File path__
import Main from "../Layouts/MainLayouts/Main/Main";
import ErrorPage from "../Layouts/Components/Error/ErrorPage";
import HomePageLayout from "../Layouts/MainLayouts/Pages/HomePageLayout/HomePageLayout";

// Imported package__
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children : [
      {
        path: "/",
        element: <HomePageLayout></HomePageLayout>
      }
    ]
  },
]);

export default router;