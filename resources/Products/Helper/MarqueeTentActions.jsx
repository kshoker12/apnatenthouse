import { Button, Checkbox, DialogActions, DialogContent, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Typography } from '@mui/material';
import React from 'react'
import { useState } from 'react'

const MarqueeTentActions = ({tent, handleClick, handleClose}) => {
    const [step, setStep] = useState(0);

    return (
        <>
            {step === 0 ? (<DialogContent>
                <div className="tw-h-fit tw-w-full">
                    <div className="tw-flex tw-justify-center tw-items-center tw-w-full">
                        <img src={tent.IMAGE} style={{height: '250px', width: '100%'}}/>    
                    </div>    
                    <div className="tw-flex tw-w-2/3 tw-justify-center">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 20, color: "black"}}>Size</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={tent.sizes[tent.selected]}
                                name="radio-buttons-group"
                                onChange={(e)=>{
                                    tent.selected = tent.sizes.indexOf(e.target.value);
                                    tent.updateDimensions();
                                    tent.calculateBreakdown();
                                    tent.forceUpdate();
                                }}
                            >
                            {tent.sizes.map((value, index)=>{
                                return (
                                    <FormControlLabel value={value} control={<Radio size="large"/>} label={<Typography variant="p" sx = {{fontSize:14}} color="black">{value}</Typography>} sx={{color:"black"}}/>    
                                )
                            })}
                    
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {tent.sizes[tent.selected] === "Custom" ?
                        <div className="tw-flex tw-justify-center tw-space-x-4 tw-items-center tw-w-full">
                            <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4">
                                <div className="tw-text-3xl">
                                    Length: {tent.length}ft
                                </div>
                                <div className="">
                                    <div style={{height: 20}}>
                                        <button 
                                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                            onClick={()=>{
                                                if ((tent.width / 10) % 2 === 0) {
                                                    if (length + 10 <= 200) {
                                                        tent.length += 10;
                                                    }
                                                } else {
                                                    if (tent.length + 20 <= 200) {
                                                        tent.length += 20;
                                                    }
                                                }
                                                tent.calculateBreakdown();
                                                tent.forceUpdate();
                                            }}
                                        >
                                            <i className="fas fa-caret-up tw-text-5xl"/>
                                        </button>    
                                    </div>
                                    <div className="">
                                        <button 
                                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                            onClick={()=>{
                                                if ((tent.width / 10) % 2 === 0) {
                                                    if (tent.length - 10 >= 20) {
                                                        tent.length -= 10;
                                                    }
                                                } else {
                                                    if (tent.length - 20 >= 20) {
                                                        tent.length -= 20;
                                                    }
                                                }
                                                tent.calculateBreakdown();
                                                tent.forceUpdate();
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
                                    Width: {tent.width} ft   
                                </div>
                                <div className="">
                                    <div style={{height: 20}}>
                                        <button 
                                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                            onClick={()=>{
                                                if ((tent.length/10) % 2 === 0) {
                                                    if (tent.width + 10 <= 200) {
                                                        tent.width += 10;
                                                    }    
                                                } else {
                                                    if (tent.width + 20 <= 200) {
                                                        tent.width += 20;
                                                    }  
                                                }
                                                tent.calculateBreakdown();
                                                tent.forceUpdate();
                                                
                                            }}
                                        >
                                            <i className="fas fa-caret-up tw-text-5xl"/>
                                        </button>    
                                    </div>
                                    <div className="">
                                        <button 
                                            className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                            onClick={()=>{
                                                if ((tent.length / 10) % 2 === 0) {
                                                    if (tent.width - 10 >= 10) {
                                                        tent.width -= 10;
                                                    }    
                                                } else {
                                                    if (tent.width - 20 >= 10) {
                                                        tent.width -= 20;
                                                    }    
                                                }
                                                tent.calculateBreakdown();
                                                tent.forceUpdate();
                                                
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
                </div>    
            </DialogContent>)
            : (
                <DialogContent>
                    <div className="tw-h-fit tw-w-full">
                        <div className="tw-flex tw-justify-center tw-items-center md:tw-h-[300px] tw-h-[250px] tw-w-full">
                            <img src={tent.LINER_IMAGE} style={{height: '250px', width: '100%'}}/>    
                        </div>    
                        <div className="">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked = {tent.liner}
                                            onClick={()=>{
                                                tent.liner = !tent.liner;
                                                tent.forceUpdate();
                                            }}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />    
                                    }
                                    label = "Include Tent Liner"
                                    sx={{
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: 20, // Change this value to the desired font size
                                        }
                                    }}
                                />
                            </FormGroup>
                            <p>{tent.LINER_DESCRIPTION}</p>
                        </div>
                    </div>
                </DialogContent>
            )}
            <DialogActions>
                <Button 
                    autoFocus 
                    onClick={()=>{
                        if (step === 0) {
                            handleClose();
                        } else {
                            setStep(0);
                        }
                    }} 
                    size="large" 
                    style={{fontSize: 14}}
                >
                    {step === 0 ? "Cancel" : "Back"}
                </Button>
                <Button 
                    onClick={(e)=>{
                        if (step === 0) {
                            setStep(1);
                        } else {
                            handleClick(e);
                        }
                    }} 
                    autoFocus 
                    size="large" 
                    style={{fontSize: 14}}
                >
                    {step === 0 ? "Next": "Confirm"}
                </Button>
            </DialogActions>
        </>
        
    )
}

export default MarqueeTentActions