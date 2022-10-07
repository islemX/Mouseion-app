import { useState } from "react";
import genre4 from "../../../data/genres/genre4.webp"
import '../../homePage/stats.css'
import {  Figure } from 'react-bootstrap';

function Children4() {
  return (
    <>
      <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={genre4}
        className='thefront'

      />
      <Figure.Caption className='theback '>
        <h6 style={{color:"rgb(218,165,32) "}}>Best OF :</h6>
        <p style={{marginTop:"20px",border:"solid rgb(218,165,32) ",borderRadius:"15px", textAlign: "center"}}>Alexander Hamilton</p>
      </Figure.Caption>
    
    </Figure>
    </>
  );
}

function Parent4() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="hov4">
      <p style={{color:"black"}}>Bios &amp; History</p>
      {isMouseOver ? (
        <>
          <Children4 />
        </>
      ) : null}
    </div>
  );
}

export default function Hover4() {
  return (
   
      <Parent4 />
    
  );
}
