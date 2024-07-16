import { Component } from "react";
import data from "../../data/data.json";
import { DialogContent, TextField } from "@mui/material";
import Title from "../Helper/Title";
import Action from "../Helper/Action";

class RedCarpet extends Component{
    NAME = "Red Carpet 3ft x 20ft";
    TEXT = "";
    IMAGE = "floor4.jpg";

    constructor(props) {
        super(props);
        this.quantity = 1;    
        this.cost = 50.00;
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
    }

    getCost() {
        return this.cost;
    }

    updateTotalCost(totalCost) {
        return totalCost + this.quantity * this.cost;
    }

    getName() {
        return this.NAME;
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
                        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-1">
                            <div className="tw-text-3xl tw-w-48">
                                Quantity: {this.quantity}    
                            </div>
                            <div className="">
                                <div style={{height: 20}}>
                                    <button 
                                        className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200"
                                        onClick={()=>{
                                            if (this.quantity < 1000) {
                                                this.quantity += 1;
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
                                            if (this.quantity > 1) {
                                                this.quantity -= 1;
                                                this.forceUpdate();
                                            }
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


export default RedCarpet