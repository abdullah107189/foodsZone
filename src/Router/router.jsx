import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home";
import Login from "../Page/Form/Login";
import Register from "../Page/Form/Register";
import AboutUs from "../Page/AboutUs/AboutUs";
import Service from "../Page/Service/Service";
import Profile from "../Page/User/Profile";
import ViewRecipes from "../Page/Home/ViewRecipes";
import PrivateRoutes from "../Routes/PrivateRoutes";
import ErrorPage from "../Page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/reg",
                element: <Register />,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/data/:id',
                element: <PrivateRoutes><ViewRecipes></ViewRecipes></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://foods-zone-server.vercel.app/data/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ],
    },
]);
export default router;