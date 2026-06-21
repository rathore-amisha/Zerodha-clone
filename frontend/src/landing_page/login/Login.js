import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api/axios';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!form.email || !form.password) {
            setError('Please fill in all fields.');
            return;
        }

        setIsSubmitting(true);
        try {
            await api.post('/auth/login', form);
            window.location.href = process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001';
        } catch (err) {
            setError(err.response?.data?.message || 'Invalid email or password.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-1 text-center" style={{ fontSize: "16px" }}>Login to your Zerodha account<br /></h1>
            </div>
            <div className="row p-5 mt-5 text-muted justify-content-center" style={{ lineHeight: "1.9", fontSize: "1rem" }}>
                <div className="col-6 p-3">
                    <h1 className='fs-2'>Login</h1>
                    <h5 className='fs-5 text-muted '>New here? <Link to="/signup">Create an account</Link></h5>

                    <form onSubmit={handleSubmit}>
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
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
