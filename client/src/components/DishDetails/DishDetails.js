import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DishDetails.css'
import { useDispatch } from 'react-redux';
import { addToCart, deCreament, inCreament } from '../../redux/cartSlice';


const DishDetails = ({ singleDish, headerColor }) => {
    const [singleD, setSingleD] = useState(singleDish);
    const { id } = useParams();

    const dispatch = useDispatch()


    useEffect(() => {
        const compareDish = () => {
            const dishSingle = singleDish.filter((item) => item._id === id);
            setSingleD(dishSingle);
        };

        compareDish();
    }, [id, singleDish]);


    return (
        <>
            <div className="header-wrap" style={
                {
                    backgroundColor: headerColor,
                    zIndex: 10,
                    padding: '4rem 10%',
                    color: '#fff',
                }}>

            </div>
            <section
                className="our-menu section dish-details-repeat-img" id="menu">
                <div className="sec-wp">
                    <div className="container">

                        <div className="menu-list-row">


                            {singleD.map((item) => {
                                return (
                                    <div className="row g-xxl-5 bydefault_show" id="menu-dish" key={item._id}>
                                        <div className="col-lg-4 col-sm-6 dish-details-box-wp lunch" data-cat="lunch">
                                            <div className="dish-detail-box text-center">
                                                <div className="dish-detail-img">
                                                    <img src={item.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-6 dish-information" data-cat="lunch">

                                            <h2>{item.title}</h2>
                                            <p className='dish-dec'>Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun</p>
                                            <p className='dish-price'>${item.price}</p>
                                            <div className='dish-sub'>
                                                <button className="qty-btn" onClick={() => dispatch(deCreament(item))}>
                                                    -
                                                </button>
                                                <span>{item.qty}</span>
                                                <button className="qty-btn" onClick={() => dispatch(inCreament(item))}>
                                                    +
                                                </button>

                                            </div>
                                            <button className='add-btn-dish' onClick={() => dispatch(addToCart(item))}>Add To Bucket</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DishDetails
