import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom"
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Cart from '../../pages/Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = ({ showNav, setShowNav, isCartModalOpen, setIsCartModalOpen, toggleViewCart }) => {
    const [isActiveHeader, setIsActiveHeader] = useState(false);
    const [modal, setModal] = useState(false);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 50) {
                setIsActiveHeader(true);
            } else {
                setIsActiveHeader(false);
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleNavbar = () => {
        setShowNav(prevState => !prevState);
    };



    return (
        <>
            <section className=''>
                <header className={`header-wrap ${isActiveHeader ? "show" : ""} ${showNav ? "active" : ""}`}>
                    <div className='logo'>
                        <Link to='/'><img src='/images/foood-logo.png' className="logo-img" alt='' /></Link>
                    </div>


                    <nav className="nav-list">
                        <ul className="nav-menu mx-auto">
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className='cart-icon' onClick={toggle}>
                            <span className='cart-qty'>{cartItems.length}</span>
                            <span className='cart' onClick={toggleViewCart}><ShoppingBasketOutlinedIcon /></span>
                        </div>

                        <div className='sign-buttons'>
                            <button className='btn sign-in'> <Link className='formBtn' to="/login">
                                Sign In
                            </Link></button>
                            <Link className='formBtn' to="/signup">
                                <button className='btn sign-up'>
                                    Sign up
                                </button>
                            </Link>
                        </div>

                    </nav>

                    <div className='mobile-cart-wrapper' onClick={toggle}>
                        <span className='mobile-cart-qty'>{cartItems.length}</span>
                        <span className='mobile-cart-icon' onClick={toggleViewCart}><ShoppingBasketOutlinedIcon /></span>
                    </div>

                    <div className='mobile-menu' onClick={toggleNavbar}>
                        <DragHandleIcon className='menu-icon ' />
                        <CloseIcon className='close-icon ' />
                    </div>


                </header>

                {/* {modal && <Cart modal={modal} setModal={setModal} toggle={toggle} />} */}
                <Cart
                    isCartModalOpen={isCartModalOpen}
                    toggleViewCart={toggleViewCart} setIsCartModalOpen={setIsCartModalOpen} />
            </section >


        </>
    )
}

export default Navbar