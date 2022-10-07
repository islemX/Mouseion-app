import { useState } from "react";
import genre1 from "../../data/genres/genre1.webp"
import genre2 from "../../data/genres/genre2.webp"
import genre3 from "../../data/genres/genre3.webp"
import genre4 from "../../data/genres/genre4.webp"
import genre5 from "../../data/genres/genre5.webp"
import genre6 from "../../data/genres/genre6.webp"
import genre7 from "../../data/genres/genre7.webp"
import genre8 from "../../data/genres/genre8.webp"
import genre9 from "../../data/genres/genre9.webp"
import genre10 from "../../data/genres/genre10.webp"
import genre11 from "../../data/genres/genre11.webp"
import genre12 from "../../data/genres/genre12.webp"
import '../../components/component.css';
import "./stats.css"



function Children() {
  return (
    <div className='Genres'>
    
    <div className="cards">
    
        <div className='container'>
    <img src={genre1}  className="genre" alt="romance"         />
    <div className='centered'>ROMANCE</div>
       
        </div>
        <div className='container'>
    <img src={genre2} className="genre"  alt="action and adventure"         />
    <div className='centered'>ACTION &amp; ADVENTURE</div>
       
        </div>
        <div className='container'>
    <img src={genre3} className="genre"  alt="Mystery &amp; Thriller"         />
    <div className='centered'>Mystery &amp; Thriller</div>
       
        </div>
        <div className='container'>
    <img src={genre4} className="genre"  alt="Bios &amp; History"         />
    <div className='centered'>Bios &amp; History</div>
       
        </div>
        </div>
        <div className='cards'>
        <div className='container'>
    <img src={genre5} className="genre"  alt="Children's"         />
    <div className='centered'>Children's</div>
       
        </div>
        <div className='container'>
    <img src={genre6} className="genre"  alt="Young adult"         />
    <div className='centered'>Young adult</div>
       
        </div>
        <div className='container'>
    <img src={genre7} className="genre"  alt="Fantasy"         />
    <div className='centered'>Fantasy</div>
       
        </div>
        <div className='container'>
    <img src={genre8} className="genre"  alt="Historical fiction"         />
    <div className='centered'>Historical fiction</div>
       
        </div>
        
    
    </div>
    <div className='cards'>
        <div className='container'>
    <img src={genre9} className="genre"  alt="Horror"         />
    <div className='centered'>Horror</div>
       
        </div>
        <div className='container'>
    <img src={genre10} className="genre"  alt="Literary Fiction"         />
    <div className='centered'>Literary Fiction</div>
       
        </div>
        <div className='container'>
    <img src={genre11} className="genre"  alt="Non-Fiction"         />
    <div className='centered'>Non-Fiction</div>
       
        </div>
        <div className='container'>
    <img src={genre12} className="genre"  alt="Science Fiction"         />
    <div className='centered'>Science Fiction</div>
       
        </div>
        
    
    </div>
    </div>
  );
}

function Parent() {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} >
      <h2 className="H2">HERE'S ALL BOOK'S GENRES </h2>
      {isMouseOver ? (
        <>
          <Children />
        </>
      ) : null}
    </div>
  );
}

export default function Hover() {
  return (
   
      <Parent />
    
  );
}