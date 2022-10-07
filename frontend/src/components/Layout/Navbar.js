import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/Actions/auth';
import { useDispatch, useSelector } from "react-redux";
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import '../../components/component.css';
import lib from "../../data/Pictures/lib.jpg";
function Navar( ) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  const loggout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const authLinks = (
    <div className='navbarlogin2'>
      <ul className='listnavbar'>
        <li>
          <Link to='Addbook' className='linknav'>
          Addbook
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='library' className='linknav'>
          Books List
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <Link to='dashboard' className='linknav'>
            Dashboard
          </Link>
          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='listnavbar list-navbarlogin'>
      <li>
        <Link to='register' href='' className='linknav'>
          Register
        </Link>
        <div id='indicator'></div>
      </li>
      <li>
        <Link to='login' className='linknav'>
          Login
        </Link>
        <div id='indicator'></div>
      </li>
    </ul>
  );

  const adminLinks = (
    <div className='navbarlogin navbaradmin'>
      <ul className='listnavbar'>
        <li>
          <Link to='AddBook' className='linknav'>
            add Book
          </Link>

          <div id='indicator'></div>
        </li>
        <li>
          <a onClick={(e) => loggout(e)} href='#!' className='linknav'>
            <span className='logout'>Logout</span>
          </a>
          <div id='indicator'></div>
        </li>
      </ul>
    </div>
  );
 
 
  return (
    
     <Navbar className="nav-bar-styl" expand="lg" sticky="top" style={{ backgroundImage: `url(${lib})`}}     >              
            
                             
                            <Navbar.Brand href="/App"  className="nav-bar-brand-styl" style={{   }}    > <NavLink to={`/`} style={{textDecoration:"none",color:"rgb(218,165,32)", fontSize:"35px",textShadow:"initial" , letterSpacing:"20px" }} >   E-Mouseion </NavLink>  </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" style={{color:"azure",backgroundColor:"azure" }} />
                                 <Navbar.Collapse id="navbarScroll"  >
                                
                            <Fragment >
        {loading
          ? null
          : isAuthenticated && user !== null && user.isAdmin == true
          ? adminLinks
          : isAuthenticated && user !== null && user.isAdmin == false
          ? authLinks
          : guestLinks}
      </Fragment>
                               
                               
                                   <Nav
                                     className="mr-auto my-2 my-lg-0"
                                     style={{ maxHeight: '50px', fontSize:'20px', marginRight:'50px' }}
                                     navbarScroll
                                   >
                                                         
                                    </Nav>
                                    </Navbar.Collapse>
                                            
                                         
                                                      
                                                          
                                                                             
                                           
                 </Navbar>

     

    
  );
}

export default Navar