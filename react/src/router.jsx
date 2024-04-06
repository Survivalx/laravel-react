import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Cars from "./pages/Cars";
import CreateCar from "./pages/CreateCar";
import Car from "./pages/Car";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: "/cars",
                element: <Cars />
            },
            {
                path: "/new-car",
                element: <CreateCar />
            },
            {
                path: "/update-car/:id",
                element: <CreateCar />
            },
            {
                path: "/car/:id",
                element: <Car />
            }
        ]
    }
])

export default router;
