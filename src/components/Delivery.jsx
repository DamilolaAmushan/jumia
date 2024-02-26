import React,{useState} from 'react';
import toluData from '../data/tolu'
import '../css/delivery.css'
import { MdAddShoppingCart } from "react-icons/md";

const Delivery = () => {
  const [tolus, setTolus] = useState(toluData);
  const newtolu = tolus[4];
  

  return (
    <div >
  
  
    <div className='row d-flex ' >
      <div className='col-md-3 w-100 bg-white rounded'>
          <h5>DELIVERY & RETURNS</h5> <hr />
          <h5>JUMIA</h5>
          <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja Details</p>
          <h4>Choose your Location</h4>
          <select name="states" className='container'>
  <option value="Lagos">Abia</option>
  <option value="Adamawa">Adamawa</option>
  <option value="Akwa Ibom">Akwa Ibom</option>
  <option value="Anambra">Anambra</option>
  <option value="Bauchi">Bauchi</option>
  <option value="Bayelsa">Bayelsa</option>
  <option value="Benue">Benue</option>
  <option value="Borno">Borno</option>
  <option value="Cross River">Cross River</option>
  <option value="Delta">Delta</option>
  <option value="Ebonyi">Ebonyi</option>
  <option value="Edo">Edo</option>
  <option value="Ekiti">Ekiti</option>
  <option value="Enugu">Enugu</option>
  <option value="Gombe">Gombe</option>
  <option value="Imo">Imo</option>
  <option value="Jigawa">Jigawa</option>
  <option value="Kaduna">Kaduna</option>
  <option value="Kano">Kano</option>
  <option value="Katsina">Katsina</option>
  <option value="Kebbi">Kebbi</option>
  <option value="Kogi">Kogi</option>
  <option value="Kwara">Kwara</option>
  <option value="Abia">Lagos</option>
  <option value="Nasarawa">Nasarawa</option>
  <option value="Niger">Niger</option>
  <option value="Ogun">Ogun</option>
  <option value="Ondo">Ondo</option>
  <option value="Osun">Osun</option>
  <option value="Oyo">Oyo</option>
  <option value="Plateau">Plateau</option>
  <option value="Rivers">Rivers</option>
  <option value="Sokoto">Sokoto</option>
  <option value="Taraba">Taraba</option>
  <option value="Yobe">Yobe</option>
  <option value="Zamfara">Zamfara</option>
</select>
<br /> <br /> 
<select name="places" id="" className='container'>
  <option value="Lekki">Lekki</option>
  <option value="Oshodi">Oshodi</option>
  <option value="Ikeja">Ikeja</option>
  <option value="Shomolu">Shomolu</option>
  <option value="iyana-ipaja">Iyana-ipaja</option>
</select> <br /> <br />
    <div className=''>
      <div className="">
      </div>
      <div className=''>
      <h6>PICK UP STATION</h6>
          <p className='mb-1'><small>Delivery fees #250</small></p>
          <span >Arriving at pickup station between <strong>13 February & 14 February</strong> when you order within next <strong>2hrs 43mins</strong></span>
      
      </div>
      
    </div> <br />
  
      <div className=''>
      <h6>DOOR DELIVERY</h6>
          <p className='mb-1'><small>Delivery fees #620</small></p>
          <span >Ready for delivery between <strong>12 February & 13 February </strong>when you order within next <strong> 59mins</strong></span>
      </div>
      <hr className="border-top" />
      <h6>RETURN POLICY</h6>
      <p>Free return within 7 days for ALL eligible itemsDetails</p>
      </div>

      <div className='mt-5 mb-0 bg-white rounded'>
       <span className='mb-1 '>SELLER INFORMATION</span> <hr />
        <p className='mt-0'>Jumia <br />100% Seller Score</p>
      </div>
    
      <div className='last mt-5 rounded'>
        

            <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > <a href="#details">Product Details</a></p>
            <p>Specifications</p>
            <p>Verified Customer Feedback</p>
            </div>
        
          <div className="bg-white rounded mt-2">
          <div className='d-flex  bg-white rounded'>
            <div className=" d-flex">
            <img src ={newtolu.Url} style={{height:100, width:110}} alt="" />
            
            <div className=''>
            <p className=' text-truncate mb-0' style={{width:150}}>{newtolu.Name} </p>
            <p  className='mb-0 fs-5'><b>{newtolu.Price.amount}</b></p>
            <p className='fw-light fs-6'><s>{newtolu.Price.slashedamount} </s> &nbsp; <span className=''> {newtolu.Price.percent}</span> </p>
            </div>
            </div>
          </div>
            <button className='inume flex container mb-1 rounded shadow-lg text-white' style={{width:259,height:40, margin:0}}> <MdAddShoppingCart />   ADD TO CART</button>
          </div>
          </div>
      
      </div>
    
    );
}


export default Delivery
