import React from "react";
import Confetti from "react-confetti";
import {motion} from "framer-motion";
import '../Styles/theme.css';
import { FaHeart,FaGift, FaLock } from "react-icons/fa";

export default function Surprise(){

return(

<motion.div style={{textAlign:"center",marginTop:"80px"}}>

<Confetti/>

<motion.h1
initial={{scale:0}}
animate={{scale:1}}
transition={{duration:1}}
style={{fontSize:"70px",color:"#ffffff"}}
>

 HAPPY BIRTHDAY PRINCESSE <FaGift color="red"/>

</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
style={{fontSize:"24px", color: "#ffffff"}}
>

Profite de cette journée tu le mérite !<FaHeart color="red"/>

</motion.p>

</motion.div>

)

}