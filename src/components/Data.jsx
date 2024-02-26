import React, { useState } from 'react'; // Corrected import statement
import toluData from '../data/tolu';

const Data = () => {
    const [tolus, setTolus] = useState(toluData);

    const newtolu = tolus[0] ;
     
    
        const render = (
            <div >
                <div className=''>
                    <img src={newtolu.Url} alt={newtolu.Name}/> {/* Corrected case of 'Url' */}
                    <h1>Title: {newtolu.Name}</h1>
                    <p>Genre: {newtolu.Category}</p> {/* Corrected reference to 'Category' */}
                    <p>Category: {newtolu.Brand}</p> {/* Corrected reference to 'Brand' */}
                    {/* <button className='each-movie-button' onClick={() => remove(movie.id)}>X</button> */}
                </div>
            </div>
        );
        return (
            <div>
                {render}
            </div>
        );
    };


export default Data;
