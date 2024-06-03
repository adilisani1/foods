

import React, { useState, } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { inCreament, deCreament, removeCart } from '../../redux/cartSlice';

import { useNavigate } from "react-router-dom";

function Cart({ isCartModalOpen, setIsCartModalOpen }) {

  const navigate = useNavigate()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);

  // const qtyItems = cartItems.map((item) => item.qty)
  // const qtyItems = cartItems.reduce((totalQty, item) => {
  //   return totalQty + item.qty;
  // }, 0);

  //Close cart modal
  const closeCartModal = () => {
    setIsCartModalOpen(false)
  }

  // View Cart button 
  const handleViewCartClick = () => {
    navigate("/checkout");
    setIsCartModalOpen(false)

  };


  return (
    <div>
      {/* <Modal isOpen={modal} toggle={toggle}> */}
      <div className={`cart-modal ${isCartModalOpen ? 'open' : ''}`}>

        <div className="cart-modal-wrapper">
          <div className="cart-modal-inner">
            <div className="iCxowP kfarYJ">

              <div className="cart-modal-top">
                <div
                  width="100%"
                  className="cart-modal-top-area"
                >
                  <div className="">
                    Your Cart
                  </div>
                  <button
                    className="close-cart-btn"
                    onClick={closeCartModal}
                  >
                    <span className="inner">
                      <CloseOutlinedIcon className='close-cart-icon' />
                    </span>
                  </button>
                </div>
              </div>

              <div>
                {cartItems.map((item) => (
                  <div className="col-lg-12" key={item._id}>
                    <div className="cart-card mb-3">
                      <div className="cart-card-body">
                        <div className="d-flex flex-row align-items-center justify-content-between">
                          <div className="ms-3 d-flex align-items-center cart-product-wrapper">
                            <img
                              src={item.image}
                              className="img-fluid rounded-3 me-3"
                              alt="Shopping item"
                            />
                            <div className='cart-qty-wrapper'>
                              <h5 className='cart-product-title'>{item.title}</h5>
                              <div className='item-qty'>
                                <button className='add-sub' onClick={() => dispatch(deCreament(item))}>-</button>
                                <span className='cart-product-qty'>{item.qty}</span>
                                <button className='add-sub' onClick={() => dispatch(inCreament(item))}>+</button>
                              </div>
                            </div>
                          </div>
                          <div className='d-flex justify-content-end flex-column'>
                            <h5 className="mb-0 cart-product-price">{`$${item.price}`}</h5>
                            <div className='delete-cart-item'>
                              <DeleteForeverOutlinedIcon
                                className='delete-cart-icon'
                                onClick={() => dispatch(removeCart(item))}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {cartItems.length > 0 &&
                  <React.Fragment>
                    <div className='order-total'>
                      <span>Sub Total</span>
                      <h6>
                        {`$${totalPrice.toFixed(2)}`}
                      </h6>
                    </div>
                    <button className='view-cart mt-4 mb-4' onClick={handleViewCartClick}>Chekout</button>
                  </React.Fragment>

                }
              </div>

            </div>
          </div>
        </div>
      </div>



      {/* 
      <div className='modal-header'>
        <h4>Your Cart</h4>
        <div className='price-wrapper'>
          <span className='price'>{`${cartItems.length > 0 ? `${qtyItems} items` : ""}`}</span>
          <CloseOutlinedIcon className='modal-close' onClick={toggle} />
        </div>
      </div> */}
      {/*      
      <section className="h-100 h-custom scrollable-modal-content">
        <div className="container py-1 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    {cartItems.map((item) => (
                      <div className="col-lg-12" key={item._id}>
                        <div className="cart-card mb-3">
                          <div className="cart-card-body">
                            <div className="d-flex flex-row align-items-center justify-content-between">
                              <div className="ms-3 d-flex align-items-center cart-product-wrapper">
                                <img
                                  src={item.image}
                                  className="img-fluid rounded-3 me-3"
                                  alt="Shopping item"
                                />
                                <div className='cart-qty-wrapper'>
                                  <h5 className='cart-product-title'>{item.title}</h5>
                                  <div className='item-qty'>
                                    <button className='add-sub' onClick={() => dispatch(deCreament(item))}>-</button>
                                    <span className='cart-product-qty'>{item.qty}</span>
                                    <button className='add-sub' onClick={() => dispatch(inCreament(item))}>+</button>
                                  </div>
                                </div>
                              </div>
                              <div className='d-flex justify-content-end flex-column'>
                                <h5 className="mb-0 cart-product-price">{`$${item.price}`}</h5>
                                <div className='delete-cart-item'>
                                  <DeleteForeverOutlinedIcon
                                    className='delete-cart-icon'
                                    onClick={() => dispatch(removeCart(item))}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* </ModalBody> */}

      {/* <button className='view-cart' onClick={handleViewCartClick}>View Cart</button> */}
      {/* </Modal> */}

      {/* {modal && <Checkout viewCartModal={viewCartModal} toggleViewCart={toggleViewCart} />} */}
      {/* {cartItems.length > 0 &&
                          <div className='order-total'>
                            <h6>Total: {totalPrice.toFixed(2)}</h6>
                          </div>
                        } */}
    </div>
  );
}

export default Cart;
