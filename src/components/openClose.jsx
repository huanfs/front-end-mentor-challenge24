/*images*/
import open from "../../public/images/icon-plus.svg";
import close from "../../public/images/icon-minus.svg"
const OpenClose = ({state}) => {
    return(
        <img src={state==true?open:close} alt="icon" />
    )
}

export default OpenClose;