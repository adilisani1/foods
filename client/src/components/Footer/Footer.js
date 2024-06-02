import React from 'react';
import "./Footer.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className='footer-wrapper'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className='col-md-3 col-lg-3'>
              <div className='opening-hours'>
                <h3>Opening Hours</h3>
                <ul >
                  <li>Mon-Thu:10:00 Am - 01:00 Am</li>
                  <li>Saturday:11: Am To Midnight</li>
                  <li>Sunday: Kitchen Closed</li>
                </ul>
              </div>
            </div>



            <div className='col-md-6 col-lg-6 '>
              <div className='stay-in-touch '>
                <h3>Lets Stay In Touch</h3>
                <p>Join our e-club to get the latest news</p>
                <div className='subscribe'>
                  <input className='form-control' placeholder='Your email...' type='email' />
                  <button className='signup-btn'>Sign Up</button>
                </div>
                <div className='footer-social-icons'>
                  <TwitterIcon className='icons' />
                  <InstagramIcon className='icons' />
                  <YouTubeIcon className='icons' />
                </div>
              </div>
            </div>
            <div className='col-md-3 col-lg-3 d-flex justify-content-center'>
              <div className='footer-links '>
                <h3>Menu Links</h3>
                <ul>
                  <li>Family Bucket</li>
                  <li>Fried Chicken</li>
                  <li>Spicy Chicken</li>
                  <li>Burgers</li>
                </ul>

              </div>
            </div>

          </div>


        </div>
      </div>


      {/* <!---Footer Bottom --> */}
      <div className="footer-bottom">
        <div className='container'>
          <div className="row justify-content-center  text-center">
            <div className="col-md-5">
              <p className="copyright-text">Copyright &copy; 2022 foodorder.com</p>
            </div>
            <div className="col-md-6 offset-md-1 payment-card-container">
              <img className="payment-card" src="./images/payment.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </footer >
  )
}

export default Footer;
