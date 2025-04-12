import { memo, useRef, useState } from "react"
import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { Default_URL } from "../config"

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Document = "document",
    Link = "link"
}

// controllable component
export const AddContentModel = ({ isOpen , onClose }:{ isOpen : boolean , onClose : () => void}) => {
    const [type ,setType] = useState(ContentType.Youtube);
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    async function addContent() {
        const title = titleRef.current?.value;    
        const link = linkRef.current?.value;
        
        // request send to backend
        await axios.post(`${Default_URL}/api/v1/content`, {
            link ,
            title,
            type,
        }, {
            headers: {
                Authorization : localStorage.getItem("token")
            }
        })
        alert("Content added");
    }
    return (
    isOpen && <div className="bg-slate-700/50 w-screen h-screen fixed top-0 flex justify-center items-center" onClick={onClose}>
        <div className="bg-white p-4 " onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end cursor-pointer" >
                <div onClick={onClose}>
                    <CloseIcon/>
                </div>
            </div>
            
            <MemoInputBox inputRef={titleRef} inputText="Title" required={true}/>
            <MemoInputBox inputRef={linkRef} inputText="Link" required={true} />
            
            <div className="flex">
                <Button variant={(type === ContentType.Youtube)?"primary":"secondary"} text="Youtube" onClick={() => setType(ContentType.Youtube)}/>
                <Button variant={(type === ContentType.Twitter)?"primary":"secondary"} text="Twitter" onClick={() => setType(ContentType.Twitter)}/>
                <Button variant={(type === ContentType.Document)?"primary":"secondary"} text="Document" onClick={() => setType(ContentType.Document)}/>
                <Button variant={(type === ContentType.Link)?"primary":"secondary"} text="Link" onClick={() => setType(ContentType.Link)}/>
            </div>

            <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" text="Submit"/>
            </div>
        </div>
    </div>
    )
}

const MemoInputBox = memo(({inputRef , inputText , required } : { inputRef : any , inputText : string , required : boolean}) => {
    return <div className="p-2 ">
    <div className="pl-2 text-xl">{`${inputText} : `}</div>
    <div className="w-full">
        <Input ref={inputRef} placeholder={inputText} required={required} />
    </div>
</div>
})