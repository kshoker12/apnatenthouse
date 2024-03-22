import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import Header from '@/Components/Header';
import JsonData from '../../data/data.json';
import Features from '@/Components/Features';
import { AboutUs } from '@/Components/AboutUs';

export default function Home({reviews, status}) {
    console.log(reviews)
    return (
            <NavBar>
                <Head title="Home">
                    <link rel="icon" href={AppLogo}/>
                </Head>
                {status && <div className='tw-absolute tw-rounded-lg tw-w-full tw-py-2 tw-bg-green-400'>
                    {status}
                </div>}
                <Header props={JsonData.header}/>
                <Features props = {JsonData.header}/>
                <AboutUs props = {JsonData.aboutus} reviews={reviews}/>    
            </NavBar>
    );
}
