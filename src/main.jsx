// File ptah__
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";

// From react__
import { StrictMode } from "react";

// Imported package__
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </StrictMode>
);