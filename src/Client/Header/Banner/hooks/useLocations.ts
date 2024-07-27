import axios, { isAxiosError } from "axios"
import { Countrys } from "../interface/ConfigInterface";


export const useLocations = () => {


    const Config = async(setLocations:React.Dispatch<React.SetStateAction<Countrys | null>>) =>{
        try {
            const {data} = await axios.get('https://apitravelnode.vercel.app/api/freetours/county');
            console.log(data)
            setLocations(data)
        } catch (error) {
            if(isAxiosError(error)){
                console.log(error)
            }
        }
    }

  return {
    Config
  }
}
