import { createBrowserRouter } from "react-router-dom";
import authRoute from "./authRoute";
import DashboardRoutes from "./DashboardRoutes";

const router = createBrowserRouter([
    ...authRoute,
    DashboardRoutes
])

export default router