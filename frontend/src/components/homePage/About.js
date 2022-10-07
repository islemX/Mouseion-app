import { useState } from "react";
import mouseion from "../../data/Pictures/mouseion.jpg"
import '../homePage/stats.css'
import {  Figure } from 'react-bootstrap';
import logo from "../../data/Pictures/logo.jpg"

function About() {
  return (
    <>
     <div className='about'>
    <div className="thefront2" style={{backgroundImage: `url(${mouseion})`, backgroundRepeat:"no-repeat"}}  ></div>
    <div className='theback2'> <p>The Musaeum or Mouseion at Alexandria "Ancient Greek: Μουσεῖον τῆς Ἀλεξανδρείας" which included the famous Library of Alexandria,
       was an institution said to have been founded by Ptolemy I Soter and his son Ptolemy II Philadelphus. Originally, the word mouseion meant any place that was dedicated 
       to the Muses, often related to the study of music or poetry, but later associated with sites of 
       learning such as Plato's Academy and Aristotle's Lyceum </p></div>
    
     </div>
    </>
  );
}

function AboutIt() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
       <img className="lead_logo" src={logo}/>
      {isMouseOver ? (
        <>
          <About />
        </>
      ) : null}
    </div>
  );
}

export default function ABOUT() {
  return (
   
      <AboutIt />
    
  );
}
