import { DialogContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { Component } from 'react'
import Title from '../Helper/Title';
import Action from '../Helper/Action';

export default class PopUpTent extends Component {
    NAME = "Pop-up Tent";
    IMAGE = "tent1.jpg";
    TEXT = "A pop-up tent provides instant shelter with easy setup, ideal for outdoor events, featuring ventilation and waterproofing for convenience and comfort.";

    cost = [100.00, 150.00];
    sizes = ["10ft x 10ft", "10ft x 20ft"]

    MAX_QUANTITY = 1000;
    MIN_QUANTITY = 1;

    constructor(props) {
        super(props);
        this.quantity = 1;
        this.selected = 0;
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
    }

    decrementQuantity () {
        if (this.MIN_QUANTITY < this.quantity) this.quantity -= 1; this.forceUpdate();
    }

    incrementQuantity () {
        if (this.MAX_QUANTITY > this.quantity) this.quantity += 1; this.forceUpdate();
    }

    getName() {
        return this.NAME + " " + this.sizes[this.selected];
    }

    updateTotalCost(totalCost) {
        return totalCost + this.quantity * this.cost[this.selected];
    }

    getCost() {
        return this.cost[this.selected];
    }

    render() {
        return (
            <>
                <Title name={this.NAME}/>
                <DialogContent>
                    <div className="tw-h-fit tw-w-full">
                        <div className="tw-flex tw-justify-center tw-items-center md:tw-h-[300px] tw-h-[250px] tw-w-full">
                            <img src={this.IMAGE} style={{height: '75%', width: 'auto'}}/>    
                        </div>    
                        <div className="tw-flex tw-w-2/3 tw-justify-center">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 20, color: "black"}}>Size</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={this.sizes[this.selected]}
                                    name="radio-buttons-group"
                                    onChange={(e)=>{
                                        this.selected = this.sizes.indexOf(e.target.value);
                                        this.forceUpdate();
                                    }}
                                >
                                {this.sizes.map((value, index)=>{
                                    return (
                                        <FormControlLabel value={value} control={<Radio size="large"/>} label={<Typography variant="p" sx = {{fontSize:14}} color="black">{value}</Typography>} sx={{color:"black"}}/>    
                                    )
                                })}
                        
                                </RadioGroup>
                            </FormControl>   
                        </div>
                        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-1">
                            <div className="tw-text-3xl tw-w-48">
                                Quantity: {this.quantity}    
                            </div>
                            <div>
                                <div className="" style={{height: '20px'}}>
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            this.incrementQuantity();
                                        }}
                                    >
                                        <i className="fas fa-caret-up tw-text-5xl"/>
                                    </button>    
                                </div>
                                <div className="">
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            this.decrementQuantity();
                                        }}
                                    >
                                        <i className="fas fa-caret-down tw-text-5xl"/>
                                    </button>    
                                </div>
                            </div>
                        </div>
                    </div>    
                </DialogContent>
                <Action handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
            
        )
    }
}
