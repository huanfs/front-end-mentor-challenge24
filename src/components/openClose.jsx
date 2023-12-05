import { useEffect } from "react";

const OpenClose = ({state}) => {
    useEffect(()=>{
        console.log("oi");
    },[state])
    return(
        {/*<img src={`src/images/${icone}`}/>*/},
        <img src={state==true?"../../public/images/icon-plus.svg":"../../public/images/icon-minus.svg"}/>
    )
}

export default OpenClose;