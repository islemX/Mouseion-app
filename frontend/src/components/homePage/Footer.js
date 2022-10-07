import { height } from '@mui/system';
import React from 'react'
import { Figure } from 'react-bootstrap';
import footer from "../../data/Pictures/footer.jpg"
import mouseion from "../../data/Pictures/mouseion.jpg"
import "./stats.css"
const Footer= () => {
  return (
   
   <div className='footer' style={{backgroundImage: `url(${footer})`,height:"100px", display:"flex",flexFlow:"column",justifyContent:"center"}}>
      <div style={{marginLeft:"35%"}}>
      <h4 style={{color:"black", fontSize:"35px",textShadow:"initial" , letterSpacing:"20px" }}>    E-Mouseion </h4>
      </div>
<div>
  <h4 style={{marginTop:"10px"}}>CONTACT : +21694490885</h4>
  
</div>


    </div>
  
  )
}
export default Footer;