import { useState } from "react";

const [fix, setFix] = useState(false)

function setFixed(){

 const setFi = () => { if (window.scrollY>=95){
    setFix(true)
    }else{
    setFix(false)
}}

window.addEventListener('scroll',setFi)
return fix
}

export default setFixed