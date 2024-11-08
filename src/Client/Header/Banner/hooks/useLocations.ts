import axios, { isAxiosError } from "axios"
import { Countrys } from "../interface/ConfigInterface";


export const useLocations = () => {


    const Config = async(setLocations:React.Dispatch<React.SetStateAction<Countrys | null>>) =>{
        try {
            const {data} = await axios.get('http://localhost:3000/api/freetours/county');
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
