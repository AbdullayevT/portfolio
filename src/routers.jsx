import { lazy } from "react";
import DashboardLayout from "./Layouts/DashboardLayout";
import Main from "./views/Main";
const DashBoard = lazy(() => import("@/views/Dashboard"));

export const routers = [
  {
    path: "*",
    isPublic: false,
    element: <DashboardLayout />,
  },
];
