import React, { Fragment } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import AcceptPdf from '../Admin/AcceptPdf';
import LibraryB from '../Library/LibraryB';

function Dashboard() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading, user } =auth ;

  return (
loading||user==null?<Spinner/>:<Fragment>
  {!user.isAdmin?<LibraryB/>:<AcceptPdf/>

}
<div style={{marginTop:"-150px",display:"flex",justifyContent:"center"}}>
              <a class="sub2" style={{textDecoration:"none",color:"black",border:"solid rgb(218,165,32)"
                                 ,borderRadius:"10px"}}href="/library" >RETURN TO LIBRARY</a>
              </div>
</Fragment>  )
}

export default Dashboard