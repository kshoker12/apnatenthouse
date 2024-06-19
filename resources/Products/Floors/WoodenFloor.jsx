import { DialogContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { Component } from 'react'
import Title from '../Helper/Title';
import Action from '../Helper/Action';

class WoodenFloor extends Component {
    NAME = "Wooden Dance Floor";
    IMAGE = "floor1.jpg";
    TEXT = "A wooden dance floor offers a stylish and sturdy surface for dancing at events, enhancing weddings, parties, and celebrations with its elegance and durability.";
    sizes = [
        {name: "9ft x 9ft", sqft: 81}, 
        {name: "12ft x 12ft", sqft: 144}, 
        {name: "15ft x 15ft", sqft: 225}
    ];

    constructor(props) {
        super(props);
        this.quantity = 1;
        this.selected = 0;
        this.length = 20;
        this.width = 10;
        this.cost = 2.00;
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
    }

    getName() {
        return this.NAME + " " + this.sizes[this.selected].name;
    }

    updateTotalCost(totalCost) {
        return totalCost + this.cost * this.sizes[this.selected].sqft;
    }

    getCost() {
        return this.cost * this.sizes[this.selected].sqft;
    }

    render() {
        return (
            <>
                <Title name={this.NAME}/>
                <DialogContent>
                    <div className="tw-h-fit tw-w-full">
                        <div className="tw-flex tw-justify-center tw-items-center md:tw-h-[300px] tw-h-[250px] tw-w-full">
                            <img src={this.IMAGE} className="tw-h-3/4 tw-w-auto"/>    
                        </div>    
                        <div className="tw-flex tw-w-2/3 tw-justify-center">
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label" sx={{fontSize: 20, color: "black"}}>Size</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={this.sizes[this.selected].name}
                                    name="radio-buttons-group"
                                    onChange={(e)=>{
                                        this.selected = this.sizes.findIndex((size)=>size.name === e.target.value);
                                        this.forceUpdate();
                                    }}
                                >
                                {this.sizes.map((size, index)=>{
                                    return (
                                        <FormControlLabel value={size.name} control={<Radio size="large"/>} label={<Typography variant="p" sx = {{fontSize:14}} color="black">{size.name}</Typography>} sx={{color:"black"}}/>    
                                    )
                                })}
                        
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>    
                </DialogContent>
                <Action handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
        )
    }

}

export default WoodenFloor