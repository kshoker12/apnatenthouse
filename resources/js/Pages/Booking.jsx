import NavBar from "@/Layouts/NavBar";
import { Head, Link, useForm } from "@inertiajs/react";
import AppLogo from "../Components/applogo.png"
import JsonData from '../../data/data.json';
import { useState } from "react";
import tentImg from "../Components/tent.png";
import chairsImg from "../Components/chair.png";
import floorsImg from "../Components/floors.png";
import addOnImg from "../Components/bars.png";
import tablesImg from "../Components/tables.png";
import PrimaryButton from "@/Components/PrimaryButton";   

import { styled, Table, TableBody, TableHead, TableRow, TableContainer, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';




export default function Booking({props}) {
    const [active, setActive] = useState(0)
    const products = [JsonData.products[4],JsonData.products[0], JsonData.products[1], JsonData.products[2], JsonData.products[3]]

    function findImage(category) {
        switch (category) {
            case "Chairs":
                return chairsImg;
            case "Tables":
                return tablesImg;
            case "Floors":
                return floorsImg;
            case "Add-Ons":
                return addOnImg;
            case "Tents":
                return tentImg;
            default:
                break;
        }
    }
    


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 14
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

    function createData(name, calories) {
    return { name, calories};
    }

    const rows = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
    ];

     function CustomizedTables() {
    return (
        <TableContainer component={Paper} sx={{minHeight: 100, maxHeight: 700}} id = "inner-scroll">
            
        <Table stickyHeader>
            <caption>
                <div className="tw-text-2xl tw-text-center tw-text-black">
                    Selected Items
                </div>
            </caption>
            <TableHead>
            <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <div className="tw-flex tw-items-center">
                            {row.calories}
                            <div className="tw-flex-1 tw-space-y-2 2xl:tw-ml-0 xl:tw-ml-1">
                                <div className="tw-h-4">
                                    <button><i className="fas fa-caret-up 2xl:tw-text-5xl md:tw-text-4xl tw-ease-in-out tw-duration-200 hover:tw-text-blue-700 "/></button>   
                                </div>
                                <div className="">
                                    <button><i className="fas fa-caret-down 2xl:tw-text-5xl md:tw-text-4xl tw-ease-in-out tw-duration-200 hover:tw-text-blue-700"/></button>   
                                </div>
                            </div>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <button>
                            <i className="fas fa-trash tw-text-red-600 tw-text-3xl tw-ease-in-out tw-duration-200 hover:tw-opacity-60"/>
                        </button>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }

    function ProductCard({product}) {
        return (
            <div className="product-card tw-bg-white tw-shadow-lg">
                <img src={product.image} alt="" className="product-img"/>
                <div className="tw-p-5">
                    <h4>
                        {product.name}
                    </h4>
                    <p className="lg:tw-text-2xl md:tw-text-xl">
                        {product.text}
                    </p>
                    <button 
                        className="tw-text-2xl tw-text-blue-500 tw-ease-in-out tw-duration-200 hover:tw-bg-blue-500 hover:tw-text-white tw-px-4 tw-py-1 tw-rounded-lg"
                    >
                        Add Item
                    </button>
                </div>
                    
            </div>
        )
    }

    function ChairCard({product}) {
        return (
            <div className="product-card tw-bg-white tw-shadow-lg">
                <div className="product-img-2 tw-flex tw-justify-center tw-items-center">
                    <img src={product.image} alt="" className="tw-h-full tw-w-auto"/>    
                </div>
                
                <div className="tw-p-5">
                    <h4>
                        {product.name}
                    </h4>
                    <p className="lg:tw-text-2xl md:tw-text-xl">
                        {product.text}
                    </p>
                    <button 
                        className="tw-text-2xl tw-text-blue-500 tw-ease-in-out tw-duration-200 hover:tw-bg-blue-500 hover:tw-text-white tw-px-4 tw-py-1 tw-rounded-lg"
                    >
                        Add Item
                    </button>
                </div>
            </div>
        )
    }



    return (
        <NavBar>
            <Head title="Booking">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row" data-aos = "fade-right" data-aos-once = {true}>
                                <div className="col-md-8 col-md-offset-2 tw-text-center tw-pt-48 tw-pb-16" >
                                    <h1>
                                        Item Selection
                                    </h1>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="tw-bg-blue-50 lg:tw-h-fit md:tw-px-20 sm:tw-px-10 tw-px-2 tw-pt-6 tw-pb-10 ">
                <div className=" tw-flex tw-justify-center sm:tw-space-x-8 tw-space-x-2 tw-items-start">
                    {products.map((product, index)=>{
                        return (
                            <button 
                                className={"lg:tw-px-10 lg:tw-py-6 md:tw-px-8 md:tw-py-4 tw-px-5 tw-py-2 sm:tw-px-6 sm:tw-py-3 sm:tw-rounded-full tw-rounded-lg lg:tw-text-3xl md:tw-text-2xl sm:tw-text-xl tw-ease-in-out tw-duration-700 tw-text-center " + (active === index ? 'tw-bg-blue-700 tw-text-white':'tw-bg-blue-100 hover:tw-bg-blue-600 hover:tw-text-white')}
                                onClick={(e)=>{
                                    e.stopPropagation();
                                    setActive(index);
                                }}
                            >
                                <img src={findImage(product.name)} alt="" className="lg:tw-h-32 md:tw-h-24 sm:tw-h-20 sm:tw-w-auto tw-invisible sm:tw-visible tw-h-0 tw-w-0"/>
                                {product.name}
                            </button>
                        )
                    })}
                </div>
                <div className="tw-flex tw-justify-center 2xl:tw-space-x-20 xl:tw-space-x-10 tw-h-full tw-py-10">
                    <div className="xl:tw-w-2/5 lg:tw-w-1/2 tw-h-full tw-py-10 xl:tw-visible tw-invisible tw-absolute xl:tw-relative">
                        <CustomizedTables/>
                        <div className="tw-flex tw-justify-center tw-mt-4">
                            <a href={route("bookingForm")}>
                                <PrimaryButton className="">
                                    Submit
                                </PrimaryButton>    
                            </a>
                        </div>
                    </div>
                    <div className=" tw-h-full tw-grid md:tw-grid-cols-2 tw-grid-cols-1 tw-py-10 tw-gap-4">
                        
                        {products[active].items.map((product, index)=>{
                            return (
                                <div className="tw-flex tw-items-center tw-justify-center" data-aos = "fade-up" data-aos-once = {true}>
                                    {products[active].name === "Chairs" || products[active].name === "Tables" ? <ChairCard product={product}/> : <ProductCard product={product}/>}
                                </div>
                                
                            )
                        })}
                        <div className=" tw-h-full tw-py-10 xl:tw-hidden lg:tw-block tw-hidden">
                            <CustomizedTables/>
                            <div className="tw-flex tw-justify-center tw-mt-4">
                                <a href={route("bookingForm")}>
                                    <PrimaryButton className="">
                                        Submit
                                    </PrimaryButton>    
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className=" tw-h-full tw-py-10 lg:tw-hidden">
                        <CustomizedTables/>
                        <div className="tw-flex tw-justify-center tw-mt-4">
                            <a href={route("bookingForm")}>
                                <PrimaryButton className="">
                                    Submit
                                </PrimaryButton>    
                            </a>
                        </div>
                    </div>
            </div>
        </NavBar>
        
    )
}