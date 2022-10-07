import React from 'react'
import {  Button, Carousel, Figure } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';

import cover1 from "../../data/Pictures/cover1.jpg"
import cover2 from "../../data/Pictures/cover2.jpg"
import cover3 from "../../data/Pictures/cover3.jpg"
import logo from "../../data/Pictures/logo.jpg"
import ah from "../../data/books/ah.jpg"
import dance from "../../data/books/dance.jpg"
import Shutter from "../../data/books/Shutter.jpg"
import pride from "../../data/books/pride.jpg"
import ss from "../../data/books/ss.jpg"
import soif from "../../data/books/soif.jpg"
import wow from "../../data/books/wow.jpg"
import kafka from "../../data/books/kafka.jpg"
import '../../components/component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typewriter } from 'react-simple-typewriter'
import './stats.css'
import Footer from './Footer';
import Hover from './GenresHov';
import ABOUT from './About';

const   Carroussel = () => {
  return (
<>

<Carousel slide={false}  className="carr" >
     
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover1}
          alt="First slide"
          style={{ width:"100%" , height:"250px"      }}
        />
        
        <Carousel.Caption>
        <h1> WELCOME TO E-MOUSEION LIBRARY</h1>
        <NavLink to={`/library`}>
                                <Button  style ={{alignSelf:'center', color:"black", backgroundColor:"azure", borderRadius:"10px",marginBottom:"25px"  }}>VISIT LIBRARY</Button>
                                </NavLink>
       <h4>LOTS OF EBOOKS. 100% FREE</h4>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover2}
          alt="Second slide"
          style={{ width:"100%" , height:"250px"      }}
        />

        <Carousel.Caption>
        <h1 style={{marginBottom:"30px"}}>REGISTER NOW ! </h1>
        <NavLink to={`/register`}>
                                <Button  style ={{alignSelf:'center', color:"black", backgroundColor:"azure", borderRadius:"10px",marginBottom:"35px"  }}>HERE</Button>
                                </NavLink>
          <h4>THEN U CAN GIVE AS UR SUGGESTION BY ADDING BOOK</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cover3}
          alt="Third slide"
          style={{ width:"150%" , height:"250px"      }}
        />

        <Carousel.Caption>
        <h1> FINALLY ENJOY READING UR FAV BOOKS AND EVEN MUCH MORE </h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
    
    <div>
    <div className="logo"> 
    <h6 >I'M SURE U WONDERING WHAT IS OR WHAT IT MEANS "MOUSEION"</h6>
    <h6>
      LET OUR LOGO TELL U ABOUT IT
    </h6>
  <div style={{display:"flex",justifyContent:"center"}}>
 <ABOUT />
 
 </div>

 
</div>
    </div>
    
    
    
    
    
    <section className="stats">
      <header>
      <span >
          {/* Style will be inherited from the parent element */}
          <Typewriter
           words={['DEAR READER', "HERE'S" ,"OUR WEEKLY SUGGESTIONS :"]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </header>
    <div className='figures'>
      <div className='stat1'>
      
      <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={dance}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={dance}
      

      />
      </Figure.Caption>
    
    </Figure>
   
    <div style={{marginTop:"15px"}}>
    <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={ss}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={ss}
       

      />
      </Figure.Caption>
    
    </Figure>
    </div>
      </div>
     
      <div className='stat2'>
    
      <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={soif}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={soif}
       

      />
      </Figure.Caption>
    
    </Figure>
    
    <div>
    <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={wow}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={wow}
       

      />
      </Figure.Caption>
    
    </Figure>
    </div>
      </div>
      <div className='figures2'>
      <div className='stat1'>
      
      <Figure className='item'>
      <Figure.Image
         width={65}
         height={90}
        alt="171x180"
        src={kafka}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
         width={65}
         height={90}
        alt="171x180"
        src={kafka}
        

      />
      </Figure.Caption>
    
    </Figure>
   
    <div style={{marginTop:"15px"}}>
    <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={pride}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={pride}
        

      />
      </Figure.Caption>
    
    </Figure>
    </div>
      </div>
     
      <div className='stat2'>
    
      <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={ah}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={ah}
     

      />
      </Figure.Caption>
    
    </Figure>
    <div>
    <Figure className='item'>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={Shutter}
        className='thefront'

      />
      <Figure.Caption className='theback '>
      <Figure.Image
        width={65}
        height={90}
        alt="171x180"
        src={Shutter}
        

      />
      </Figure.Caption>
    
    </Figure> 
    </div>
      </div>
      </div>
      </div>
    </section>










<div>
  <Hover/>
</div>

















<Footer/>






    </>
    )

}
export default Carroussel;