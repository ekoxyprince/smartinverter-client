import DashboardLayout from "../components/layout/DashboardLayout"
import Dashboard from "../pages/dashboard/Dashboard"
import Analytics from "../pages/dashboard/Analytics"
import Settings from "../pages/dashboard/Settings"
import IsAuth from "../services/ProtectedRoute"

export default {
    path:"/",
    element:<IsAuth><DashboardLayout/></IsAuth>,
    children:[
        {
            path:'/',
            element:<Dashboard/>,
            index:true
        },
        {
            path:'/analytics',
            element:<Analytics/>,
        },
        {
            path:'/settings',
            element:<Settings/>
        }
    ]
}