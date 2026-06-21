import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import api from '../../api/axios';

function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!form.name || !form.email || !form.password) {
            setError('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);
        try {
            await api.post('/auth/signup', form);
            // Account created and logged in (cookie set by the server).
            // Send the user to the dashboard app.
            window.location.href = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong, please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-1 text-center" style={{ padding: "100px,20px", fontSize: "16px" }}>Open a free demat & trading account online<br /></h1>
                <h3 className='fs-5 text-muted text-center'>Start investing brokerage free and join a community of 1.5+ crore investors and traders</h3>
            </div>
            <div className="row p-5 mt-5  text-muted " style={{ lineHeight: "1.9", fontSize: "1rem" }} >
                <div className="col-6 p-4">
                    <img src='Media\landing.svg' alt="" />
                </div>
                <div className="col-6 p-3">
                    <h1 className='fs-2'>Signup now</h1>
                    <h5 className='fs-5 text-muted '>Already have an account? <Link to="/login">Login</Link></h5>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Full name"
                            value={form.name}
                            onChange={handleChange}
                            style={{ padding: "5px", margin: "10px 20px", borderRadius: "3px", width: "50%" }}
                        /><br />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            value={form.email}
                            onChange={handleChange}
                            style={{ padding: "5px", margin: "10px 20px", borderRadius: "3px", width: "50%" }}
                        /><br />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            style={{ padding: "5px", margin: "10px 20px", borderRadius: "3px", width: "50%" }}
                        /><br />

                        {error && <p className="text-danger" style={{ margin: "0 20px" }}>{error}</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className=" btn btn-primary fs-5 mb-3"
                            style={{ width: "40%", margin: "10px 20px" }}
                        >
                            {isSubmitting ? 'Creating account...' : 'Sign up'}
                        </button>
                    </form>
                    <p className='mr-2'>By proceeding, you agree to the Zerodha terms & privacy policy</p>
                </div>

            </div>
        </div>
    );
}

export default Signup;
