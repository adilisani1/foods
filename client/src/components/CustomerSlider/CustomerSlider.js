import React, { useEffect } from 'react';
import Swiper from 'swiper';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./CustomerSlider.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CustomerSlider = () => {

    useEffect(() => {
        new Swiper('.slider-content', {
            slidesPerView: 3,
            spaceBetween: 60,
            // loop: true,
            autoplay: true,
            // fade: true,
            centeredSlide: true,
            // loopFillGroupWithBlank: true,
            autoplay: {
                delay: 5000,

            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,

            },
            navigation: {
                // nextEl: ".swiper-button-next",
                // prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
            },
        });
    }, [])


    return (

        <div className="slider-container swiper">

            <div className="slider-content">

                <div className="slider-wrapper swiper-wrapper">

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarBorderIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer1.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer2.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer3.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                    <div className="slider-card swiper-slide">
                        <img className="customer-image" src="./images/customer/customer4.jpg" alt="" />
                        <div className="content-area">
                            <div className="stars">

                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>

                            <p className="customer-dec">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled
                                it
                                to make a type specimen
                                book.
                            </p>

                            <h3 className="customer-name">Simon Jones</h3>

                        </div>
                    </div>

                </div>
                {/* <!-- If we need pagination --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- If we need navigation buttons  --> */}
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
            </div>

        </div>



    );


}

export default CustomerSlider
