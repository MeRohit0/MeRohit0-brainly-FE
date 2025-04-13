import axios from "axios";
import { useEffect, useState } from "react"
import { Default_URL } from "../config";

interface ContentType {
    _id : string ;
    link : string ; 
    type : "youtube" | "twitter" | "document" | "link"; 
    tags : any[] ;
    title : string ;
}

export const useContent = ():{ content: ContentType[], refresh : () => void } => {
    const [content , setContents ] = useState<ContentType[]>([]);
    
    function refresh(){
        axios.get(`${Default_URL}/api/v1/content`, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        }).then( (response) => setContents(response.data.content) )
    }

    useEffect( () => {
        refresh();
        const clock = setInterval( () => {
            refresh();
        }, 10 * 1000);

        return () => clearInterval(clock);
    } , []);

    return { content, refresh };
}