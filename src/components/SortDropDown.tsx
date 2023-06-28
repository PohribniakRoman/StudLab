import {useCallback,useState} from "react"

export type SortDropDownTypeIE = {
    state:string,
}

export const SortDropDown:React.FC<SortDropDownTypeIE> = ({state}:SortDropDownTypeIE) =>{
    return <select className="select" onChange={(e)=>{console.log(e);
    }}>
        <option value="date-new">Дата(нові)</option>
        <option value="date-old">Дата(старі)</option>
    </select>
}