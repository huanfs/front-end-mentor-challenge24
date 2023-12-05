import { useEffect } from "react";
import icon_open from "../images/"

const OpenClose = ({state}) => {
    useEffect(()=>{
        console.log("oi");
    },[state])
    return(
        {/*<img src={`src/images/${icone}`}/>*/},
        <img src={state==true?`../images/icon-plus.svg`:`../images/icon-minus.svg`}/>
    )
}

export default OpenClose;