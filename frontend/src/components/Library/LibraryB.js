import React,{useEffect, useState} from 'react'; 

import { Container,  FormControl,  Nav, Navbar, Spinner } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReactStars from 'react-stars';
import libr from "../../data/Pictures/libr.jpeg";
import logo from "../../data/Pictures/logo.jpg";
import {  Form  } from "react-bootstrap";

import fire from "../../data/Pictures/fire.png";
import Navar from "../Layout/Navbar";
import OffCanvasExample from './sideNav';
import './library.css';
import { useDispatch, useSelector } from "react-redux";
import { BooksList } from './BooksList';
import { useParams } from 'react-router';
import { GetGenre, GetLangague } from '../../Redux/Actions/BookActions';
import Hover1 from './GenresNav/Romance';
import Hover2 from './GenresNav/MysteryandThriller';
import Hover3 from './GenresNav/ScienceFiction';
import Hover4 from './GenresNav/BiosHistory';
import { Link } from 'react-router-dom';
const LibraryB = (match) => {
  const{keyword}=useParams(match.keyword);
  const [Search, setSearch] = useState('');
  const [Rating, setRating] = useState(5);
  const [Langauge, setLangauge] = useState("");
  const [Genre,setGenre] = useState("");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const GetLanguage = useSelector((state) => state.GetLanguage);
  const { loading, Lang } = GetLanguage;

useEffect(() => {

  
  dispatch(GetLangague());

},[])
const GetGenres = useSelector((state) => state.GetGenre);
  const {  Gen  } = GetGenres;

useEffect(() => {

  
  dispatch(GetGenre());

},[])
  

  return (loading?<Spinner/>:
    <>
      <div className="library"  >
               
      <div>
        <Navbar bg="light" variant="light" >
      
        <Container className='navA'>
       <div className='fire'>
        <img src={fire} alt="fire" style={{zoom:"1.5"}}  />
          <Navbar.Brand href="#home">POPULAR GENRES</Navbar.Brand>
          </div>
          
          <div className='hov'>
           <Hover1 />
           <Hover2/>
           <Hover3/>
           <Hover4/> 
          </div>
       
            <div className='search' >
             <FormControl
                                              type="search"
                                              placeholder="Place a book title"
                                              id="main-search"
                                              aria-label="Search"
                                              onChange={(e)=>setSearch(e.target.value)}
                                              style={{width :'200px'  ,borderRadius:"10px",position:"absolute",}}
                                              className='search1'
                                            />                                  
             </div> 
          
        </Container>
      </Navbar>
      </div>
      <div>
      <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{marginTop:"12%" , height:"300px",backgroundImage: `url(${logo})`, border:"azure",position:"fixed"
	
}}      >
      
       <span style={{writingMode:"vertical-lr",textOrientation:"upright"}} >SEARCH HERE</span> 
      </Button>
      <Offcanvas show={show} onHide={handleClose} style={{backgroundImage: `url(${libr})`, width:"20%",marginTop:"5%"}}   >
        
        <Offcanvas.Body>
        <div className='rating-by-stars' style={{marginTop:'0px', width:'200px',height:"150px", display:'flex', flexDirection:' column', justifyContent:'center',padding:"5px"       }}>
                                                 <h4 style={{color:"azure"  }} ><i>SEARCH BY RATING :</i></h4>                                         
                                                 <ReactStars  
                                                 onChange={(item) => setRating(item)}                                         
                                                     count={5}
                                                           size={25}
                                                           isHalf={false}
                                                           emptyIcon={<i className="far fa-star"></i>}
                                                           halfIcon={<i className="fa fa-star-half-alt"></i>}
                                                           fullIcon={<i className="fa fa-star"></i>}
                                                           activeColor="#ffd700"
                                                          value={Rating}  
                                                          

                                                           
                                                  />  
                                           </div>                                    
     
     <div style={{marginTop:"10px"}}>
     <h4 style={{color:"azure"}}   >SELECT BY LANGUAGE :</h4>
      <Form.Select aria-label="Default select example" style={{width:"150px"}}             onChange={(e) => setLangauge(e.target.value)}>  
      <option value="" ></option>
      {Lang.map(x=>
              <option value={x} >{x}</option>

        )}
    </Form.Select>
              </div>
              <div style={{marginTop:"30px"}}>
     <h4 style={{color:"azure"}}   >SELECT BY GENRE :</h4>
      <Form.Select aria-label="Default select example" style={{width:"150px"}}             onChange={(e) => setGenre(e.target.value)}>  
      <option value="" ></option>
      {Gen.map(x=>
              <option value={x} >{x}</option>

        )}
    </Form.Select>
              </div>
              <div style={{marginTop:"90px",display:"flex",justifyContent:"center"}}>
              <a class="sub2" style={{textDecoration:"none",color:"azure",border:"solid rgb(218,165,32)"
                                 ,borderRadius:"10px"}}href="/library" >FULL BOOK'S LIST</a>
              </div>
              
        </Offcanvas.Body>
      </Offcanvas>
    </>      </div>
      <div style={{marginLeft:"100px" , marginTop:"50px"}}>

   
      </div>
             </div>
            
             
             
             
             <div className="shopcontainer row" style={{marginLeft:"190px",marginTop:"14%",padding:"0px"}}>
          
                  <BooksList Search={Search} Langauge={Langauge} Rating={Rating} keyword={keyword}  Genre={Genre}/>
              
             </div>
            
    </>         
  );
};

export default LibraryB;
