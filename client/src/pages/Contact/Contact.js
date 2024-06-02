import React, { useState } from 'react';
import './Contact.css'
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
const Contact = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, message } = formData;

    if (!username || !email || !message) {
      alert('Please fill in all the details ');
      return;
    }

    const res = await fetch("http://localhost:5000/api/contact-us", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        message
      })
    })
    const data = await res.json();

    if (data.message === "Please filled the details correctly." || !data) {
      // errMessage()
      alert('Something went wrong')
    } else {

      setTimeout(() => {
        setLoading(true)
        navigate('/')
      }, 3000);
      setLoading(false)

    }


  }

  if (!loading) {
    return <Loading />
  }

  return (
    <>
      <section className='contact-wrapper'>
        <div className='container'>
          <div className='row rowClass text-center'>
            <div className='col-md-12 contact-section-title'>
              <h1 className='contact-title'>Contact</h1>
            </div>
          </div>
        </div>
      </section >
      <div className='container'>
        <form className='form-wrap' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className=""
              id="username"
              aria-describedby="emailHelp"
              value={formData.username}
              onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className=""
              id="email"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={handleChange} />
            {/* <div id="email" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>


            <textarea className="" id="text" name="message" rows="4" cols="50" onChange={handleChange}></textarea>


          </div>

          <button type="submit" className="">Submit</button>
        </form>

      </div>
    </>
  )
}
export default Contact;