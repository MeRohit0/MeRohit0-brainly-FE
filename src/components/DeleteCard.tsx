import axios from "axios"
import { Default_URL } from "../config"

interface DeleteCardProps {
  contentId ?: string
}
export const DeleteCard = async ({contentId}:DeleteCardProps) => {
    const response = await axios.delete(`${Default_URL}/api/v1/content/${contentId}` ,{
      headers :{
        Authorization : localStorage.getItem("token")
      }
    })

    return response.data;
  } 