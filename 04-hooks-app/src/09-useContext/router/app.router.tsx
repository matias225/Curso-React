import { createBrowserRouter, Navigate } from "react-router";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/profile",
    // element: <ProfilePage />,
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <Navigate to='/' />
  },
]);