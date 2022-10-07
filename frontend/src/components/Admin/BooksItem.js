import React from 'react'
import { useEffect, useState,Fragment } from "react";
import { Acceptbook } from '../../Redux/Actions/BookActions';
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from '../../Redux/Actions/BookActions';
import { Button } from 'react-bootstrap';
import "../Library/library.css"
function BooksItem({key,x:{_id,title,author,language,state}}) {
    const dispatch = useDispatch();
    const onsubmit = (e) => {
        e.preventDefault();
        dispatch(Acceptbook(_id)) 
       };
       const ondelete = (e) => {
        e.preventDefault();
        dispatch(deleteBook(_id)) 
       };

  return (
    state==false?
    <tr>
    <td>
        <div class="d-flex align-items-center">
          
            <p class="font-weight-bold">{title} </p>
        </div>
    </td>
   
    <td><a class="dot"></a><span>{language}</span></td>

  
    <td>
       <button onClick={e=>onsubmit(e)} className="sub3" 
> ACCEPT</button>
    
    </td>
    <td><button className='sub4' onClick={e=>ondelete(e)}  >DELETE</button></td>
    </tr>
    :null  
    
    )
}

export default BooksItem