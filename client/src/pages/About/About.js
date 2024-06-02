import React from 'react';
import './About.css';

const About = () => {
  return (

    <>
      <section className='about-wrapper'>
        <div className='container'>
          <div className='row rowClass text-center'>
            <div className='col-md-12 about-section-title'>
              <h1 className='about-title'><span>About Us</span></h1>
            </div>
          </div>
        </div>
      </section >


      <div className='container'>
        <div className='row rowClass mt-5 mb-5 text-center'>
          {/* <h1 className='about-title text-white mb-5'>About Us</h1> */}
          <div className='col-12 about-text text-center'>
            <h3>Our Story - From The Start</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
          </div>
          <div className='about-section-wrapper'>

            <img src='/images/about.png' className='about-img' alt="" />

            <div className='about-section-text '>
              <h3>An Attractive Sub Heading To Continue</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>

        </div>
      </div >
    </>



  )
}
export default About;