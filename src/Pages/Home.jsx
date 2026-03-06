import {motion} from "framer-motion";
import { FaHeart,FaGift, FaLock } from "react-icons/fa";
import '../Styles/theme.css';

export default function Home(){

return(

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:2}}
style={{textAlign:"center",marginTop:"80px"}}
>

<motion.h1 style={{fontSize:"60px",color:"#ff4da6"}}>
 Joyeux Anniversaire <FaHeart color="red"/>
</motion.h1>

<motion.h2
initial={{y:-100}}
animate={{y:0}}
transition={{duration:1}}
style={{color: "#ffffff"}}
>
A Ma Princesse
</motion.h2>

<p style={{fontSize:"20px",maxWidth:"600px",margin:"auto", color: "#ffffff"}}>

Aujourd'hui est un jour spécial...

</p>

</motion.div>

)

}