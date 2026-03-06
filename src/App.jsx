import React,{useState} from "react";
import { FaHeart } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import PhotoGallery from "./components/PhotoGallery";
import BirthdayMessage from "./components/BirthDayMessage";
import Surprise from "./components/Surprise";
import HeartRain from "./components/HeartRain";

import "./Styles/theme.css";


function App(){

const[page,setPage]=useState("home")

return(

<div>

<Navbar setPage={setPage}/>

{page==="home" && <Home/>}
{page==="photos" && <PhotoGallery/>}
{page==="message" && <BirthdayMessage/>}
{page==="surprise" && <Surprise/>}

<HeartRain />



</div>

)

}

export default App;