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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '30ft x 20ft',
  '30ft x 30ft',
  '30ft x 40ft',
  '30ft x 50ft',
  '30ft x 60ft',
  '30ft x 70ft',
  '30ft x 80ft',
  '30ft x 90ft',
  '30ft x 100ft',
  '30ft x 120ft',
  '30ft x 150ft',
  '30ft x 180ft',
  '30ft x 200ft',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelect({setSelectedSize}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value)
    setSelectedSize(event.target.value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label" sx={{fontSize:14, color:"black"}}>Size</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Size" sx={{fontSize:14, color:"black"}}/>}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              sx={{fontSize:14}}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}


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

    function ChairsMenu({quantity, setQuantity, element, error, setError}) {

        return (
            <>
                <div className="tw-flex tw-items-center tw-justify-center">
                    <TextField value = {quantity} onChange = {(e)=>{if (!isNaN(e.target.value)) {setQuantity(e.target.value); setError("")}}} id="filled-basic" label="Quantity" variant="filled" InputLabelProps = {{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}/> 
                    
                </div>
                {error.length ?
                    <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5/6 tw-text-red-500">
                        {error}
                    </div>
                    :<></>}
            </>
            
        )
    }

    function TablesMenu({quantity, setQuantity, element, error, setError}) {

        return (
            <>
                <div className="tw-flex tw-items-center tw-justify-center">
                    <TextField value = {quantity} onChange = {(e)=>{if (!isNaN(e.target.value)) {setQuantity(e.target.value); setError("")}}} id="filled-basic" label="Quantity" variant="filled" InputLabelProps = {{style: {fontSize: 14}}} inputProps={{style: {fontSize: 14}}}/> 
                    
                </div>
                {error.length ?
                    <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5/6 tw-text-red-500">
                        {error}
                    </div>
                    :<></>}
            </>
        )
    }

    function AddOnsMenu({quantity, setQuantity, element, error, setError}) {

        return (
            <div className="tw-flex tw-items-center tw-justify-center">
                <div className="tw-text-3xl tw-w-48">
                    Quantity: {quantity}    
                </div>
                <div className="">
                    <div className="tw-h-8">
                        <button 
                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                            onClick={()=>{
                                if (quantity < 1000) {
                                    setQuantity(quantity + 1)
                                }
                            }}
                        >
                            <i className="fas fa-caret-up tw-text-5xl"/>
                        </button>    
                    </div>
                    <div className="">
                        <button 
                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                            onClick={()=>{
                                if (quantity > 1) {
                                    setQuantity(quantity - 1)
                                }
                            }}
                        >
                            <i className="fas fa-caret-down tw-text-5xl"/>
                        </button>    
                    </div>
                </div>
            </div>
        )
    }

    function RadioButtonsGroup({values, setSize}) {
        return (
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 20, color: "black"}}>Size</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={values[0]}
              name="radio-buttons-group"
              onChange={(e)=>{
                setSize(e.target.value)
              }}
            >
              {values.map((value, index)=>{
                  return (
                  <FormControlLabel value={value} control={<Radio size="large"/>} label={<Typography variant="p" sx = {{fontSize:14}} color="black">{value}</Typography>} sx={{color:"black"}}/>    
                  )
              })}
      
            </RadioGroup>
          </FormControl>
        );
      }

    function WoodenFloorMenu({quantity, setQuantity, element, error, setError, setSelectedSize, selectedSize, setCost, cost}) {
        const [squareFeet, setSquareFeet] = useState(81);

        useEffect(()=>{
            if (selectedSize === "9ft x 9ft") {
                setSquareFeet(81)
            } else if (selectedSize === "12ft x 12ft") {
                setSquareFeet(144);
            } else if (selectedSize === "15ft x 15ft") {
                setSquareFeet(225)
            }
        },[selectedSize])

        useEffect(()=>{
            setCost(element.cost * squareFeet);
        },[squareFeet])

        return (
            <div className="tw-flex tw-w-2/3 tw-justify-center">
                <RadioButtonsGroup values = {element.sizes} setSize={setSelectedSize}/>
            </div>
        )
    }

    function ClickInFloorMenu({quantity, setQuantity, element, error, setError, setSelectedSize, selectedSize, setCost}) {
        const [length, setLength] = useState(8);
        const [width, setWidth] = useState(8)
        const [squareFeet, setSquareFeet] = useState(64)
        const [custom, setCustom] = useState(false)

        useEffect(()=>{
            if (selectedSize === "Custom") {
                setCustom(true);
                setSelectedSize(length + "ft x " + width + "ft (custom)")
                setSquareFeet(length * width)
            } else if (element.sizes.includes(selectedSize)) {
                setCustom(false)
                if (selectedSize === "8ft x 8ft") {
                    setSquareFeet(64);
                } else if (selectedSize === "12ft x 12ft") {
                    setSquareFeet(144);
                } else if (selectedSize === "16ft x 16ft") {
                    setSquareFeet(256)
                }
            }
        },[selectedSize])

        useEffect(()=>{
            setCost(squareFeet * element.cost)
        },[squareFeet])

        return (
            <>
                <div className="tw-flex tw-w-2/3 tw-justify-center">
                    <RadioButtonsGroup values = {element.sizes} setSize={setSelectedSize}/>
                    
                </div>
                {custom ?
                    <div className="tw-flex tw-justify-center tw-space-x-4 tw-items-center tw-w-full">
                        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4">
                            <div className="tw-text-3xl">
                                Length: {length}ft
                            </div>
                            <div className="">
                                <div className="tw-h-8">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((length + 2) * width <= 3000) {
                                                setLength(length + 2)
                                                setSelectedSize((length + 2) + "ft x " + width + "ft (custom)")
                                                setSquareFeet((length + 2) * width)
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-up tw-text-5xl"/>
                                    </button>    
                                </div>
                                <div className="">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if (length >= 10) {
                                                setLength(length - 2)
                                                setSelectedSize((length - 2) + "ft x " + width + "ft (custom)")
                                                setSquareFeet((length - 2) * width)
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-down tw-text-5xl"/>
                                    </button>    
                                </div>
                            </div>    
                        </div>
                        <div className="tw-text-3xl">x</div>
                        <div className="tw-flex tw-justify-center tw-items-center tw-space-x-4">
                            <div className="tw-text-3xl">
                                Width: {width} ft   
                            </div>
                            <div className="">
                                <div className="tw-h-8">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((width + 1) * length <= 3000) {
                                                setWidth(width + 1)
                                                setSelectedSize(length + "ft x " + (width + 1) + "ft (custom)")
                                                setSquareFeet(length * (width + 1 ))
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-up tw-text-5xl"/>
                                    </button>    
                                </div>
                                <div className="">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if (width >= 9) {
                                                setWidth(width - 1)
                                                setSelectedSize(length + "ft x " + (width - 1) + "ft (custom)")
                                                setSquareFeet(length * (width - 1))
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-down tw-text-5xl"/>
                                    </button>    
                                </div>
                            </div>    
                        </div>
                        
                    </div>
                :
                    <>
                    </>
                }
            </>
        )
    }



    function PopUpTentMenu({cost, setCost, quantity, setQuantity, element, error, setError, setSelectedSize, selectedSize}) {
        useEffect(()=>{
            if (selectedSize === "10ft x 10ft") {
                setCost(100)
            } else if (selectedSize === "10ft x 20ft") {
                setCost(150)
            }
        },[selectedSize])

        return (
            <>
                <div className="tw-flex tw-w-2/3 tw-justify-center">
                    <RadioButtonsGroup values = {element.sizes} setSize={setSelectedSize}/>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                    <div className="tw-text-3xl tw-w-48">
                        Quantity: {quantity}    
                    </div>
                    <div className="">
                        <div className="tw-h-8">
                            <button 
                                className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                onClick={()=>{
                                    if (quantity < 1000) {
                                        setQuantity(quantity + 1)
                                    }
                                }}
                            >
                                <i className="fas fa-caret-up tw-text-5xl"/>
                            </button>    
                        </div>
                        <div className="">
                            <button 
                                className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                onClick={()=>{
                                    if (quantity > 1) {
                                        setQuantity(quantity - 1)
                                    }
                                }}
                            >
                                <i className="fas fa-caret-down tw-text-5xl"/>
                            </button>    
                        </div>
                    </div>
                </div>
            </>
            
        )
    }

    function FrameTentMenu({quantity, setQuantity, element, error, setError, setSelectedSize, selectedSize, setCost, cost}) {
        const [squareFeet, setSquareFeet] = useState(81);

        useEffect(()=>{
            if (selectedSize === "30ft x 20ft") {
                setSquareFeet(600)
            } else if (selectedSize === "30ft x 30ft") {
                setSquareFeet(900);
            } else if (selectedSize === "30ft x 40ft") {
                setSquareFeet(1200)
            } else if (selectedSize === "30ft x 50ft") {
                setSquareFeet(1500)
            } else if (selectedSize === "30ft x 60ft") {
                setSquareFeet(1800);
            } else if (selectedSize === "30ft x 70ft") {
                setSquareFeet(2100)
            } else if (selectedSize === "30ft x 80ft") {
                setSquareFeet(2400)
            } else if (selectedSize === "30ft x 90ft") {
                setSquareFeet(2700);
            } else if (selectedSize === "30ft x 100ft") {
                setSquareFeet(3000)
            } else if (selectedSize === "30ft x 120ft") {
                setSquareFeet(3600)
            } else if (selectedSize === "30ft x 150ft") {
                setSquareFeet(4500);
            } else if (selectedSize === "30ft x 180ft") {
                setSquareFeet(5400)
            } else if (selectedSize === "30ft x 200ft") {
                setSquareFeet(6000)
            }
        },[selectedSize])

        useEffect(()=>{
            setCost(element.cost * squareFeet);
        },[squareFeet])

        return (
            <div className="tw-flex tw-w-full tw-justify-center">
                <MultipleSelect setSelectedSize={setSelectedSize}/>
            </div>
        )
    }

    function MarqueeTentMenu({quantity, setQuantity, element, error, setError, setSelectedSize, selectedSize, setCost, cost, setBreakdown}) {
        const [length, setLength] = useState(20);
        const [width, setWidth] = useState(10)
        const [squareFeet, setSquareFeet] = useState(200)
        const [custom, setCustom] = useState(false)

        useEffect(()=>{
            if (selectedSize === "Custom") {
                setCustom(true);
                setLength(20)
                setWidth(10)
                setSelectedSize(length + "ft x " + width + "ft (custom)")
                setSquareFeet(length * width)
            } else if (element.sizes.includes(selectedSize)) {
                setCustom(false)
                if (selectedSize === "20ft x 10ft") {
                    setSquareFeet(200);
                    setLength(20)
                    setWidth(10)
                } else if (selectedSize === "20ft x 20ft") {
                    setSquareFeet(400);
                    setLength(20)
                    setWidth(20)
                } else if (selectedSize === "40ft x 40ft") {
                    setSquareFeet(1600)
                    setLength(40);
                    setWidth(40)
                }
            }
            
            console.log(selectedSize)
        },[selectedSize])

        useEffect(()=>{
            let l = length / 10;
            let w = width / 10
            let t1 = 0;
            let t2 = 0;
            if (w % 2 === 1) {
                let x = l / 2;
                let y = (w - 1) / 2;
                t1 = x * y;
                t2 = x;
            } else if (l % 2 === 1) {
                let x = (l - 1) / 2;
                let y = w / 2;
                t1 = x * y;
                t2 = y;
            } else {
                let x = l / 2;
                let y = w / 2;
                t1 = x * y;
            }

            setCost(t1 * 290 + t2 * 150)
            setBreakdown(t2 + " x 20ft x 10ft and " + t1 + " x 20ft x 20ft")
        },[squareFeet])

        

        return (
            <>
                <div className="tw-flex tw-w-2/3 tw-justify-center">
                    <RadioButtonsGroup values = {element.sizes} setSize={setSelectedSize}/>
                    
                </div>
                {custom ?
                    <div className="tw-flex tw-justify-center tw-space-x-4 tw-items-center tw-w-full">
                        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4">
                            <div className="tw-text-3xl">
                                Length: {length}ft
                            </div>
                            <div className="">
                                <div className="tw-h-8">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((width / 10) % 2 === 0) {
                                                if (length + 10 <= 200) {
                                                    setLength(length + 10)
                                                    setSquareFeet(length * width)
                                                    setSelectedSize((length + 10) + "ft x " + width + "ft (custom)")
                                                }
                                            } else {
                                                if (length + 20 <= 200) {
                                                    setLength(length + 20)
                                                    setSquareFeet(length * width)
                                                    setSelectedSize((length + 20) + "ft x " + width + "ft (custom)")
                                                }
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-up tw-text-5xl"/>
                                    </button>    
                                </div>
                                <div className="">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((width / 10) % 2 === 0) {
                                                if (length - 10 >= 20) {
                                                    setLength(length - 10)
                                                    setSquareFeet(length * width)
                                                    setSelectedSize((length - 10) + "ft x " + width + "ft (custom)")
                                                    
                                                }
                                            } else {
                                                if (length - 20 >= 20) {
                                                    setLength(length - 20)
                                                    setSquareFeet(length * width)
                                                    setSelectedSize((length - 20) + "ft x " + width + "ft (custom)")
                                                    
                                                }
                                            }
                                        }}
                                    >
                                        <i className="fas fa-caret-down tw-text-5xl"/>
                                    </button>    
                                </div>
                            </div>    
                        </div>
                        <div className="tw-text-3xl">x</div>
                        <div className="tw-flex tw-justify-center tw-items-center tw-space-x-4">
                            <div className="tw-text-3xl">
                                Width: {width} ft   
                            </div>
                            <div className="">
                                <div className="tw-h-8">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((length/10) % 2 === 0) {
                                                if (width + 10 <= 200) {
                                                    setWidth(width + 10)
                                                    setSelectedSize(length + "ft x " + (width + 10) + "ft (custom)")
                                                    setSquareFeet(length * width)
                                                }    
                                            } else {
                                                if (width + 20 <= 200) {
                                                    setWidth(width + 20)
                                                    setSelectedSize(length + "ft x " + (width + 20) + "ft (custom)")
                                                    setSquareFeet(length * width)
                                                }  
                                            }
                                            
                                        }}
                                    >
                                        <i className="fas fa-caret-up tw-text-5xl"/>
                                    </button>    
                                </div>
                                <div className="">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if ((length / 10) % 2 === 0) {
                                                if (width - 10 >= 10) {
                                                    setWidth(width - 10)
                                                    setSelectedSize(length + "ft x " + (width - 10) + "ft (custom)")
                                                    setSquareFeet(length * width)
                                                }    
                                            } else {
                                                if (width - 20 >= 10) {
                                                    setWidth(width - 20)
                                                    setSelectedSize(length + "ft x " + (width - 20) + "ft (custom)")
                                                    setSquareFeet(length * width)
                                                }    
                                            }
                                            
                                        }}
                                    >
                                        <i className="fas fa-caret-down tw-text-5xl"/>
                                    </button>    
                                </div>
                            </div>    
                        </div>
                        
                    </div>
                :
                    <>
                    </>
                }
            </>
        )
    }

    function BookingMenu({element, setQuantity, quantity, error, setError, selectedSize, setSelectedSize, cost, setCost, setBreakdown}) {
        switch (products[active].name) {
            case "Chairs":
                return <ChairsMenu element={element} setQuantity={setQuantity} quantity={quantity} error={error} setError={setError}/>
            case "Tents":
                if (products[active].items[openIndex].name === "Pop-up Tent") {
                    return <PopUpTentMenu cost = {cost} setCost={setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
                } else if (products[active].items[openIndex].name === "Frame Tent") {
                    return <FrameTentMenu cost = {cost} setCost={setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
                } else if (products[active].items[openIndex].name === "Marquee Tent") {
                    return <MarqueeTentMenu setBreakdown = {setBreakdown} cost = {cost} setCost={setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
                }
            case "Tables":
                return <TablesMenu element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
            case "Floors":
                if (products[active].items[openIndex].name === "Wooden Dance Floor") {
                    return <WoodenFloorMenu  cost={cost} setCost={setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
                } else if (products[active].items[openIndex].name === "Click-in Dance Floor") {
                    return <ClickInFloorMenu setCost = {setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
                }
            case "Add-Ons":
                return <AddOnsMenu element = {element} setQuantity = {setQuantity} quantity = {quantity} error={error} setError={setError}/>
            default: 
                break;
        }
    }

    
    function ResponsiveDialog() {
        const [quantity, setQuantity] = useState(1);
        const [error, setError] = useState("");
        
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down(''));

        const activeProduct = openIndex > -1 ? products[active].items[openIndex]: 0;
        const [name, setName] = useState(activeProduct.name);
        const [selectedSize, setSelectedSize] = useState(activeProduct.sizes ? activeProduct.sizes[0]: "")
        const [cost, setCost] = useState(activeProduct.cost)
        const [breakdown, setBreakdown] = useState(null)

        const handleClose = () => {
            setOpenIndex(-1);
        };

        return (
            <Dialog
                fullScreen={fullScreen}
                open={openIndex > -1}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title" sx={{paddingTop: 0, paddingBottom: 0, textTransform: "capitalize"}} >
                    <div className="tw-text-black h3 tw-py-0">
                        {activeProduct.name}    
                    </div>
                
                </DialogTitle>
                <DialogContent>
                    <div className="tw-h-fit tw-w-full">
                        <div className="tw-flex tw-justify-center tw-items-center md:tw-h-[300px] tw-h-[250px] tw-w-full">
                            <img src={activeProduct.image} className="tw-h-3/4 tw-w-auto"/>    
                        </div>    
                        <BookingMenu setBreakdown = {setBreakdown} cost = {cost} setCost = {setCost} selectedSize = {selectedSize} setSelectedSize = {setSelectedSize} element={activeProduct} quantity={quantity} setQuantity={setQuantity} error={error} setError={setError}/>
                    </div>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose} size="large" style={{fontSize: 14}}>
                    Cancel
                </Button>
                <Button onClick={()=>{
                    if (!isNaN(quantity) && quantity >= 1) {
                        let dataToBePushed = {name:name + " " + selectedSize,quantity:parseInt(quantity), itemIndex: openIndex, productIndex: active, cost: cost}
                        if (breakdown) {
                            dataToBePushed["breakdown"] = breakdown
                        } else {
                            dataToBePushed["breakdown"] = false;
                        }
                        itemList.push(dataToBePushed);
                        console.log(dataToBePushed)
                        setTotalCost(totalCost + cost * quantity);handleClose()
                    } else {
                        setError("Please enter a quantity")
                    }
                }} 
                    autoFocus 
                    size="large" 
                    style={{fontSize: 14}}
                >
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>
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