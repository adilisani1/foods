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
    const [menuOpen, setMenuOpen] = useState(false)

    const menuOpenHandler = () => {
        setMenuOpen(!menuOpen);
    };


    const closeMenu = () => {
        setMenuOpen(false);
    };





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

                    {/* DESKTOP NAV */}
                    <div className='header-container'>
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
                    </div>


                    {/* MOBILE NAV */}
                    <div className='mobile-header-container'>

                        <div className='mobile-menu' onClick={menuOpenHandler}>
                            <DragHandleIcon className='menu-icon ' />
                        </div>

                        <div className='logo'>
                            <Link to='/'><img src='/images/foood-logo.png' className="logo-img" alt='' /></Link>
                        </div>




                        <ul className={`mobile-nav-menu ${menuOpen ? 'open' : ''}`}>
                            <CloseIcon className='close-icon ' onClick={menuOpenHandler} />
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/menu" onClick={closeMenu}>Menu</NavLink>
                            </li>
                            <li className="nav-items">
                                <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
                            </li>
                            <div className='mobile-sign-buttons'>
                                <button className='btn sign-in'>
                                    <Link className='formBtn' to="/login" onClick={closeMenu}>
                                        Sign in
                                    </Link>
                                </button>
                                <Link className='formBtn' to="/signup">
                                    <button className='btn sign-up' onClick={closeMenu}>
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </ul>


                        <div className='mobile-cart-wrapper' onClick={toggle}>
                            <span className='mobile-cart-qty'>{cartItems.length}</span>
                            <span className='mobile-cart-icon' onClick={toggleViewCart}><ShoppingBasketOutlinedIcon className='cart-icon' /></span>
                        </div>

                    </div>

                    {/* <div className='mobile-cart-wrapper' onClick={toggle}>
                        <span className='mobile-cart-qty'>{cartItems.length}</span>
                        <span className='mobile-cart-icon' onClick={toggleViewCart}><ShoppingBasketOutlinedIcon /></span>
                    </div>

                    <div className='mobile-menu' onClick={toggleNavbar}>
                        <DragHandleIcon className='menu-icon ' />
                        <CloseIcon className='close-icon ' />
                    </div> */}

                </header>

                <Cart
                    isCartModalOpen={isCartModalOpen}
                    toggleViewCart={toggleViewCart}
                    setIsCartModalOpen={setIsCartModalOpen}
                />
            </section >


        </>
    )
}

export default Navbar