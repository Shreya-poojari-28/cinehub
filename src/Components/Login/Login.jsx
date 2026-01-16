import React, { useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        email_id: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
    })

    const defaultValues = {
        email_id: "",
        password: ""
    }

    const formik = useFormik({
        initialValues: defaultValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: values => {
            navigate('/dashboard')
            sessionStorage.setItem("token", true)
            sessionStorage.setItem("email", values.email_id)
        }
    })

    return (
        <div className="login-bg d-flex align-items-center justify-content-center">

            <div className="login-overlay"></div>

            <form className="login-card text-white" onSubmit={formik.handleSubmit}>
                <h2 className="fw-bold text-center mb-1">Welcome Back</h2>
                <p className="text-center text-light mb-4">
                    Sign in to continue watching
                </p>

                <div >
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email_id"
                            className="form-control bg-dark text-white border-secondary"
                            placeholder="you@example.com"
                            value={formik.values.email_id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email_id && formik.errors.email_id && (
                            <div className="error">{formik.errors.email_id}</div>
                        )}
                    </div>

                    <div className="mb-3 password-wrapper">
                        <label className="form-label">Password</label>

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="form-control bg-dark text-white border-secondary"
                            placeholder="••••••••"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <button
                            type="button"
                            className="hide-unhide"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword
                                ? <i className="fa-solid fa-eye"></i>
                                : <i className="fa-solid fa-eye-slash"></i>
                            }
                        </button>
                        {formik.touched.password && formik.errors.password && (
                            <div className="error">{formik.errors.password}</div>
                        )}
                    </div>

                    <div className="d-flex justify-content-between small mb-3">
                        <div>
                            <input type="checkbox" className="form-check-input me-2" />
                            Remember me
                        </div>
                        <span className="text-decoration-underline">
                            Forgot password?
                        </span>
                    </div>

                    <button type="submit" className="btn btn-danger w-100 rounded-3">
                        Sign In
                    </button>
                </div>

                <p className="text-center mt-3 small">
                    New here? <span className="text-white text-decoration-underline">Create an account</span>
                </p>
            </form>
        </div>
    );
};

export default Login;
