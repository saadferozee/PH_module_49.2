import { createBrowserRouter } from "react-router"
import Root from "../Components/Root"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Login from "../Pages/Login"
import Register from "../Pages/Register"


const router = createBrowserRouter([
    {
        path: '/', 
        Component: Root,
        children: [
            {index: true, Component: Home},
            {path: '/about', Component: About},
            {path: '/login', Component: Login},
            {path: '/register', Component: Register}
        ]
    }
])

export default router;