
import React, { useState } from "react"
import { ClientFooter } from "../../Footer/ClientFooter"
import { ClientNav } from "../../Header/nav/ClientNav"

import logo from '../assets/cielo.jpg'
import { toast, ToastContainer } from "react-toastify"
import { ClienteAxios } from "../../../config/ClienteAxios"
import { isAxiosError } from "axios"
import { useNavigate } from "react-router-dom"

export interface Login {
    sucess: string;
    rol:    number;
    nombre: string;
}



export const LoginLayout = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigation = useNavigate()
    const login = async(e:React.FormEvent) =>{
        e.preventDefault()
        const datos = {
            email,
            password
        }
        try {
           const {data} = await ClienteAxios.post('/api/auth/login',datos)  
           const respuesta:Login = data;
           localStorage.setItem('token',respuesta.sucess)
           localStorage.setItem('nombre',respuesta.nombre)
           navigation('/panel')
        } catch (error) {
            if(isAxiosError(error))
            {
                if(error?.response?.data){
                    if(error?.response?.data?.usuario)
                        toast.error(error?.response?.data.usuario); // Accede al mensaje de error correctamente
                    if(error?.response?.data?.password){
                        toast.error(error?.response?.data.password); 
                    }
                }
                if(error.response?.data?.errors)
                {
                    const errores = Object.values(error.response.data.errors) as { msg: string }[];
                    errores.forEach((err) => {
                        toast.error(err.msg); // Accede al mensaje de error correctamente
                      });
                }
            }
        }
    }
  return (
    <section className="w-full h-full flex flex-col  ">
        <ClientNav/>
            <main className="w-full h-screen flex flex-col items-center justify-center bg-blue-200 relative">
                <div className="absolute w-full h-full flex justify-center items-center ">
                    <img src={logo} alt="" className="w-full h-full object-fill" />
                </div>
                {/* tarjeta de login*/}
                <div className="w-96 h-[30rem] p-5 bg-white/30 shadow-2xl gap-5 items-center justify-center backdrop-blur-xl rounded-xl flex flex-col">
                    <p className="text-xl font-semibold text-blue-950 justify-center">Ingresa a tu cuenta</p>
                    <form onSubmit={login} action="" className="w-full flex flex-col gap-3 justify-center items-center">
                        <div className="relative w-full flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute text-slate-500 mt-1 mx-2">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email" className="py-1 px-10 w-full rounded-xl bg-slate-200" />
                        </div>
                        <div className="relative w-full flex items-center  ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-6 h-6 text-slate-500 mt-1 mx-2">
                                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                            </svg>
                            <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder="Password" className="py-1 px-10 w-full rounded-xl bg-slate-200"/>
                        </div>
                        <div className="w-full flex flex-row justify-end">
                            <button className="text-sm font-semibold text-end hover:text-blue-500 transition-all ">Olvide mi contraseña</button>
                        </div>
                        <div className="w-full flex flex-row justify-center">
                            <button className="py-1 px-4 bg-blue-950 rounded-xl text-white font-semibold">
                                Iniciar ahora
                            </button>
                        </div>
                    </form>
                </div>

            </main>
        <ClientFooter/>
    <ToastContainer/>
    </section>
  )
}
