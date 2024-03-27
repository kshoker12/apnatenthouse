import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import dataJson from "../../data/data.json"

export default function Faq({}) {
    const questions = dataJson.faq;

    return (
        <NavBar>
            <Head title="FAQs">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row" data-aos = "fade-right" data-aos-once = {true}>
                                <div className="col-md-8 col-md-offset-2 tw-text-center tw-pt-48 tw-pb-16" >
                                    <h1>
                                        FAQs
                                    </h1>  
                                    <a
                                        href={route("booking")}
                                        className="btn btn-custom btn-lg page-scroll"
                                        >
                                        Request Booking
                                    </a>{" "}    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <a className='tw-bottom-0 tw-right-0 tw-p-4 tw-fixed tw-z-50' href="#header">
                <button className='tw-rounded-full tw-bg-black tw-w-12 tw-h-12 hover:tw-bg-blue-500 tw-ease-in-out tw-duration-300'>
                    <i className="fas fa-arrow-up  tw-text-2xl tw-text-white"/>
                </button>
            </a>
            <div className="tw-bg-blue-50 tw-py-10 ">
                <div className="container-fluid tw-mx-24 ">
                    <div className="tw-grid lg:tw-grid-cols-3 tw-gap-8 tw-grid-cols-2 ">
                        {questions.map((question)=>{
                            return (
                                <a href = {"#question" + question.id} className="" data-aos = "flip-left" data-aos-once = {true}>
                                    <button className="md:tw-text-3xl tw-shadow-blue-gray-500 tw-shadow-lg 2xl:tw-h-[250px]  xl:tw-h-[210px]  lg:tw-h-[200px] md:tw-h-[300px] sm:tw-h-[250px] tw-h-[220px] tw-bg-white hover:tw-bg-blue-400 hover:tw-text-white tw-ease-in-out tw-duration-200 tw-rounded-xl tw-p-4">
                                        {question.question}    
                                    </button>
                                </a>
                            )
                        })}
                    </div> 
                    
                </div>
                <div className="xl:tw-px-24 tw-px-10 tw-py-10 tw-mt-10 tw-space-y-10">
                    {questions.map((question)=>{
                        return (
                            <>
                                <div className = "tw-py-10" id = {"question" + question.id}>
                                </div>
                                <div className="lg:tw-flex tw-bg-white tw-shadow-sm tw-shadow-black tw-p-6" data-aos = "fade-up" data-aos-once = {true}>
                                    <div className="lg:tw-w-3/4 tw-p-4">
                                        <div className="">
                                            <h3>{question.question}</h3>
                                        </div>
                                        <div className="">
                                            <p>{question.answer}</p>
                                        </div>
                                    </div>
                                    <div className="tw-flex tw-items-center tw-justify-center">
                                        <img src={"/" + question.image} alt="" className='lg:tw-w-[400px] lg:tw-h-auto sm:tw-w-[400px] sm:tw-h-[400px] tw-w-[300px] tw-h-[350px]'/>    
                                    </div>
                                </div>     
                            </>
                        )
                    })}
                </div>
            </div>
        </NavBar>
    );
}
