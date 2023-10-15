import { Formik, Form, Field, FormikValues } from 'formik';
import React, { useState, MouseEventHandler, MouseEvent, ReactElement } from 'react';
import * as yup from "yup";
import $ from "jquery";
import { Notify } from 'notiflix';

export default function SheduleCom() {
    const [hours, setHours] = useState<number>(8);
    const [timing, setTiming] = useState<number>(9);
    const [toReserve, setToReserve] = useState<boolean>(false);
    const [clickedTime, setClickedTime] = useState<EventTarget | null>(null);

    const reserveTime: MouseEventHandler = (e: MouseEvent) => {
        console.log(toReserve);
        if (clickedTime != e.currentTarget) {
            console.log(e.currentTarget);
            $(".hourwise_btn").each((index: number, elem: HTMLElement) => {
                if ($(elem).hasClass("bg-yellow-300")) {
                    $(elem).removeClass("bg-yellow-300");
                    $(elem).addClass("bg-white");
                }
            })
            $(e.currentTarget).removeClass("bg-white");
            $(e.currentTarget).addClass("bg-yellow-300");

        }
        if (clickedTime == e.currentTarget) {
            setToReserve(!toReserve);
            $(e.currentTarget).removeClass("bg-yellow-300");
            $(e.currentTarget).addClass("bg-white");
            setClickedTime(null);

        } else {
            setToReserve(true);
            setClickedTime(e.currentTarget);
        }

    }

    const handleSubmit = (values: FormikValues) => {
        console.log(values);
        Notify.success("Reserved Successfully");
    }



    const ButtonsToLoop = Array.from({ length: hours }, (num, index) => (
        <div key={index} className='m-4'>
            {/* <button onClick={reserveTime} className='hover:text-white text-xs border-2 border-blue-500 font-bold hourwise_btn hover:bg-blue-500 bg-gray-300 rounded-full p-4' key={index}> {index + timing}-{index + 1 + timing} {index + 1 + timing > 12 ? "Pm" : "Am"}</button> */}
            <button onClick={reserveTime} className="hourwise_btn group relative p-4 overflow-hidden rounded-lg bg-white text-lg shadow">
                <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-white font-bold text-xs">{index + timing}-{index + 1 + timing} {index + 1 + timing > 12 ? "pm" : "am"}</span>
            </button>
        </div>

    ));

    const validateSchema = yup.object({
        name: yup.string().required("Name Is Required"),
        email: yup.string().email(),
        phoneNumber: yup.number().required("Phone Number Is Required To Contact")
    })

    const initialValues = {
        name: "",
        email: "",
        phoneNumber: ""
    }


    return (
        <>
            <div className='grid grid-cols-4' >

                {ButtonsToLoop}

            </div>
            {toReserve ?
                <div className='items-center border px-3 border-blue-500' >

                    <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={handleSubmit} >
                        <Form className='flex flex-col'>
                            <label className="custom-field two">
                                <Field name="name" placeholder="&nbsp;" />
                                <span className="placeholder">Name: </span>
                            </label>

                            <label className="custom-field two">
                                <Field name="email" placeholder="&nbsp;" />
                                <span className="placeholder">Email: </span>
                            </label>

                            <label className="custom-field two">
                                <Field name="phoneNumber" placeholder="&nbsp;" />
                                <span className="placeholder">Phone Number: </span>
                            </label>
                            <div className='item-center'>
                                <button type='submit' className='bn632-hover bn26'>Send Contact</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
                :
                null
            }
        </>
    )
}
