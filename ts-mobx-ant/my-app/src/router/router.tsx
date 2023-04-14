import { useRoutes } from "react-router-dom"
import Layouts from "../modules/Layout/Layout"
import { Home } from "../pages/Home"
export const Router = () => useRoutes([
    {
        path: "/",
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])