import React, {useState} from 'react'
import './Cart.css'
import emptyCartSvg from '../../assets/Svg/emptyCart.svg'
import testProduct from '../../assets/Images/testProduct.jpg'
import {Alarm, Plus, Dash} from 'react-bootstrap-icons';




const Cart = () => {
  const [cartQuanityNumber, setCartQuanityNumber] = useState(1);

  const addQuanityNumber = () => {
    setCartQuanityNumber(prevState => prevState+1)
  };
  const subtractQuanityNumber = () => {
    setCartQuanityNumber(prevState => prevState>1 ? prevState-1 : prevState)
  };

  let cartQuantity = 0; //will be calculated later
  return (
    <div className='cartPage'>
      {
        cartQuantity? <div className="cart__emptyCart d-flex flex-column rounded-1">
        <div className="emptycartsvg d-flex align-items-start flex-1 justify-content-center">
        <img src={emptyCartSvg} alt="" />
        </div>
        <div className="backtohome d-flex  align-items-end justify-content-center flex-1">
        <button className="cart__backhome rounded-1"></button>
        </div>
        </div>
        :
        <div className='cart__filled d-flex gap-3'>
          <div className="cart__cartitems flex-3 d-flex flex-column bg-light rounded-2 align-self-start">
            <div className="cart__cart-item-title border-bottom-1 p-3">
              <h5>Cart(1)</h5>
            </div>
            <div className="cart__items-main-details-container p-3 d-flex flex-column">
            <div className="cart__cartitems-details d-flex  justify-content-between">
                <div className="cartitems-left-details  d-flex">
                  <img className='testProductimg' src={testProduct} alt="" />
                <div className="cartitems-fulldetails f-flex flex-collumn">
                  <div className="name">Oraimo 10000mAh Power-Bank OPB-P118D</div>
                  <div className="seller">Seller: <span className='text-dark'>Oraimo offficial store-CODx</span></div>
                  <div className="availability">in Stock</div>
                </div>
                </div>
                <div className="cartitems-right-details p-3 d-flex flex-column align-items-end">
                  <p className='cartitems-fulldetails-price fw-medium fs-5'>₦ 15,000</p>
                  <p className='cartitems-fulldetails-discount d-flex'>
                    <p style={{color: '#75757A'}} className="original-price cancelled-text">₦ 26,000</p>
                    <p style={{backgroundColor :'#FEF2E9', color: '#F68B1E'}} className="discount-percent ms-2 px-1 fs-6">
                      -42%
                    </p>
                  </p>
                </div>
            </div>
            <div className="cartitems-quantitybtns d-flex justify-content-between">
                <div style={{color : '#F68B1E', fontSize: '14px'}} className="d-flex align-items-center cart-remove rounded-1 fw-medium">
                {/* <Trash/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
                <span className='ms-2'>REMOVE</span>
                </div>
                <div className="cart-quatity d-flex">
                  <button onClick={subtractQuanityNumber} style={{backgroundColor :  cartQuanityNumber !== 1 ? '#f48d27' : '#FAC58E', width: '32px', height: '32px', color: 'white'}} className="cart-quantity-minus flex- d-flex align-items-center justify-content-center  rounded-1"><Dash style={{width:'26px', fontSize: '30px'}} /></button>
                  <div style={{width: '32px', fontSize:'14px'}} className="fw-semibold cart-quantity-number flex- d-flex align-items-center justify-content-center  rounded-1">
                    {cartQuanityNumber}
                    </div>
                    <button onClick={addQuanityNumber} style={{backgroundColor: cartQuanityNumber == 1 ? '#f48d27' : '#FAC58E', width: '32px', height: '32px', color: 'white'}} className="cart-quantity-add flex-1 d-flex align-items-center justify-content-center rounded-1">
                        <Plus style={{width:'26px', fontSize: '30px'}} />
                    </button>
                </div>
            </div>
            </div>
          </div>
          <div className="cart__summary-container flex-1 d-flex flex-column gap-2">
          <div className="cart__cartsummary  bg-light rounded-2 ">
            <div className="cart__cart-summary-title border-bottom-1 p-2">
              <p>CART SUMMARY</p>
            </div>
            <div className="cart__cart-summary-details border-bottom-1">
              <div className=" p-2 summary-subtotal d-flex align-items-center justify-content-between">
                <div style={{fontSize:'14px'}} className="summary-subtotal-title fw-medium">Subtotal</div>
                <div className="summary-subtotal-price fw-semibold fs-5">₦ 15,000</div>
              </div>
                <p style={{fontSize:'12px', color:'#75757A'}} className='ps-2 pb-2'>Delivery fees not included yet.</p>
            </div>
            <div className="cart__checkout p-2 ">
                <button style={{width:'100%', height:'40px', backgroundColor: '#f48d27', color:'white'}} className="checkoutbtn rounded-2 fw-semibold">
                  CHECKOUT(₦ 15,000)
                </button>
            </div>
          </div>
          <div className="summary-returns bg-light p-2 rounded-2">
            <h6>Returns are easy</h6>
            <p style={{fontSize:'12px'}}>Free return within 7 days for ALL eligible items <span style={{cursor:'pointer'}} className='returns-details'>Details</span></p>
          </div>
          </div>
        </div>
      }
      
    </div>
  )
}

export default Cart
