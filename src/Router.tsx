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
import { ShopLayout } from "./Client/Shop/views/ShopLayout";
import { LoginLayout } from "./Client/Login/views/LoginLayout";
import { PaisLayout } from "./Pannel/Pais/PaisLayout";
import { CiudadesLayout } from "./Pannel/Ciudades/CiudadesLayout";
import { PaisLayoutClient } from "./Client/Pais/PaisLayoutClient";
import { ActividadCiudadLayout } from "./Client/ActividadesCiudad/ActividadCiudadLayout";
import { UsuariosLayout } from "./Pannel/Usuarios/UsuariosLayout";
import ActividadLayout from "./Pannel/Actividad/ActividadLayout";
import { ConfiPedido } from "./Client/Shop/views/ConfiPedido";
import { CancelPedido } from "./Client/Shop/views/CancelPedido";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayaut />,
        },
        {
            path:'/shop',
            element: <ShopLayout />,
        },
        {
            path:'/pay/ok',
            element: <ConfiPedido />,
        },
        {
            path:'/pay/not',
            element: <CancelPedido />,
        },
        {
            path:'/login',
            element: <LoginLayout />,
        },
        {
            path:'pais/:id',
            element: <PaisLayoutClient />,
        },
        {
            path:'actividades/:pais/:ciudad',
            element: <ActividadCiudadLayout />,
        },
        {
            path:'/actividades/detalle/local/:id',
            element: <ActividadLayout />,
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
                    path:'/panel/pais',
                    element:<PaisLayout/>
                },
                {
                    path:'/panel/ciudades',
                    element:<CiudadesLayout/>
                },
                {
                    path:'/panel/usuarios',
                    element:<UsuariosLayout/>
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