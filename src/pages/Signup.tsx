import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { Default_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const submit =  async() => {
        const username = usernameRef.current?.value ;
        const password = passwordRef.current?.value ;

        await axios.post(`${Default_URL}/api/v1/signup`, { 
            username,
            password
        })
        alert("You have signup !");
        navigate("/signin");
        
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
                <Button onClick={() => submit()} variant="primary" text="Signup" pointer={true}/>
            </div>
        </div>
    </div>
}