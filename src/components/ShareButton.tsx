import axios from "axios"
import { Default_URL } from "../config"

export const ShareButton = async () => {
    
    const response = await axios.post(`${Default_URL}/api/v1/brain/share`,{
      share : true
    }, {
        headers :{
            Authorization : localStorage.getItem("token")
        }
    })

    const shareUrl = `${Default_URL}/api/v1/brain/${response.data.hash}` 
    await navigator.clipboard.writeText(shareUrl);
    alert("Link has been copy to clipboard");
  }