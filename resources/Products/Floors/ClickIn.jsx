import { DialogContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { Component } from 'react'
import Title from '../Helper/Title';
import Action from '../Helper/Action';

class ClickIn extends Component {
    NAME = "Click-in Dance Floor";
    IMAGE = "floor2.jpg";
    TEXT = "A click-in dance floor is a portable and easy-to-assemble flooring solution for events, with interlocking panels that require no tools or adhesives, providing a stable surface for dancing at weddings, parties, and gatherings.";
    sizes = [
        "8ft x 8ft", 
        "12ft x 12ft", 
        "16ft x 16ft", 
        "Custom"
    ]

    constructor(props) {
        super(props);
        this.quantity = 1;
        this.selected = 0;
        this.length = 8;
        this.width = 8;
        this.cost = 2.00;
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
    }

    getName() {
        if (this.sizes[this.selected] === "Custom") {
            return `${this.NAME} ${this.length}ft x ${this.width}ft (Custom)`
        } else {
            return `${this.NAME} ${this.sizes[this.selected]}`;    
        }
    }

    updateDimensions () {
        switch (this.sizes[this.selected]) {
            case "Custom":
                this.length = 8;
                this.width = 8;
                break;
            case "8ft x 8ft":
                this.length = 8;
                this.width = 8;
                break;
            case "12ft x 12ft":
                this.length = 12;
                this.width = 12;
                break;
            case "16ft x 16ft":
                this.width = 16;
                this.length = 16;
                break;
            default: 
                break;
        }
    }

    updateTotalCost(totalCost) {
        return totalCost + this.cost * this.length * this.width;
    }

    getCost() {
        return this.cost * this.length * this.width;
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
                                        this.updateDimensions();
                                        this.forceUpdate();
                                    }}
                                >
                                {this.sizes.map((size, index)=>{
                                    return (
                                        <FormControlLabel value={size} control={<Radio size="large"/>} label={<Typography variant="p" sx = {{fontSize:14}} color="black">{size}</Typography>} sx={{color:"black"}}/>    
                                    )
                                })}
                        
                                </RadioGroup>
                            </FormControl>
                        </div>
                        {this.sizes[this.selected] === "Custom" && 
                            (<div className="tw-flex tw-justify-center tw-space-x-4 tw-items-center tw-w-full">
                                <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4">
                                    <div className="tw-text-3xl">
                                        Length: {this.length}ft
                                    </div>
                                    <div className="">
                                        <div style={{height: 20}}>
                                            <button 
                                                className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                                onClick={()=>{
                                                    if ((this.length + 2) * this.width <= 3000) {
                                                        this.length += 2;
                                                        this.forceUpdate();
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
                                                    if (this.length >= 10) {
                                                        this.length -= 2;
                                                        this.forceUpdate();
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
                                        Width: {this.width} ft   
                                    </div>
                                    <div className="">
                                        <div style={{height: 20}}>
                                            <button 
                                                className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                                onClick={()=>{
                                                    if ((this.width + 1) * this.length <= 3000) {
                                                        this.width += 1;
                                                        this.forceUpdate();
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
                                                    if (this.width >= 9) {
                                                        this.width -= 1;
                                                        this.forceUpdate();
                                                    }
                                                }}
                                            >
                                                <i className="fas fa-caret-down tw-text-5xl"/>
                                            </button>    
                                        </div>
                                    </div>    
                                </div>
                                
                            </div>)}
                    </div>    
                </DialogContent>
                <Action handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
            
            
        )
    }

}

export default ClickIn