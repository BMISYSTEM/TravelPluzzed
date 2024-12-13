import axios from "axios";

export const ClienteAxios = axios.create({
    baseURL: import.meta.env.VITE_URL_BACK, // Cambia por la URL base de tu API
    timeout: 10000, // Tiempo de espera (opcional)
    headers: {
      'Content-Type': 'application/json', // Valor predeterminado, se puede sobrescribir
    },
  });