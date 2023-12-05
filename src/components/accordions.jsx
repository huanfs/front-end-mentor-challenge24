import { useState } from "react";
/*components*/
import OpenClose from "./openClose.jsx";
const Accordion = ({summary, text}) => {
    const[state, setState] = useState(true);
    
    function State(){
        setState((state)=>!state);
    }
    return(
        <details>
            <summary onClick={State}>{summary}<OpenClose state={state}/></summary>
            <p>
                {text}
            </p>
        </details>
    )
}

export default Accordion;