import { createBrowserRouter } from "react-router-dom";
import { HomeLayaut } from "./Client/HomeLayaut";
import { ListProductsLayout } from "./Client/ListProducts/views/ListProductsLayout";
import { ActivitiesLayaout} from "./Client/activities/views/ActivitiesLayaout"


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
        {
            path: '/activity/n',
            element: <ActivitiesLayaout />
        }
    ]
);

export default router;