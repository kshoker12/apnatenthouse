import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import AppLogo from "../Components/applogo.png"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from './Footer';

export default function NavBar({children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
        Aos.refresh();
    },[])


    return (
        <div className="">
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                  >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                    <span className="icon-bar"></span>{" "}
                  </button>
                  <a className="navbar-brand page-scroll tw-flex tw-items-center" href="#page-top">
                    <img src={AppLogo} alt="" className='tw-h-64'/>
                  </a>{" "}
                  <div className="tw-flex tw-items-center tw-space-x-2 tw-text-5xl tw-mt-4">
                    <a href="#">
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook"/>
                    </a>
                    <a href="#">
                        <i className="fab fa-google"/>
                    </a>
                  </div>
                </div>
        
                <div
                    className=" collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                        <NavLink className = "navlink" href={route('home')} active={route().current('home')} >
                            Home
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('tents')} active={route().current('tents')} >
                            Tents
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('chairs')} active={route().current('chairs')} >
                            Chairs
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('tables')} active={route().current('tables')} >
                            Tables
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('floors')} active={route().current('floors')} >
                            Floors
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('miscellaneous')} active={route().current('miscellaneous')} >
                            Miscellaneous
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('faq')} active={route().current('faq')} >
                            FAQs
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink className = "navlink" href={route('gallery')} active={route().current('gallery')} >
                            Gallery
                        </NavLink> 
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {children}
            <Footer/>
        </div>
            
    )
}
