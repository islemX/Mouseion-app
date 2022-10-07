import React,{useState} from 'react'
import { addBook } from '../../Redux/Actions/BookActions'
import { useDispatch, useSelector } from "react-redux";
  import "./library.css"
function Addbook() {
    const [title,settitre]=useState("")
    const [rating,setrating]=useState()
    const [author,setauthor]=useState("")
    const [Genre,setGenre]=useState("")
    const [language,setlanguage]=useState("")
    const [cover,setcover]=useState("")
    const [pdf,setpdf]=useState("")
    const dispatch = useDispatch();

    const onCoverChanger=e=>{
        setcover(e.target.files[0]);
    }
    const onPdfChanger=e=>{
        setpdf(e.target.files[0]);
    }
    const onsubmit = (e) => {
        e.preventDefault();
     
        const formData=new FormData();
        formData.append("title",title);
        formData.append("rating",rating)
        formData.append("author",author)
        formData.append("Genre",Genre)
        formData.append("language",language)
        formData.append("cover",cover)
        formData.append("pdf",pdf)
      e.target.reset()
        
        dispatch(addBook(formData))
       
    }

  return (
    <div class="container-fluid flex-grow-1 container-p-y">
    
    <div class="text-muted small mt-0 mb-4 d-block breadcrumb">
 
    <div class="cardt mb-4">
                            <h2 class="headerc"style={{textAlign:"center",marginBottom:"80px",color:"black"}}>Add Book</h2>
                            <div class="card-body">
                                <form  onSubmit={(e) => onsubmit(e)} enctype="multipart/form-data" >
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control" name="title" value={title} onChange={(e) => settitre(e.target.value)} placeholder="Title"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                      
                                        <input type="number" class="form-control" name="rating" value={rating} onChange={(e) => setrating(e.target.value)} placeholder="Rating"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                       
                                        <input type="text" class="form-control" name="author" value={author} onChange={(e) => setauthor(e.target.value)} placeholder="Author"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control" name="language" value={language} onChange={(e) => setlanguage(e.target.value)} placeholder="Language"/>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="form-group">
                                        
                                        <input type="text" class="form-control" name="Genre" value={Genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre"/>
                                        <div class="clearfix"></div>
                                    </div>
   
                                    <div class="form-group">
                                    <label class="form-label w-100">Book's Cover </label>
                                        <input type="file"id="customFile"  onChange={(e) =>onCoverChanger(e)} name="cover" accept=".png,.jpeg,.jpg" placeholder='choose cover'/>
                                    </div>
                                    <div class="form-group">
                                        <label class="form-label w-100">Pdf</label>
                                        <input type="file" id="PdfFile"  onChange={(e) =>onPdfChanger(e)} name="pdf" accept="application/pdf,application/vnd.ms-excel"/>
                                    </div>
              
                                    <button type="submit" className='sub'>Submit</button>
                                </form>
                            </div>
                        </div>

                      
    </div>
  



</div>
)
}

export default Addbook;