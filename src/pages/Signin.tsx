import axios from "axios";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Default_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    let navigate = useNavigate();

    async function submit() {
 
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        

        const response = await axios.post(`${Default_URL}/api/v1/signin`, {
            username,
            password
        })
        
        localStorage.setItem("token" , response.data.data);
        
        navigate("/dashboard");

    }

    return <div className="w-screen h-screen bg-slate-600 flex justify-center items-center"> 
        <div className="bg-white flex flex-col justify-center p-5">
            <div className="m-4">
                <Input ref={usernameRef} placeholder="Username"/>
            </div>
            <div className="m-4">
                <Input ref={passwordRef} inputType="password" placeholder="Password"/>
            </div>
            <div className="flex justify-center">
                <Button onClick={submit} variant="primary" text="Login" pointer={true}/>
            </div>
        </div>
    </div>
}