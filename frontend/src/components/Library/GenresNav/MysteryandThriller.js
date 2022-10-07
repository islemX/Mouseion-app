import { useState } from "react";
import genre3 from "../../../data/genres/genre3.webp"
import '../../homePage/stats.css'
import {  Figure } from 'react-bootstrap';

function Children2() {
  return (
    <>
      <Figure className='item'>
      <Figure.Image
         width={65}
         height={90}
        alt="171x180"
        src={genre3}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <h6 style={{color:"rgb(218,165,32) "}}>Best OF :</h6>
        <p style={{marginTop:"20px",border:"solid rgb(218,165,32) ",borderRadius:"15px", textAlign: "center"}}>Shutter Island</p>
      </Figure.Caption>
    
    </Figure>
    </>
  );
}

function Parent2() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}className="hov2">
      <p  style={{color:"black"}}>Mystery &amp; Thriller</p>
      {isMouseOver ? (
        <>
          <Children2 style={{position:"absolute"}}/>
        </>
      ) : null}
    </div>
  );
}

export default function Hover2() {
  return (
  
      <Parent2 />
    
  );
}
