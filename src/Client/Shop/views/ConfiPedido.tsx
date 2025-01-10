import React, { useEffect, useState } from 'react'

export const ConfiPedido = () => {
    const [token,setToken] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token'); // Obtiene el valor del parámetro `token`
        console.log('Token:', token);
        setToken(token ?? '')
      }, []);
  return (
    <div>pedido confirmado token = {token}</div>
  )
}
