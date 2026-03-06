import {motion} from "framer-motion"
import '../Styles/theme.css';

import photo1 from "../photos/photo 1.jpeg"
import photo2 from "../photos/photo 2.jpeg"
import photo3 from "../photos/photo 3.jpeg"
import photo4 from "../photos/photo 4.jpeg"
import photo5 from "../photos/photo 5.jpeg"
import photo6 from "../photos/photo 6.jpeg"
import photo7 from "../photos/photo 7.jpeg"
import photo8 from "../photos/photo 8.jpeg"

const photos=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,]

export default function PhotoGallery(){

return(

<motion.div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px",
padding:"40px"
}}>

{photos.map((img,index)=>(
<motion.img
key={index}
src={img}
initial={{opacity:0, scale:0.8, rotate: -10}}
animate={{opacity:1, scale:1, rotate:0}}
transition={{
  delay:index*0.3,
  duration:0.8,
  ease:"easeOut"
}}
whileHover={{scale:1.1, rotate:5}}
style={{
width:"100%",
borderRadius:"20px"
}}
/>
))}

</motion.div>

)

}