import { createBrowserRouter } from "react-router-dom";
import { HomeLayaut } from "./Client/HomeLayaut";
import { ListProductsLayout } from "./Client/ListProducts/views/ListProductsLayout";
import { ActivitiesLayaout} from "./Client/activities/views/ActivitiesLayaout"
import { LayoutPanel } from "./Pannel/layoutPanel/LayoutPanel";
import { DestinosLayout } from "./Pannel/destinos/DestinosLayout";
import { BlogsLayout } from "./Pannel/blogs/BlogsLayout";
import { FotosLayout } from "./Pannel/Fotos/FotosLayout";
import { AdquiridosLayout } from "./Pannel/Adquiridos/AdquiridosLayout";
import { NosotrosLayout } from "./Pannel/Nosotros/NosotrosLayout";
import { ComentariosLayout } from "./Pannel/comentarios/ComentariosLayout";
import ApisLayout from "./Pannel/Apis/ApisLayout";


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
            path: '/activity/:id',
            element: <ActivitiesLayaout />
        },
        {
            path: '/panel',
            element: <LayoutPanel />,
            children:[
                {
                    path:'/panel/destinos',
                    element:<DestinosLayout/>
                },
                {
                    path:'/panel/blogs',
                    element:<BlogsLayout/>
                },
                {
                    path:'/panel/fotos',
                    element:<FotosLayout/>
                },
                {
                    path:'/panel/pedidos',
                    element:<AdquiridosLayout/>
                },
                {
                    path:'/panel/nosotros',
                    element:<NosotrosLayout/>
                },
                {
                    path:'/panel/opiniones',
                    element:<ComentariosLayout/>
                },
                {
                    path:'/panel/apis',
                    element:<ApisLayout/>
                }
            ]   
        }
    ]
);

export default router;