import {motion} from "framer-motion";
import '../Styles/theme.css';
import { FaHeart,FaGift, FaLock } from "react-icons/fa";

export default function BirthDayMessage(){

return(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}
style={{
textAlign:"center",
padding:"40px",
maxWidth:"700px",
margin:"auto"
}}
>

<motion.h1 style={{color:"#ff4da6"}}>
 {"Pour toi".split("").map((char, index) => (
  <motion.span
   key={index}
   initial={{opacity:0, y:20}}
   animate={{opacity:1, y:0}}
   transition={{delay: index * 0.1, duration:0.5}}
  >
   {char}
  </motion.span>
 ))}
</motion.h1>

<p style={{fontSize:"20px",lineHeight:"35px", color: "#ffffff"}}>
 {`Aujourd'hui tu célèbre ton jour de naissance.

Mais pour moi, c'est encore plus spécial,
car c'est le jour ou ma princesse es né.

Je sais pas faire de long discours mais..
Profite juste de ta journée et.. des gens 
qui t'aime et te rende heureuse 

Je te souhaite un anniversaire rempli de bonheur,
de rêves réalisés
et de moments inoubliables.

Joyeux anniversaire ma princesse`.split("").map((char, index) => (
  <motion.span
   key={index}
   initial={{opacity:0, y:10}}
   animate={{opacity:1, y:0}}
   transition={{delay: 1 + index * 0.05, duration:0.3}}
  >
   {char === " " ? "\u00A0" : char}
  </motion.span>
 ))}
</p>

</motion.div>

)

}