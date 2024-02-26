import React, { useState } from 'react';
import toluData from '../data/tolu';
import '../css/component1.css';

const Component1 = () => {
    const [tolus, setTolus] = useState(toluData);
    const newtolu = tolus[4];

    return (
      <div className=' container rounded'>
        <h4 className=' rounded bgwhite mt-1 mb-0 pl-3 ' style={{width:1129, alignItem:'center'}}>Recently viewed</h4>
        <div className="carouselcontainer mt-0 rounded ">

            <div className="carousel bg-white mt-0 rounded ">
            
                <div className="carouselitem bg-white">
                
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
                <div className="carouselitem bg-white">
                  
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
                <div className="carouselitem bg-white">
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
                <div className="carouselitem bg-white">
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
                <div className="carouselitem bg-white">
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
                <div className="carouselitem bg-white rounded">
                    <img src={newtolu.Url} className="carouselimg bg-danger mb-0" alt="Image" />
                    <p className='text-truncate mt-0 mb-0 padding'>{newtolu.Name}</p>
                    <p className=' padding mt-0 mb-0 '>djysdg</p>
                    <p className='padding mt-0 '>djysdg</p>
                    
                </div>
            </div>
        
        </div>
        </div>
    );
}

export default Component1;
