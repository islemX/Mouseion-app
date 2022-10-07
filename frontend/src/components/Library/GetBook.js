import React,{useEffect,useState} from 'react'
import { listBookDetails } from '../../Redux/Actions/BookActions'
import { useSearchParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from 'react-bootstrap';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import libr from "../../data/Pictures/libr.jpeg";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Fab from '@mui/material/Fab';
import './BoookPdf.css';
import { AiOutlineRight,AiOutlineLeft,AiOutlineDownload} from "react-icons/ai";
import Footer from '../homePage/Footer';

function GetBook() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const bookDetails = useSelector((state) => state.bookDetails);
  const { loading, books } =bookDetails ;
  useEffect(() => {
    dispatch(listBookDetails(searchParams.get("_id")));
  }, []);



//pdf viewer
const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);

    

   






  return loading || books === null ? (
    <Spinner />
  ) : (
<>
               
              <div style={{ backgroundImage: `url(${libr})`,height:"100%"}}>
              
  
   
         
   
              
                             <div className='pdf' > 
                            <div className='icon'>
                             <h3>GET UR PDF</h3>
                             <div className='fab' >
                             <a href={`books/${books.pdf}`} download={`${books.title}.pdf`} >
  
   <Fab >
<CloudDownloadIcon style={{zoom:1.2}} />
</Fab>
   </a>
   </div>
   </div>
   <nav className='nav'>
				<AiOutlineLeft style={{zoom:"4" , color:"azure"}} onClick={goToPrevPage}/>
				
			
			</nav>

			<Document
				file={`books/${books.pdf}`}
				onLoadSuccess={onDocumentLoadSuccess}
        target="_blank"
			
			>

				<Page pageNumber={pageNumber}  />
			</Document>
			
		
		
		
		<nav className='nav'>
      <AiOutlineRight style={{zoom:"4",color:"azure", marginLeft:"70px"}} onClick={goToNextPage}/>
    </nav>
		
		</div>
    <div className='num'>
       <p>
    
    Page {pageNumber} of {numPages}
  </p></div>
  
                              
                    </div>         
<Footer/>
</>
               )
}

export default GetBook