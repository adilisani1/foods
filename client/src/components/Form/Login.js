import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './Form.css';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(true)

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData

        if (!email || !password) {
            alert('Please fill in all the details ');
            return;
        }
        const res = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await res.json();

        if (data.message === "Wrong credentials." || !data) {
            // errMessage()
            alert('Please use correct email and password')
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
            <section className='form-bg'>
                <div className='f-wrapper mx-auto'>

                    <div className='formCard'>
                        <h1 className='mb-3 mt-5 text-center'>Sign In</h1>
                        <form className='form-wrap' onSubmit={handleSubmit}>

                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    value={formData.email}
                                    onChange={handleChange} />
                                {/* <div id="email" className="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                            </div>
                            <button type="submit" className="">Sign In</button>
                            <div className='col-12 text-center member'>
                                {/* <span>Already a member?</span> */}
                                <a href="/signup">Dont have an Account?</a>
                                <Link to="/signup" className='push-signin'>Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Login