import { Button, Checkbox, DialogActions, DialogContent, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react'
import { useState } from 'react'

const TentLinerActions = ({tent, handleClick, handleClose}) => {
    const [step, setStep] = useState(0);

    return (
        <>
            <DialogContent>
                <div className="tw-h-fit tw-w-full">
                    <div className="tw-flex tw-justify-center tw-items-center md:tw-h-[300px] tw-h-[250px] tw-w-full">
                        <img src={step === 0 ? tent.IMAGE : tent.LINER_IMAGE} className="tw-h-3/4 tw-w-[300px] tw-object-cover"/>    
                    </div>    
                    <div className="tw-flex tw-w-full tw-justify-center">
                        {step === 1 ? (
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
                        ) : (
                            <div>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <InputLabel id="demo-multiple-name-label" sx={{fontSize:14, color:"black"}}>Size</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        value={tent.sizes[tent.selected].name}
                                        onChange={(e)=>{
                                            tent.selected = tent.sizes.findIndex((size)=>size.name === e.target.value);
                                            tent.forceUpdate();
                                        }}
                                        input={<OutlinedInput label="Size" sx={{fontSize:14, color:"black"}}/>}
                                        MenuProps={tent.menuProps}
                                    >
                                    {tent.sizes.map((size) => (
                                        <MenuItem
                                            key={size.name}
                                            value={size.name}
                                            sx={{fontSize:14}}
                                            style={tent.getStyles(size.name, tent.sizes[tent.selected].name, tent.theme)}
                                        >
                                            {size.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>   
                        )}
                        
                    </div>
                </div>    
            </DialogContent>
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

export default TentLinerActions