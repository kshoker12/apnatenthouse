import { DialogContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { Component } from 'react'
import Title from '../Helper/Title';
import Action from '../Helper/Action';
import MarqueeTentActions from '../Helper/MarqueeTentActions';

export default class MarqueeTent extends Component {
    NAME = "Marquee Tent";
    IMAGE = "marqueetent.jpg";
    TEXT = "A marquee tent, renowned for its elegance and versatility, offers grand and spacious shelter, ensuring unforgettable experiences for weddings, extravagant parties, and prestigious corporate functions.";

    cost = 10;
    sizes = ["10ft x 20ft", "15ft x 15ft", "20ft x 20ft", "Custom"];

    MAX_QUANTITY = 1000;
    MIN_QUANTITY = 1;
    LINER_IMAGE = "tentliner2.jpg";
    LINER_COST = 2.00
    LINER_DESCRIPTION = 'Elevate your outdoor event with stylish tent drapes in various colors, providing privacy and weather protection. Perfect for weddings, parties, and corporate events, ensuring a flawless setup and memorable atmosphere.'

    constructor(props) {
        super(props);
        this.quantity = 1;
        this.selected = 0;
        this.length = 20;
        this.width = 10;
        this.calculateBreakdown();
        this.handleClose = props.handleClose;
        this.handleClick = props.handleClick;
        this.liner = false;
    }

    updateDimensions () {
        switch (this.sizes[this.selected]) {
            case "Custom":
                this.length = 20;
                this.width = 10;
                break;
            case "20ft x 10ft":
                this.length = 20;
                this.width = 10;
                break;
            case "20ft x 20ft":
                this.length = 20;
                this.width = 20;
                break;
            case "15ft x 15ft":
                this.width = 15;
                this.length = 15;
                break;
            default: 
                break;
        }
    }

    calculateBreakdown() {
        if (this.length === 15 && this.width === 15) {
            this.cost = 275;
            this.breakdown = `1 x 15ft x 15ft`;
        } else {
            let l = this.length / 10;
            let w = this.width / 10
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

            this.cost = t1 * 290 + t2 * 150;
            this.breakdown = `${t2} x 20ft x 10ft and ${t1} x 20ft x 20ft`;
        }
        
    }

    getName() {
        if (this.sizes[this.selected] === "Custom") {
            return `${this.NAME} ${this.width}ft x ${this.length}ft (Custom)`;
        } else {
            return this.NAME + " " + this.sizes[this.selected];    
        }
    }

    updateTotalCost(totalCost) {
        return totalCost + this.cost + (this.liner ? this.length * this.width * this.LINER_COST : 0);
    }

    getCost() {
        return this.cost + (this.liner ? this.length * this.width * this.LINER_COST : 0);
    }

    render() {
        return (
            <>
                <Title name={this.NAME}/>
                <MarqueeTentActions tent={this} handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
            
        )
    }
}
