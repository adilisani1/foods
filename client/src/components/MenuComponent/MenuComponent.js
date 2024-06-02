import React from 'react';
import CustomerSlider from '../CustomerSlider/CustomerSlider';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./MenuComponent.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const MenuComponent = ({ dishes }) => {

    const dispatch = useDispatch()

    return (
        < >

            <div className='menu-t'>
                <h2 className='menu-title'>Menu</h2>
            </div>
            <section
                className="our-menu section repeat-img" id="menu">
                <div className="sec-wp">
                    <div className="container">

                        <div className="menu-list-row">
                            <div className="row g-xxl-5 bydefault_show" id="menu-dish">

                                {dishes.map((item) => {
                                    return (<div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch" key={item._id}>

                                        <div className="dish-box text-center">

                                            <Link to={`${item._id}`}>

                                                <div className="dist-img">
                                                    <img src={item.image} alt="img" />
                                                </div>
                                            </Link>
                                            <div className="dish-title">
                                                <h3 className="h3-title">{item.title}</h3>
                                                <p>120 calories</p>
                                            </div>
                                            <div className="dish-info">
                                                <ul>
                                                    <li>
                                                        <p>Type</p>
                                                        <b>Non Veg</b>
                                                    </li>
                                                    <li>
                                                        <p>Persons</p>
                                                        <b>2</b>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dist-bottom-row">
                                                <ul>
                                                    <li>
                                                        <b>${item.price}</b>
                                                    </li>
                                                    <li>
                                                        <button
                                                            className="dish-add-btn"
                                                            onClick={() => dispatch(addToCart(item))}>
                                                            <AddOutlinedIcon />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* VIP OFFER */}
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-8'>
                        <div className="banner">
                            <div className="main-text">
                                <h3 className='big-text-title'>BURGER</h3>
                                <span className='big-text-discount'>Get a 20% Discount</span>

                                <div className='big-week'>
                                    <p className='big-week-text '>On This Week</p>
                                </div>
                                {/* <a href="#">Buy Now</a> */}
                            </div>

                            <div className='discount'>
                                <img src='/images/food-img-1.png' className=' discount-img' alt='' />
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='row flex-column'>
                            <div className="col-md-12">
                                <div className="banner">
                                    <div className="main-text">
                                        <h3>BURGER</h3>
                                        <span>Get a 20% Discount</span>
                                        <div className='week'>
                                            <p>On This Week</p>
                                        </div>
                                        {/* <a href="#">Buy Now</a> */}
                                    </div>
                                    <div className='discount'>
                                        <img src='/images/food-img-2.png' className=' discount-img' alt='' />
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="banner">
                                    <div className="main-text">
                                        <h3>BURGER</h3>
                                        <span>Get a 20% Discount</span>
                                        <div className='week'>
                                            <p>On This Week</p>
                                        </div>
                                        {/* <a href="#">Buy Now</a> */}
                                    </div>
                                    <div className='discount'>
                                        <img src='/images/food-img-3.png' className=' discount-img' alt='' />
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* CENTER BANNER IMG */}
            <div className='center-banner-img '>
                <div className='container'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='banner-text col-md-6'>
                            <h2 >Get a 20% Discount</h2>
                            <span>Special Food Every Time </span>
                            <p className='center-banner-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                            <div className='d-flex align-items-center'>
                                <button className='order-now'>Order Now</button>
                                <h3>$299.00</h3>
                            </div>
                        </div>
                        <div className='col-md-6 burger-img '>
                            <img src="./images/hero-img-new.png" className='img-fluid' alt='' />
                        </div>
                    </div>
                </div>
            </div>


            {/* <!--CUSTOMER SlIDER HEADING--> */}
            <section className="container">
                <div className="col-12 text-center">
                    <h2 className="section-title-className">CUSTOMER REVIEWS</h2>
                </div>
            </section>

            <section className="container-fluid">
                {/* <!-- CUSTOMERS SLIDERS --> */}
                <CustomerSlider />
            </section>

        </ >
    )
}

export default MenuComponent