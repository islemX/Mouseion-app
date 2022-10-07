import React, { Fragment, useState } from 'react';

import { Link, Navigate } from 'react-router-dom';
import "../Library/library.css"

import { useDispatch, useSelector } from "react-redux";
import { register } from '../../Redux/Actions/auth';

function Register(props) {
  const [fromData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  });
  const {
    name,
    email,
    password,
   
  } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(register({
        name,
        email,
        password,
      }));
    
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }
  return (
    

        <div class="container-fluid">

   

           
       
               
                    
                        <div class="cardt mb-4">
                           
                                    <div class="l-f-o__pad-box">
                                    <h1 class="headerc"style={{textAlign:"center",marginBottom:"80px"}}>CREATE AN ACCOUNT</h1>
                                        <form  onSubmit={(e) => onsubmit(e)} class="l-f-o__form">
                                         
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-fname"style={{color:"black"}}>NAME *</label>

                                                <input class="input-text input-text--primary-style" type="text" id="reg-fname" placeholder="First Name"
                                                 name='name'
                                                 value={name}
                                                 onChange={(e) => hundelchange(e)}
                                                 style={{marginTop:"-20px",border:"black"}}
                                                 /></div>

 
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-email"style={{color:"black"}}>E-MAIL *</label>

                                                <input class="input-text input-text--primary-style"  id="reg-email" placeholder="Enter E-mail"
                                                  type='email'
                                                  
                                                  name='email'
                                                  value={email}
                                                  onChange={(e) => hundelchange(e)}
                                                  style={{marginTop:"-20px",border:"black"}}
                                                  /></div>
                                            <div class="u-s-m-b-30">

                                                <label class="gl-label" for="reg-password"style={{color:"black"}}>PASSWORD *</label>

                                                <input class="input-text input-text--primary-style" id="reg-password" placeholder="Enter Password" 
                                                 type='password'
                                                
                                                 name='password'
                                                 value={password}
                                                 minLength='6'
                                                 onChange={(e) => hundelchange(e)}
                                                 style={{marginTop:"-20px",border:"black"}}
                                                 /></div>
                                               
                    
                                          

                                            <div class="u-s-m-b-15">

                                                <button className='sub' style={{marginTop:"70px"}} type="submit">CREATE</button></div>
<div style={{marginTop:"40px"}}>
                                            <a class="sub1" style={{textDecoration:"none",color:"black",border:"solid rgb(218,165,32)"
                                 ,borderRadius:"10px",padding:"2px"}}href="/library" >Return to Library</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                      
               
      

     
  );
}

export default Register