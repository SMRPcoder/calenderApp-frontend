import { Formik, FormikValues, Form, Field, FormikErrors, FormikTouched } from 'formik'
import React, { MouseEvent, MouseEventHandler, useState } from 'react';
import * as yup from "yup";
import NavBar from '../../components/Navbar';
import "./login.css";
import $ from "jquery";
import ReactCardFlip from 'react-card-flip';

interface IValues {
    email: string,
    password: string
}

interface IFormikCallBack {
    errors: FormikErrors<FormikValues>,
    touched: FormikTouched<FormikValues>
}

export default function Login() {

    const [flipped, setFlip] = useState<boolean>(false);

    const initialValues: IValues = { email: "", password: "" };

    const validateSchema = yup.object({
        email: yup.string().email().required("Username is Required"),
        password: yup.string().required("Password is Required").min(8, "Minimum 8 Character Required").max(18, "Maximum Limit is 18")
    })

    const handlesignup: MouseEventHandler = (e: MouseEvent) => {
        setFlip(!flipped);
    }
    return (
        <>
            <NavBar />
            <div className='flex justify-center mt-8'>
                <div className='w-2/5 '>
                    <img src="/assets/img/login-bg.jpeg" />
                </div>
                <ReactCardFlip containerClassName='w-1/2' isFlipped={flipped} flipDirection='horizontal' >
                    <div className='form_div card '>
                        <div className='text-blue-500 uppercase text-center'><h1 className='font-bold text-4xl p-4'>Login</h1></div>
                        <div className='flex justify-center'>
                            <div className='w-4/5'>
                                <Formik validationSchema={validateSchema} initialValues={initialValues} onSubmit={(values: FormikValues) => console.log(values)}>
                                    {({ errors, touched }: IFormikCallBack) => (
                                        <Form className='flex flex-col'>
                                            <label className="custom-field two">
                                                <Field name="email" placeholder="&nbsp;" />
                                                <span className="placeholder">Email: </span>
                                            </label>

                                            <label className="custom-field two">
                                                <Field name="password" type="password" placeholder="&nbsp;" />
                                                <span className="placeholder">Password: </span>
                                            </label>
                                            <div className='text-xs text-center p-1'><p>If You are Not Registered Please - <a className='text-blue-500 hover:underline' onClick={handlesignup} href='#'>Signup</a></p></div>
                                            <div className='text-xs text-center p-1'><p><a className='text-blue-500 hover:underline' href='#'>Forgot Password?</a></p></div>
                                            <div className='flex justify-center'>
                            <input className='m-2 p-1' type='checkbox'/><p className='p-1'>Remember Me</p>
                        </div>
                                            {/* <button className='m-4 bg-blue-500 p-4 ' type="submit">Login</button> */}
                                            <div className='flex justify-center p-2'>

                                                <button className="bn632-hover bn26">Login</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>

                        </div>
                       
                    </div>
                    <div className='form_div card '>
                        <div className='text-blue-500 uppercase text-center'><h1 className='font-bold text-4xl p-2'>Signup</h1></div>
                        <div className='flex justify-center'>
                            <div className='w-4/5'>
                                <Formik validationSchema={validateSchema} initialValues={initialValues} onSubmit={(values: FormikValues) => console.log(values)}>
                                    {({ errors, touched }: IFormikCallBack) => (
                                        <Form className='flex flex-col'>
                                            <label className="custom-field two">
                                                <Field name="email" placeholder="&nbsp;" />
                                                <span className="placeholder">Email: </span>
                                            </label>
                                            <label className="custom-field two">
                                                <Field name="name" placeholder="&nbsp;" />
                                                <span className="placeholder">Name: </span>
                                            </label>
                                            <label className="custom-field two">
                                                <Field name="phonenumber" placeholder="&nbsp;" />
                                                <span className="placeholder">PhoneNumber: </span>
                                            </label>
                                            <label className="custom-field two">
                                                <Field name="password" type="password" placeholder="&nbsp;" />
                                                <span className="placeholder">Password: </span>
                                            </label>
                                            <div className='text-xs text-center p-1'><p>If You Already Registered Please - <a onClick={handlesignup} className='text-blue-500 hover:underline' href='#'>Login</a></p></div>
                            

                                            {/* <button className='m-4 bg-blue-500 p-4 ' type="submit">Login</button> */}
                                            <div className='flex justify-center p-2'>

                                                <button className="bn632-hover bn26">Signup</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>

                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </>
    )
}
