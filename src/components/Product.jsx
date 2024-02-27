import React, {useState} from 'react';
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";
import Delivery from './Delivery'
import '../css/Product.css'
import Details from './Details'
import itemsData from '../data/items';
import Component1 from './component1';
import Component2 from './Component2';

const Product = () => {
  const [items, setItems] = useState(itemsData);

  const newitems = items[2] ;
   
  return (
    <div className="container ">
    <div className="   mt-5 " >
      <div className="row  ">
        <div id='para' className="col-md-9  ">
          <div id="para" className="bg-white  rounded p-md-4 p-2">
            <div className="row  ">
              <div className="col-md-4 rounded  "  >
                <div className='m-0'>
              <img src={newitems.Url} alt="image" className='product-image' style={{maxHeight:'600px'}}/> </div> <hr />
                           <h6 className='m-4 mb-0 mt-1'>SHARE THIS PRODUCT</h6>
                <h6 className="m-4 mt-0"><strong><RiFacebookCircleLine /> <PiTwitterLogo /></strong></h6> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
                <p><a href="#" className=' pb-0 '>Report incorrect information</a></p>
              </div>
              <div className="col-md-8 ">
                <span>
                  <button id="button" className='border-0 p-1 rounded '>OFFICIAL STORE</button> &nbsp;   <button  className='button h-3 btn-sm rounded border-0 p-1'>{newitems.header}</button>
                </span>
                <p className='mt-3'>{newitems.Name}</p>
                <p>Brand : <a href="">{newitems.Brand}</a>  | <a href="">Similar products from{newitems.Brand} </a>   </p>
                <hr className="border-top" />
                <p><span className='fs-4 text'>{newitems.Price.amount}</span>  <span className='fw-light'><s>{newitems.Price.slashedamount}</s></span>   <span className='text-danger fw-light'>{newitems.Price.percent}</span></p>
                <p className='fw-light mt-1 mb-0'>In stock</p>
                <p className='mt-1 mb-0'>+ shipping from <strong>#250</strong> to LEKKI-AJAH</p>
                <p>Ratings</p>
                <button className="cart rounded border-0 mr-1 shadow-lg text-white"> <MdAddShoppingCart /> ADD TO CART</button> <hr />
                <h6>PROMOTIONS</h6>
                <p>
                  <img src="../images/jumia logo.png" alt="image" className="img-fluid"/>
                  <a href="#" className="text-decoration-none underline-on-hover mb-0">call 07006000000 to order</a>
                </p>
                <p className='mt-0'>Need extra money? Loan up to N500,000 on the JumiaPay Android app. </p>
                <p className='mt-1'>Enjoy cheaper shipping fees when you select a pickup Staton at checkout</p>
              </div>
                   
              </div>
          
          </div>
        </div>
        <div id='' className="col-md-3 ">
          <Delivery />
          
          
       
        
        </div>
        
        <div  id='details' className='col-md-9 mt-5'>
          <Details/>
            
        
      
      </div>
      
        
             < Component2/>
      
      
        
             < Component1/>
  
             
  </div>
    
  </div>
  

      
  </div>

  );
}

export default Product;
