import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
import "../Library/library.css"
function Login(props) {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = fromData;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } =auth ;

  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }
  return (

      
      






    
   
 
        <div class="container-fluid">
            <div class="row row--center">
                <div class="cardt mb-4">
                    

                            {/* <span class="gl-text u-s-m-b-30">By creating an account with our store, you will be able to move through the checkout process faster, store shipping addresses, view and track your orders in your account and more.</span> */}
                            <div class="headerc">

                                 <Link to='/register' class="sub1" style={{textDecoration:"none",color:"black",border:"solid rgb(218,165,32),"
                                 ,borderRadius:"10px",padding:"2px"}} >CREATE AN ACCOUNT</Link></div>
                            <h1 class="gl-h1"style={{textAlign:"center", marginTop:"50px",marginBottom:"50px",color:"black"}}>SIGNIN</h1>

                           
                            <form class="l-f-o__form"  onSubmit={(e) => onsubmit(e)}>
                           
                                <div class="u-s-m-b-30" style={{display:"flex" , flexFlow:"column", justifyContent:"flex-start"}}>

                                    <label class="gl-label" for="login-email" style={{color:"black"}}>E-MAIL *</label>

                                    <input class="input-text input-text--primary-style" id="login-email" placeholder="Enter E-mail"
                                      type='email'
                                   
                                      name='email'
                                      value={email}
                                      onChange={(e) => hundelchange(e)}
                                      required
                                      style={{marginTop:"-20px",border:"black"}}
                                      />
                               

                                    <label class="gl-label"  type='password'
                                   
                                     for="login-password"style={{color:"black"}}>PASSWORD *</label>

                                    <input class="input-text input-text--primary-style" type="password" id="login-password" placeholder="Enter Password"
                                     name='password'
                                     value={password}
                                     minLength='6'
                                     required
                                     onChange={(e) => hundelchange(e)}
                                     style={{marginTop:"-20px",border:"black"}}
                                     /></div>
                                <div class="gl-inline">
                                    <div class="u-s-m-b-30">

                                        <button className='sub' style={{marginRight:"80px"}} type="submit">LOGIN</button></div>
                                    <div class="u-s-m-b-30" style={{display:"flex" , justifyContent:"center",marginTop:"30px"}}>

                                        <Link class="gl-link" to="/forgetpassword"style={{color:"black"}}>Lost Your Password?</Link></div>
                                </div>
                        <div class="u-s-m-b-30"style={{display:"flex" , justifyContent:"center",marginTop:"20px"}}>

                                    <div class="check-box">

                                        <input type="checkbox" id="remember-me"/>
                                        <div class="check-box__state check-box__state--primary">

                                            <label class="check-box__label" for="remember-me"style={{color:"black"}}>Remember Me</label></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
       





   
  );
}

export default Login;