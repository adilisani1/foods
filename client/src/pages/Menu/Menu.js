import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import "./Menu.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Menu = ({ dishes }) => {


  const dispatch = useDispatch()

  return (
    <div>
      <section className='menu-wrapper'>
        <div className='container'>
          <div className='row rowClass text-center'>
            <div className='col-md-12  menu-section-wrapper'>
              <h1 className='menu-title'><span>Menu</span></h1>
            </div>
          </div>
        </div>

      </section >

      <section
        className="our-menu section repeat-img" id="menu">
        <div className="sec-wp">
          <div className="container">

            <div className="menu-list-row">
              <div className="row g-xxl-5 bydefault_show" id="menu-dish">

                {dishes.map((item) => {
                  return (
                    <div className="col-lg-4 col-sm-6 dish-box-wp lunch" data-cat="lunch" key={item._id}>

                      <div className="dish-box text-center">


                        <Link to={`${item._id}`}>
                          <div className="dist-img">
                            <img src={item.image} alt="" />
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
                              <button className="dish-add-btn" onClick={() => dispatch(addToCart(item))}>
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
    </div>
  )
}
export default Menu;