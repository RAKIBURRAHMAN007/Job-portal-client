import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <div>page not found</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'signin',
                element: <SignIn></SignIn>

            }
        ]
    },
]);
export default router;