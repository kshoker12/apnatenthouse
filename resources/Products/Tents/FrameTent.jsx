import InputLabel from '@/Components/InputLabel';
import { Button, DialogActions, DialogContent, FormControl, FormControlLabel, FormLabel, MenuItem, OutlinedInput, Radio, RadioGroup, Select, Typography, useTheme } from '@mui/material';
import React, { Component } from 'react'
import Title from '../Helper/Title';
import Action from '../Helper/Action';
import TentLinerActions from '../Helper/TentLinerActions';

export default class FrameTent extends Component {
    NAME = "Frame Tent";
    IMAGE = "tent4.jpg";
    TEXT = "A frame tent, supported by a rigid framework and lacking center poles, offers versatile and unobstructed shelter for events like weddings and exhibitions, accommodating various layouts and configurations.";
    LINER_IMAGE = "tentliner1.jpg";
    LINER_COST = 0.50;

    cost = 1.50;
    sizes = [
        {name: '30ft x 20ft', sqft: 600},
        {name: '30ft x 30ft', sqft: 900},
        {name: '30ft x 40ft', sqft: 1200},
        {name: '30ft x 50ft', sqft: 1500},
        {name: '30ft x 60ft', sqft: 1800},
        {name: '30ft x 70ft', sqft: 2100},
        {name: '30ft x 80ft', sqft: 2400},
        {name: '30ft x 90ft', sqft: 2700},
        {name: '30ft x 100ft', sqft: 3000},
        {name: '30ft x 120ft', sqft: 3600},
        {name: '30ft x 150ft', sqft: 4500},
        {name: '30ft x 180ft', sqft: 5400},
        {name: '30ft x 200ft', sqft: 6000},
      ];

    constructor(props) {
        super(props);
        console.log(props);
        this.quantity = 1;
        this.selected = 0;
        this.theme = props.theme;
        this.menuProps = {
            PaperProps: {
              style: {
                    maxHeight: 48 * 4.5 + 8,
                    width: 250,
                },
            },
        };
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
        this.liner = false;
    }

    getName() {
        return this.NAME + " " + this.sizes[this.selected].name;
    }

    updateTotalCost(totalCost) {
        return totalCost + this.sizes[this.selected].sqft * (this.liner ? this.LINER_COST + this.cost : this.cost);
    }

    getCost() {
        return (this.liner ? this.LINER_COST + this.cost : this.cost) * this.sizes[this.selected].sqft;
    }

    getStyles(name, personName, theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
    }

    

    render() {
        return (
            <>
                <Title name={this.NAME}/>
                <TentLinerActions tent={this} handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
            
        )
    }
}
