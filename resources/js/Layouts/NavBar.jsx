import NavLink from '@/Components/NavLink';
import AppLogo from "../Components/applogo.png"
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Footer from './Footer';
import { FACEBOOK, GOOGLE, INSTAGRAM } from '@/Constants/Links';
import { ADDONS, CHAIRS, FAQ, FLOORS, GALLERY, HOME, TABLES, TENTS } from '@/Constants/Navigation';

export default function NavBar({children }) {

    useEffect(()=>{
        Aos.init({
            duration: 2000
        });
        Aos.refresh();
    },[])


    return (
        <div className="tw-h-screen">
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
                    <a href={INSTAGRAM}>
                        <i className="fab fa-instagram"/>
                    </a>
                    <a href={FACEBOOK}>
                        <i className="fab fa-facebook"/>
                    </a>
                    <a href={GOOGLE}>
                        <i className="fab fa-google"/>
                    </a>
                  </div>
                </div>
        
                <div
                    className=" collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav navbar-right">
                    {[HOME, TENTS, CHAIRS, TABLES, FLOORS, ADDONS, FAQ, GALLERY].map((navItem)=>(
                        <li>
                            <NavLink className='navlink' href = {route(navItem.url)} active = {route().current(navItem.url)}>
                                {navItem.name}
                            </NavLink>    
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
            {children}
            <Footer/>
        </div>
            
    )
}
