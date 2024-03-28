import NavBar from "@/Layouts/NavBar";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLogo from "../Components/applogo.png"
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Card, Input, Button, Typography} from "@material-tailwind/react";
import Checkbox from "@/Components/Checkbox";
import { useState } from "react";
import { useEffect } from "react";

export default function BookingForm({routeData}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        preffered: 'Phone',
        yard: 'Grass',
        additional: "",
        protection: false,
        setup: false
    });

    const [totalCost, setTotalCost] = useState(routeData ? routeData.totalCost: 0);
    const [itemsList, setItems] = useState(routeData ? routeData.items : [])

    const submit = (e) => {
        e.preventDefault();
        post(route('bookingFinal', {information: {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            address: data.address,
            date: data.date,
            preffered: data.preffered,
            yard: data.yard,
            additional: data.additional,
            protection: data.protection,
            setup: data.setup,
            totalCost: totalCost.toFixed(2),
            itemsList: itemsList
        }}));
    };

    window.addEventListener("popstate", function() {
        // window.history.replaceState(null, "", route("home"))
        let requestData = {items: itemsList, totalCost: totalCost}
        post(route("bookingBack",{data: requestData}))
    })

    return (
        <NavBar>
            <Head title="Booking-Form">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row" data-aos = "fade-right" data-aos-once = {true}>
                                <div className="col-md-8 col-md-offset-2 tw-text-center tw-pt-48 tw-pb-16" >
                                    <h1>
                                        Quote Info
                                    </h1>  
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
            <div className="tw-bg-blue-50 lg:tw-h-fit tw-flex tw-justify-between tw-items-center tw-px-20 tw-pt-20  ">
                <form onSubmit={submit} className="tw-w-full tw-content-center tw-h-full">
                    <div className="md:tw-flex md:tw-justify-center tw-w-full tw-h-full xl:tw-space-x-20 lg:tw-space-x-10 md:tw-space-x-20 sm:space-x-0 tw-items-stretch tw-space-y-10 md:tw-space-y-0">
                        <div className="tw-bg-white tw-shadow-lg tw-py-10 tw-px-20 tw-grid lg:tw-grid-cols-2 md:tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-10 tw-h-full tw-grid-cols-1 tw-justify-center tw-items-center" data-aos = "fade-up" data-aos-once = {true}>
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="firstname" value="First Name" />    
                                    </div>
                                    

                                    <TextInput
                                        id="firstname"
                                        name="firstname"
                                        value={data.firstname}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="firstname"
                                        isFocused={true}
                                        onChange={(e) => setData('firstname', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.firstname} className="" />

                                </div>
                                
                            </div>
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="lastname" value="Last Name" />    
                                    </div>
                                    

                                    <TextInput
                                        id="lastname"
                                        name="lastname"
                                        value={data.lastname}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="lastname"
                                        isFocused={true}
                                        onChange={(e) => setData('lastname', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.lastname} className="" />
                                </div>     
                            </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="email" value="Email" />    
                                    </div>
                                    

                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.email} className="" />
                                </div>    
                            </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="phone" value="Phone #" />    
                                    </div>
                                    

                                    <TextInput
                                        id="phone"
                                        type="text"
                                        name="phone"
                                        value={data.phone}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="phone"
                                        onChange={(e) => setData('phone', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.phone} className="" />
                                </div>        
                            </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="address" value="Address of Event" />    
                                    </div>
                                    

                                    <TextInput
                                        id="address"
                                        type="text"
                                        name="address"
                                        value={data.address}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="address"
                                        onChange={(e) => setData('address', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.address} className="" />
                                </div>    
                            </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="date" value="Date of Event" />    
                                    </div>
                                    

                                    <TextInput
                                        id="date"
                                        type="date"
                                        name="date"
                                        value={data.date}
                                        className="tw-block xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96"
                                        autoComplete="date"
                                        onChange={(e) => setData('date', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.date} className="" />
                                </div>       
                            </div>
                             
                             <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="tw-flex xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96">
                                        <InputLabel htmlFor="preffered" value="Preferred Contact Method" />    
                                    </div>
                                    <div className="tw-flex tw-justify-between tw-items-center sm:tw-w-3/4 tw-w-2/3">
                                        <div className="tw-flex tw-items-center tw-space-x-2">
                                            <Checkbox
                                                id="preferred"
                                                name="preffered"
                                                value = "Phone"
                                                checked={data.preffered === "Phone"}
                                                autoComplete="preferred"
                                                onClick={(e) => setData('preffered', e.target.value)}
                                                
                                            />
                                            <div htmlFor="" className=" tw-font-medium tw-pt-1">Phone</div>    
                                        </div>
                                        <div className="tw-flex tw-items-center tw-space-x-2">
                                            <Checkbox
                                                id="preffered"
                                                name="preferred"
                                                value = "Email"
                                                checked={data.preffered === "Email"}
                                                autoComplete="preferred"
                                                onClick={(e) => setData('preffered', e.target.value)}
                                                
                                            />
                                            <div htmlFor="" className=" tw-font-medium tw-pt-1">Email</div>    
                                        </div>
                                    </div>
                                    <InputError message={errors.preffered} className="" />
                                </div>   
                             </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="yard" value="Backyard Surface" />    
                                    </div>
                                    <select name="yard" id="yard" className = "xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96" onChange={(e)=>{
                                        setData("yard", e.target.value)
                                    }}>
                                        {["Grass", "Concrete", "Pavement", "Gravel", "Other (Please Specify in Additional Info)"].map((item, index)=>{
                                            return (
                                                <option value={item}>
                                                    {item}
                                                </option>
                                            )
                                        })}
                                    </select>

                                    <InputError message={errors.yard} className="" />
                                </div>      
                            </div>
                             
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96">
                                        <InputLabel htmlFor="protection" value="With a 10% fee, protection plan covers the cost of any minor damages. With a 5% setup fee, our team handles the setup and dismantling of equipment" />    
                                    </div>
                                    <div className="tw-flex tw-items-center tw-space-x-2 xl:tw-w-96 lg:tw-w-72 md:tw-w-96 sm:tw-w-64 tw-w-96">
                                        
                                        <Checkbox 
                                            id="protection"
                                            name="protection"
                                            checked = {data.protection}
                                            className="tw-block  tw-rounded-sm"
                                            onClick={(e) => {
                                                setData('protection', !data.protection);
                                                setTotalCost(!data.protection ? totalCost * 1.1 : totalCost / 1.1)
                                            }}
                                        />
                                        <div className="">
                                            <div className="tw-pt-1">Protection Plan</div>  
                                        </div>
                                        
                                        <InputError message={errors.protection} className="" />    
                                    </div>
                                    <div className="tw-flex tw-items-center tw-space-x-2 xl:tw-w-96 lg:tw-w-72 md:tw-w-80 sm:tw-w-64 tw-w-96">
                                        
                                        <Checkbox 
                                            id="setup"
                                            name="setup"
                                            checked = {data.setup}
                                            className="tw-block tw-rounded-sm"
                                            onClick={(e) => {
                                                setData('setup', !data.setup);
                                                setTotalCost(!data.setup ? totalCost * 1.05 : totalCost / 1.05)
                                            }}
                                        />
                                        <div className="">
                                            <div className="tw-pt-1">Setup</div>  
                                        </div>
                                        
                                        <InputError message={errors.setup} className="" />    
                                    </div>
                                </div>    
                            </div>
                            
                            <div className="tw-flex tw-justify-center tw-items-center">
                                <div className="tw-w-fit">
                                    <div className="">
                                        <InputLabel htmlFor="additional" value="Additional Information" />    
                                    </div>

                                    <textarea
                                        id="additional"
                                        type="textarea"
                                        name="additional"
                                        placeholder="Is there anything you'd like us to know?"
                                        value={data.additional}
                                        className="tw-block xl:tw-w-96 md:tw-w-80 tw-h-64 lg:tw-w-72 sm:tw-w-64 tw-w-96 tw-border-gray-600 focus:tw-border-indigo-500 focus:tw-ring-indigo-500 tw-rounded-md tw-shadow-sm tw-text-xl"
                                        autoComplete="additional"
                                        onChange={(e) => setData('additional', e.target.value)}
                      
                                    />

                                    <InputError message={errors.additional} className="" />
                                </div>    
                            </div>
                            
                        </div>
                        <div className="tw-bg-white tw-shadow-lg xl:tw-w-2/5 lg:tw-w-1/2 tw-h-full md:tw-w-1/2" data-aos = "fade-up" data-aos-once = {true}>
                            <div id = "quoteTitle" className="tw-flex tw-justify-center tw-items-center ">
                                <h1 className="">Quote Summary</h1>   
                            </div>
                            <ul className="summary tw-px-6 tw-space-y-6 tw-w-full" id = "inner-scroll">
                                {itemsList.map((item)=>{
                                    return (
                                        <li className="xl:tw-text-3xl md:tw-text-2xl tw-flex tw-items-center tw-justify-start sm:tw-text-4xl">
                                            <i className="fa fa-chevron-right tw-text-blue-500 tw-px-7 xl:tw-text-4xl md:tw-text-3xl sm:tw-text-4xl"/>
                                            {item.name + " - Qty: " + item.quantity }
                                        </li>    
                                    )
                                })}    
                            </ul>
                            <div className="tw-px-6 tw-py-4">
                                <h4 className=""><strong>Estimated Cost:</strong> ${totalCost.toLocaleString("en-US", {style: "decimal", minimumFractionDigits: 2, maximumFractionDigits:2})}</h4>
                            </div>
                        </div>
                        
                    </div>
                   <div className="tw-flex tw-items-center tw-justify-center tw-my-10">
                            <PrimaryButton className="" disabled={processing}>
                                Submit
                            </PrimaryButton>
                    </div>
                        
                    

                    
                </form>
            </div>
        </NavBar>
    )
}