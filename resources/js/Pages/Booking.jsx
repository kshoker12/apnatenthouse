import NavBar from "@/Layouts/NavBar";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AppLogo from "../Components/applogo.png"
import JsonData from '../../data/data.json';
import { useState } from "react";
import tentImg from "../Components/tent.png";
import chairsImg from "../Components/chair.png";
import floorsImg from "../Components/floors.png";
import addOnImg from "../Components/bars.png";
import tablesImg from "../Components/tables.png";
import PrimaryButton from "@/Components/PrimaryButton";   
import React from "react";
import { styled, Table, TableBody, TableHead, TableRow, TableContainer, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, TextField, Alert, Typography } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useTheme } from '@mui/material/styles';
import { useEffect } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PopUpTent from "../../Products/Tents/PopUpTent.jsx";
import { useRef } from "react";
import { forwardRef } from "react";
import FrameTent from "../../Products/Tents/FrameTent";
import MarqueeTent from "../../Products/Tents/MarqueeTent";
import Chair from "../../Products/Chairs/Chairs";
import Tables from "../../Products/Tables/Tables";
import AddOns from "../../Products/AddOns/AddOns";
import Turf from "../../Products/Floors/Turf";
import WoodenFloor from "../../Products/Floors/WoodenFloor";
import ClickIn from "../../Products/Floors/ClickIn";
import RedCarpet from "../../Products/Floors/RedCarpet";
import TablesWithCloth from "../../Products/Tables/TablesWithCloth";
import Foam from "../..//Products/Floors/Foam";

export default function Booking({data}) {
    const [active, setActive] = useState(0)
    const products = [JsonData.products[4],JsonData.products[0], JsonData.products[1], JsonData.products[2], JsonData.products[3]]
    const [openIndex, setOpenIndex] = useState(-1);
    const [totalCost, setTotalCost] = useState(data ? data.totalCost : 0)
    const [itemList, setItemList] = useState(data ? data.items : [])

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

    function findProduct(theme, handleClick, handleClose) {
        switch (products[active].name) {
            case "Tents":
                if (products[active].items[openIndex].name === "Pop-up Tent") {
                    return new PopUpTent({handleClick, handleClose});
                } else if (products[active].items[openIndex].name === "Frame Tent") {
                    return new FrameTent({theme: theme, handleClick, handleClose});
                } else if (products[active].items[openIndex].name === "Marquee Tent") {
                    return new MarqueeTent({handleClick, handleClose});
                }
            case "Chairs":
                return new Chair({name: products[active].items[openIndex].name, handleClick, handleClose});
            case "Tables":
                if (products[active].items[openIndex].name === "Round Table" || products[active].items[openIndex].name === "Rectangle Table") {
                    return new TablesWithCloth({name: products[active].items[openIndex].name, handleClick, handleClose});
                } else {
                    return new Tables({name: products[active].items[openIndex].name, handleClick, handleClose});    
                }
            case "Add-Ons":
                return new AddOns({name: products[active].items[openIndex].name, handleClick, handleClose});
            case "Floors":
                if (products[active].items[openIndex].name === "Turf Flooring 12ft x 20ft") {
                    return new Turf({handleClick, handleClose});
                } else if (products[active].items[openIndex].name === "Wooden Dance Floor") {
                    return new WoodenFloor({handleClick, handleClose});
                } else if (products[active].items[openIndex].name === "Click-in Dance Floor") {
                    return new ClickIn({handleClick, handleClose});
                } else if (products[active].items[openIndex].name === "Red Carpet 3ft x 20ft") {
                    return new RedCarpet({handleClick, handleClose});
                } else if (products[active].items[openIndex].name === 'Foam Padding 6ft x 6ft') {
                    return new Foam({handleClick, handleClose});
                }
        }
    }

    function FindComponent({productRef, theme, handleClick, handleClose}) {

        switch (products[active].name) {
            case "Tents":
                if (products[active].items[openIndex].name === "Pop-up Tent") {
                    return <PopUpTent ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>;
                } else if (products[active].items[openIndex].name === "Frame Tent") {
                    return <FrameTent ref={productRef} theme = {theme} handleClick = {handleClick} handleClose = {handleClose}/>;
                } else if (products[active].items[openIndex].name === "Marquee Tent") {
                    return <MarqueeTent ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
                }
            case "Chairs":
                return <Chair name = {products[active].items[openIndex].name} ref = {productRef} handleClick = {handleClick} handleClose = {handleClose}/>
            case "Tables":
                if (products[active].items[openIndex].name === "Round Table" || products[active].items[openIndex].name === "Rectangle Table") {
                    return <TablesWithCloth name = {products[active].items[openIndex].name} ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
                } else {
                    return <Tables name = {products[active].items[openIndex].name} ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>    
                }
            case "Add-Ons":
                return <AddOns name = {products[active].items[openIndex].name} ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
            case "Floors":
                if (products[active].items[openIndex].name === "Turf Flooring 12ft x 20ft") {
                    return <Turf ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>;
                } else if (products[active].items[openIndex].name === "Wooden Dance Floor") {
                    return <WoodenFloor ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>;
                } else if (products[active].items[openIndex].name === "Click-in Dance Floor") {
                    return <ClickIn ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
                } else if (products[active].items[openIndex].name === "Red Carpet 3ft x 20ft") {
                    return <RedCarpet ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
                } else if (products[active].items[openIndex].name === 'Foam Padding 6ft x 6ft') {
                    return <Foam ref={productRef} handleClick = {handleClick} handleClose = {handleClose}/>
                }
            default:
                break;
        }
    }

    
    function ResponsiveDialog() {
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down(''));
        const productRef = useRef();
        const [update, setUpdate] = useState(0);

        useEffect(()=>{
            if (openIndex !== -1) {
                productRef.current = findProduct(theme, handleClick, handleClose);    
                setUpdate(update + 1);
            }
        },[openIndex])
 
        const handleClose = () => {
            setOpenIndex(-1);
        };

        const handleClick = (event) => {
            event.stopPropagation();
            if (productRef.current) {
                let dataToBePushed = {
                    name: productRef.current.getName(),
                    quantity: productRef.current.quantity,
                    itemIndex: openIndex,
                    productIndex: active,
                    breakdown: productRef.current.breakdown ? productRef.current.breakdown : false,
                    cost: productRef.current.getCost()
                }
                itemList.push(dataToBePushed);
                setTotalCost(productRef.current.updateTotalCost(totalCost))  
                handleClose();
            }
        }

        return (
            <>
                <Dialog
                    fullScreen={fullScreen}
                    open={openIndex > -1}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <FindComponent productRef={productRef} theme={theme} handleClick = {handleClick} handleClose = {handleClose}/>   
                </Dialog>
            </>
        );
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 14,
        width:'70%'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        width:'70%'
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


     function CustomizedTables() {
    return (
        <><TableContainer component={Paper} sx={{minHeight: 100, maxHeight: 700}} id = "inner-scroll">
            
        <Table stickyHeader>
            
            <TableHead>
            <TableRow>
                <StyledTableCell>Item</StyledTableCell>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {itemList.length > 0 ? itemList.map((row, index) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <div className="tw-flex tw-items-center">
                            {row.quantity}
                            <div className="tw-flex-1 tw-space-y-2 2xl:tw-ml-0 xl:tw-ml-1">
                                <div className="tw-h-4">
                                    <button onClick={()=>{
                                        let itemsClone = JSON.parse(JSON.stringify(itemList));
                                        itemsClone[index].quantity += 1;
                                        setItemList(itemsClone)
                                        setTotalCost(totalCost + row.cost)
                                    }}><i className="fas fa-caret-up 2xl:tw-text-5xl tw-text-4xl tw-ease-in-out tw-duration-200 hover:tw-text-blue-700 "/></button>   
                                </div>
                                <div className="">
                                    <button onClick={()=>{
                                        if (row.quantity > 1) {
                                            let itemsClone = JSON.parse(JSON.stringify(itemList));
                                            itemsClone[index].quantity -= 1;
                                            setItemList(itemsClone)
                                            setTotalCost(totalCost - row.cost)    
                                        }
                                        
                                    }}><i className="fas fa-caret-down 2xl:tw-text-5xl tw-text-4xl tw-ease-in-out tw-duration-200 hover:tw-text-blue-700"/></button>   
                                </div>
                            </div>
                        </div>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                        <button onClick={()=>{
                            setTotalCost(totalCost - row.cost * row.quantity)
                            let itemsClone = JSON.parse(JSON.stringify(itemList));
                            itemsClone.splice(index, 1);
                            setItemList(itemsClone)
                            
                        }}>
                            <i className="fas fa-trash tw-text-red-600 tw-text-3xl tw-ease-in-out tw-duration-200 hover:tw-opacity-60"/>
                        </button>
                    </StyledTableCell>
                </StyledTableRow>
            )):<></>}
            </TableBody>
        </Table>
        </TableContainer>
            <div className="tw-bg-white tw-py-5 tw-border-gray-300" style={{borderTopWidth:1}}>
                <div className="tw-text-2xl tw-text-center tw-text-black">
                    Selected Items
                </div>
            </div>
        </>
        
    );
    }

    function ProductCard({product, index}) {
        return (
            <div className="product-card tw-bg-white tw-shadow-lg">
                <img src={product.image} alt="" className="product-img"/>
                <div className="tw-p-5">
                    <h4>
                        {product.name}
                    </h4>
                    <p className="lg:tw-text-2xl md:tw-text-xl tw-text-[12px]">
                        {product.text}
                    </p>
                    <button 
                        className="tw-text-2xl tw-text-blue-500 tw-ease-in-out tw-duration-200 hover:tw-bg-blue-500 hover:tw-text-white tw-px-4 tw-py-1 tw-rounded-lg"
                        onClick={(e)=>{
                            setOpenIndex(index)
                        }}
                    >
                        Add Item
                    </button>
                </div>
                    
            </div>
        )
    }

    function ChairCard({product, index}) {
        return (
            <div className="product-card tw-bg-white tw-shadow-lg">
                <div className="product-img-2 tw-flex tw-justify-center tw-items-center">
                    <img src={product.image} alt="" className="tw-h-full tw-w-auto"/>    
                </div>
                
                <div className="tw-p-5">
                    <h4>
                        {product.name}
                    </h4>
                    <p className="lg:tw-text-2xl md:tw-text-xl tw-text-[12px]">
                        {product.text}
                    </p>
                    <button 
                        className="tw-text-2xl tw-text-blue-500 tw-ease-in-out tw-duration-200 hover:tw-bg-blue-500 hover:tw-text-white tw-px-4 tw-py-1 tw-rounded-lg"
                        onClick={()=>{
                            setOpenIndex(index)
                        }}
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
            <a className='tw-bottom-0 tw-right-0 tw-p-4 tw-fixed tw-z-50' href="#header">
                <button className='tw-rounded-full tw-bg-black tw-w-12 tw-h-12 hover:tw-bg-blue-500 tw-ease-in-out tw-duration-300'>
                    <i className="fas fa-arrow-up  tw-text-2xl tw-text-white"/>
                </button>
            </a>
            <ResponsiveDialog/>
            <div className="tw-bg-blue-50 lg:tw-h-fit md:tw-px-20 sm:tw-px-10 tw-px-2 tw-pt-6 tw-pb-10 ">
                
                <div className=" tw-flex tw-justify-center sm:tw-space-x-8 tw-space-x-2 tw-items-start">
                    {products.map((product, index)=>{
                        return (
                            <button 
                                className={"lg:tw-px-10 lg:tw-py-6 md:tw-px-8 md:tw-py-4 tw-px-5 tw-py-2 sm:tw-px-6 sm:tw-py-3 tw-rounded-full lg:tw-text-3xl md:tw-text-2xl sm:tw-text-xl tw-text-base tw-ease-in-out tw-duration-700 tw-text-center " + (active === index ? 'tw-bg-blue-700 tw-text-white':'tw-bg-blue-100 hover:tw-bg-blue-600 hover:tw-text-white')}
                                onClick={(e)=>{
                                    e.stopPropagation();
                                    setActive(index);
                                }}
                            >
                                <img src={findImage(product.name)} alt="" className="lg:tw-h-32 md:tw-h-24 sm:tw-h-20 sm:tw-w-auto  tw-h-16 tw-w-16 "/>
                                {product.name}
                            </button>
                        )
                    })}
                </div>
                <div className="tw-flex tw-justify-center 2xl:tw-space-x-20 xl:tw-space-x-10 tw-h-full tw-py-10">
                    <div className="xl:tw-w-2/5 lg:tw-w-1/2 tw-h-full tw-py-10 xl:tw-visible tw-invisible tw-absolute xl:tw-relative">
                        <CustomizedTables/>
                        <div className="tw-flex tw-justify-center tw-mt-4">
                            <a onClick = {()=>{
                                    try {
                                        router.post(route("bookingSubmit"), {data: {items: itemList, totalCost: totalCost}})
                                    } catch (error) {
                                        console.error(error)
                                    }
                                }}>
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
                                    {products[active].name === "Chairs" || products[active].name === "Tables" ? <ChairCard product={product} index={index}/> : <ProductCard product={product} index={index}/>}
                                </div>
                                
                            )
                        })}
                        <div className=" tw-h-full tw-py-10 xl:tw-hidden lg:tw-block tw-hidden">
                            <CustomizedTables/>
                            <div className="tw-flex tw-justify-center tw-mt-4">
                                <a onClick = {()=>{
                                    try {
                                        router.post(route("bookingSubmit"), {data: {items: itemList, totalCost: totalCost}})
                                    } catch (error) {
                                        console.error(error)
                                    }
                                }}>
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
                            <a onClick = {()=>{
                                    try {
                                        router.post(route("bookingSubmit"),{data: {items: itemList, totalCost: totalCost}})
                                    } catch (error) {
                                        console.error(error)
                                    }
                                }}>
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