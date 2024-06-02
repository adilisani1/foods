import React, { useState } from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Signup = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
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
        const { username, email, password } = formData

        if (!username || !email || !password) {
            alert('Please fill in all the details ');
            return;
        }


        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 6 characters long and include both letters and numbers.');
            return;
        }

        const res = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await res.json();

        if (data.message === "User already exists." || !data) {
            alert('User already exists.')
        } else {

            setTimeout(() => {
                setLoading(true)
                navigate('/login')
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
                        <h1 className='mb-3 mt-5 text-center'>Sign up</h1>
                        <form className='form-sign' onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    id="username"
                                    aria-describedby="emailHelp"
                                    value={formData.username}
                                    onChange={handleChange} />
                            </div>
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

                                <div id="passwordHelp" class="form-text">
                                    Password must be at least 6 characters long and include both letters and numbers.
                                </div>
                            </div>

                            <button type="submit" className="">Sign up</button>
                            <div className='col-12 text-center member'>
                                {/* <span>Already a member?</span> */}
                                <a href="/login">Already a member?</a>
                                <Link to="/login" className='push-signin'>Sign In</Link>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Signup