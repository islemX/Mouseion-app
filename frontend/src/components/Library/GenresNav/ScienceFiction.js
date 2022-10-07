import { useState } from "react";
import genre12 from "../../../data/genres/genre12.webp"
import '../../homePage/stats.css'
import {  Figure } from 'react-bootstrap';

function Children3() {
  return (
    <>
      <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={genre12}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <h6 style={{color:"rgb(218,165,32) "}}>Best OF :</h6>
        <p style={{marginTop:"20px",border:"solid rgb(218,165,32) ",borderRadius:"15px", textAlign: "center"}}>A Canticle FOR LEIBOWITZ</p>
      </Figure.Caption>
    
    </Figure>
    </>
  );
}

function Parent3() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}className="hov3">
      <p style={{color:"black"}} >Science Fiction</p>
      {isMouseOver ? (
        <>
          <Children3 />
        </>
      ) : null}
    </div>
  );
}

export default function Hover3() {
  return (
    
      <Parent3 />
   
  );
}
