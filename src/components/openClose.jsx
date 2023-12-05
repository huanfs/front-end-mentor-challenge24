import { useEffect } from "react";


const OpenClose = ({state}) => {
    useEffect(()=>{
        console.log("oi");
    },[state])
    return(
        {/*<img src={`src/images/${icone}`}/>*/},
        <img src={state==true?`src/images/icon-plus.svg`:`src/images/icon-minus.svg`}/>
    )
}

export default OpenClose;