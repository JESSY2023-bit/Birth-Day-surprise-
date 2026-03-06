import React from "react";
import '../Styles/theme.css';

export default function Navbar({setPage}){

return(

<div style={{
display:"flex",
justifyContent:"center",
gap:"20px",
padding:"20px"
}}>

<button onClick={()=>setPage("home")}>Accueil</button>

<button onClick={()=>setPage("photos")}>Toi</button>

<button onClick={()=>setPage("message")}>Message</button>

<button onClick={()=>setPage("surprise")}>Surprise</button>

</div>

)

}