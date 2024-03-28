import { Alert } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
import { useState } from 'react';

export default function Header({ props, status }) {
    const [show, setShow] = useState(status ? true : false)
    console.log(status)
    return (
        <header id="header">
            <div className="intro">      
                <div className="overlay">
                <div className="container ">
                
                    <div className="row" data-aos = "fade-up" data-aos-once = {true}>
                        
                    <div className="col-md-8 col-md-offset-2 intro-text" >
                  {show &&
                    <div className="tw-z-50 tw-absolute alertPop tw-flex tw-justify-center tw-w-11/12">
                        <Alert severity="success">
                            <div className="tw-flex tw-space-x-4 md:tw-mt-0 tw-mt-1 tw-items-center tw-justify-center">
                                <div className="md:tw-text-2xl sm:tw-text-lg ">
                                    {status}     
                                </div>
                                <button className='hover:tw-opacity-70 tw-ease-in-out tw-duration-200 tw-z-50' onClick={()=>{setShow(false)}}>
                                    <i className="fas fa-x tw-text-xl"/>
                                </button>
                            </div>
                        </Alert>    
                    </div>
                    }
                        <h1 className = "">
                        {props.title ? props.title : "Loading"}
                        <span></span>
                        </h1>
                        <p>{props.titleText ? props.titleText : "Loading"}</p>
                        <div className="">
                            <a
                            href="#about"
                            className="btn btn-custom btn-lg"
                            >
                            Learn More
                            </a>{" "}
                            <a
                                href={route("booking")}
                                className="btn btn-custom btn-lg"
                                >
                                Request Booking
                            </a>{" "}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}