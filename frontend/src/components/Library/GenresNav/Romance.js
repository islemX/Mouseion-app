
import { useState } from "react";
import genre1 from "../../../data/genres/genre1.webp"
import '../../homePage/stats.css'
import {  Figure } from 'react-bootstrap';

function Children1() {
  return (
    <>
      <Figure className='item'>
      <Figure.Image
       width={65}
       height={90}
        alt="171x180"
        src={genre1}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <h6 style={{color:"rgb(218,165,32) "}}>Best OF :</h6>
        <p style={{marginTop:"20px",border:"solid rgb(218,165,32) ",borderRadius:"15px", textAlign: "center"}}>ME BEFORE YOU</p>
      </Figure.Caption>
    
    </Figure>
    </>
  );
}

function Parent1() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}className="hov1">
      <p  style={{color:"black"}}>Romance</p>
      {isMouseOver ? (
        <>
          <Children1 />
        </>
      ) : null}
    </div>
  );
}

export default function Hover1() {
  return (
   
      <Parent1 />
 
  );
}
