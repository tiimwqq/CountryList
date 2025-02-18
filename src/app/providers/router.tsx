import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../../pages/HomePage/HomePage";
import { CountryPage } from "../../pages/CountryPage/CountryPage";
import { Layout } from "../../shared/ui/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "country/:code", element: <CountryPage /> },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;
