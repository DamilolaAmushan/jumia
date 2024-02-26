import React,{useState} from 'react'
import toluData from '../data/tolu';


const Details = () => {
  const [tolus, setTolus] = useState(toluData);

  const newtolu = tolus[2] ;
  return (
    <div className='container' >
        <div className='bg-white  row rounded'>
            <h5>PRODUCT DETAILS</h5> <hr /> <br />
            <img src="https://cdn.pixabay.com/photo/2023/10/14/14/00/peanuts-8314955_1280.jp" style={{ width: '100%', height: 'auto' }}  alt="image" />
            <p>{newtolu.Details}</p>
            </div>

        
       
         <div className="row bg-white  rounded mt-5">
          <h5 className='pt-3'>SPECIFICATIONS</h5>
  <div className="col-md-6">
    <div className="card mb-4 h-76">
      <div className="card-body ">
        <h6 className="card-title col-md-6">KEY FEATURES</h6> <hr />
        <p className="card-text mh-100"><ul>
          <li>{newtolu.Features[0]}</li>
          <li>{newtolu.Features[1]}</li>
          <li>{newtolu.Features[2]}</li>
          <li>{newtolu.Features[3]}</li>
          <li>{newtolu.Features[4]}</li>
          <li>{newtolu.Features[5]}</li>
          </ul></p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card mb-4 h-76">
      <div className="card-body">
        <h6 className="card-title">SPECIFICATIONS</h6> <hr />
        <p className="card-text  "><ul className='list-unstyled h-20'>
          <li><strong>SKU:</strong> {newtolu.Specifications.sku}</li>
          <li><strong>Product Line:</strong></li>
          <li><strong>Model:</strong></li>
          <li><strong>Weight:</strong> {newtolu.Specifications.weight}</li>
          <li><strong>Color:</strong></li>
          <li><strong>Shop Type:</strong></li>
          {/* <li><strong>NAFDAC Reg.Number:</strong></li> */}
          
          
          
          
          </ul></p>
  
    
      </div>
    </div>
  </div>
</div>
// </div>



  
  );
}

export default Details
