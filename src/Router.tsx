import { createBrowserRouter } from "react-router-dom";
import { HomeLayaut } from "./Client/HomeLayaut";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayaut />,
        }
    ]
);

export default router;