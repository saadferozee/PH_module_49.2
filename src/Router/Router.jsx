import { createBrowserRouter } from "react-router"
import Root from "../Components/Root"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import PrivateRoute from "./PrivateRoute"
import Orders from "../Pages/Orders"
import Profile from "../Pages/Profile"
import Error from "../Components/Error"


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: Home },
            { path: '/about', Component: About },
            { path: '/login', Component: Login },
            { path: '/register', Component: Register },
            { path: '/orders', element: <PrivateRoute> <Orders></Orders> </PrivateRoute> },
            { path: '/profile', element: <PrivateRoute> <Profile></Profile> </PrivateRoute> },
            { path: '/*', Component: Error }
        ]
    }
])

export default router;