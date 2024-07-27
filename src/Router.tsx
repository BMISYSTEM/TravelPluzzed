import { createBrowserRouter } from "react-router-dom";
import { HomeLayaut } from "./Client/HomeLayaut";
import { ListProductsLayout } from "./Client/ListProducts/views/ListProductsLayout";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayaut />,
        },
        {
            path:'country/:uuid',
            element: <ListProductsLayout />,
        },
    ]
);

export default router;