import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import Header from '@/Components/Header';
import JsonData from '../../data/data.json';
import Features from '@/Components/Features';
import { AboutUs } from '@/Components/AboutUs';

export default function Home({reviews, status}) {
    return (
            <NavBar>
                <Head title="Home">
                    <link rel="icon" href={AppLogo}/>
                </Head>
                <Header props={JsonData.header} status = {status}/>
                <a className='tw-bottom-0 tw-right-0 tw-p-4 tw-fixed tw-z-50' href="#header">
                    <button className='tw-rounded-full tw-bg-black tw-w-12 tw-h-12 hover:tw-bg-blue-500 tw-ease-in-out tw-duration-300'>
                        <i className="fas fa-arrow-up  tw-text-2xl tw-text-white"/>
                    </button>
                </a>
                <Features props = {JsonData.header}/>
                <AboutUs props = {JsonData.aboutus} reviews={reviews}/>    
            </NavBar>
    );
}
