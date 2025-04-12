import { ReactElement } from "react"

export const SideCardItem = ({icon , title}: {icon ?: ReactElement , title : string}) => {
    return <div className="flex items-center m-3 p-2 justify-start rounded transition-all hover:bg-slate-300/60 cursor-pointer">
        <div className="px-2">
            { icon }
        </div>
        <div className="px-2">
            { title }
        </div>
    </div>
}