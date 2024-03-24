import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import Header from '@/Components/Header';
import JsonData from '../../data/data.json';
import Features from '@/Components/Features';
import { AboutUs } from '@/Components/AboutUs';

export default function Home({reviews, status}) {
    console.log(status)
    return (
            <NavBar>
                <Head title="Home">
                    <link rel="icon" href={AppLogo}/>
                </Head>
                <Header props={JsonData.header} status = {status}/>
                <Features props = {JsonData.header}/>
                <AboutUs props = {JsonData.aboutus} reviews={reviews}/>    
            </NavBar>
    );
}
