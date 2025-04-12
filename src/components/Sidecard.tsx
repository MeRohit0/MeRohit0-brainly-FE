import { BrainlyIcon } from "../icons/BrainlyIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { HashIcon } from "../icons/HashIcon"
import { LinkIcon } from "../icons/LinkIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SideCardItem } from "./SidecardItem"

export const SideCard = () => {
    return <div className="w-64 border-r border-slate-300 h-screen fixed">
        <div className="flex p-5 justify-evenly items-center">
            <div className="text-[#5046e4]">
                <BrainlyIcon/>
            </div>
            <div className="font-bold text-xl">
                Second Brain
            </div>
        </div>
    
        <SideCardItem icon={<TwitterIcon/>} title="Tweets"/>
        <SideCardItem icon={<YoutubeIcon/>} title="Videos"/>
        <SideCardItem icon={<DocumentIcon/>} title="Documents"/>
        <SideCardItem icon={<LinkIcon/>} title="Links"/>
        <SideCardItem icon={<HashIcon/>} title="Tags"/>
        

    </div>
} 