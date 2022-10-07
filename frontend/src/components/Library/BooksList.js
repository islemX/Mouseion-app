import React from "react";
import { useEffect, useState,Fragment } from "react";
import { NavLink } from "react-router-dom";
import {  Figure } from 'react-bootstrap';
import "./library.css";
import { listBook } from "../../Redux/Actions/BookActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";


export const BooksList = (props) => {
  const { keyword } = props;
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList);
  const { loading, error, books } = bookList;
  useEffect(() => {
    dispatch(listBook());
  }, []);

  return (
    <>
      <div
        className="shopcontainer row"
       
      >
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant={"alert-danger"}>{error}</Message>
        ) : (
         <>
            {books.filter(el =>
                            el.title.toLowerCase().includes(props.Search.toLowerCase())).map((book) => (

                              book.state?props.Rating>=book.rating?props.Langauge==""&&props.Genre==""? 
                              <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id} style={{marginBottom:"35px"}}>
                             
                                <NavLink  to={`/books?_id=${book._id}` }       >
                                <Figure className='item' >
                             <Figure.Image
        width={100}
        height={80}
        src={`books/${book.poster}`}
        alt={book.title}
        className='thefront'

      />
                                 
                                 
                                 
                                     <Figure.Caption className='theback '>
                                     {book.title}
                                      <div style={{marginTop:"80px" ,border:"rgb(218,165,32) solid",borderRadius:"15px"}}>
                                     <h6 style={{color:"rgb(218,165,32)"}}>Author :</h6>
                                     <p>
                                      
                                      {book.author}
                                     </p>
                                     </div>
                                     
      </Figure.Caption>
    
    </Figure>
  
                                  
                                </NavLink>
                           
                              
                              
                            </div>


:props.Genre==book.Genre&&props.Langauge==book.language?
                                <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id} style={{marginBottom:"20px"}}>
                 
                 <NavLink  to={`/books?_id=${book._id}`}>
                 <Figure className='item'>
              <Figure.Image
width={100}
height={80}

src={`books/${book.poster}`}
alt={book.title}
className='thefront'

/>
                  
                  
                  
                      <Figure.Caption className='theback '>
                      {book.title}
                      <div style={{marginTop:"80px" ,border:"rgb(218,165,32) solid",borderRadius:"15px"}}>
                                     <h6 style={{color:"rgb(218,165,32)"}}>Author :</h6>
                                     <p>
                                      
                                      {book.author}
                                     </p>
                                     </div>
</Figure.Caption>

</Figure>

                   
                 </NavLink>
                            </div>:props.Genre==book.Genre?
                             <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id} style={{marginBottom:"20px"}}>
                 
                             <NavLink  to={`/books?_id=${book._id}`}>
                             <Figure className='item'>
                          <Figure.Image
            width={300}
            height={80}
            
            src={`books/${book.poster}`}
            alt={book.title}
            className='thefront'
            
            />
                              
                              
                              
                                  <Figure.Caption className='theback '>
                                  {book.title}
                                  <div style={{marginTop:"80px" ,border:"rgb(218,165,32) solid",borderRadius:"15px"}}>
                                     <h6 style={{color:"rgb(218,165,32)"}}>Author :</h6>
                                     <p>
                                      
                                      {book.author}
                                     </p>
                                     </div>
            </Figure.Caption>
            
            </Figure>
            
                               
                             </NavLink> 
</div>:props.Langauge==book.language?
  <div className="shop col-lg-4 col-md-6 col-sm-6" key={book._id} style={{marginBottom:"20px"}}>
                 
  <NavLink  to={`/books?_id=${book._id}`}>
  <Figure className='item'>
<Figure.Image
width={300}
height={80}

src={`books/${book.poster}`}
alt={book.title}
className='thefront'

/>
   
   
   
       <Figure.Caption className='theback '>
       {book.title}
       <div style={{marginTop:"80px" ,border:"rgb(218,165,32) solid",borderRadius:"15px"}}>
                                     <h6 style={{color:"rgb(218,165,32)"}}>Author :</h6>
                                     <p>
                                      
                                      {book.author}
                                     </p>
                                     </div>
</Figure.Caption>

</Figure>

    
  </NavLink> 
              </div>:null:null:null
            ))}
          </>
        )}
      </div>
    </>
  );
};




