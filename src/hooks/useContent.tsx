import axios from "axios";
import { useEffect, useState } from "react"
import { Default_URL } from "../config";

export const useContent = () => {
    const [content , setContent ] = useState([]);
    
    useEffect( () => {
        axios.get(`${Default_URL}/api/v1/content`, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        }).then( (response) => setContent(response.data.content) )
    } , []);

    return content;
}