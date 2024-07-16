import { Component } from "react";
import data from "../../data/data.json";
import { DialogContent, DialogTitle, TextField } from "@mui/material";
import Title from "../Helper/Title";
import Action from "../Helper/Action";

class Tables extends Component{

    constructor(props) {
        super(props);
        this.quantity = 1;
        let table = data.products[1].items.find((table)=>table.name === props.name);
        this.IMAGE = table.image;
        this.cost = table.cost;
        this.TEXT = table.text;
        this.NAME = table.name;
        this.error = "";
        this.handleClick = props.handleClick;
        this.handleClose = props.handleClose;
    }

    getCost() {
        return this.cost;
    }

    updateTotalCost(totalCost) {
        return totalCost + (this.quantity === "" ? 1 : this.quantity) * this.cost;
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
                            <img src={this.IMAGE} className="tw-object-cover tw-w-[300px] tw-h-[250px]"/>    
                        </div>    
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <TextField 
                                value = {this.quantity} 
                                onChange = {(e)=>{
                                    if (!isNaN(parseInt(e.target.value))) {
                                        this.quantity = parseInt(e.target.value); 
                                        this.error = ""
                                    } else {
                                        this.quantity = ""
                                        this.error = "Please Enter a Quantity"
                                    }
                                    this.forceUpdate();
                                }}
                                id="filled-basic" 
                                label="Quantity" 
                                variant="filled" 
                                InputLabelProps = {{style: {fontSize: 14}}} 
                                inputProps={{style: {fontSize: 14}}}
                            /> 
                        </div>
                        {this.error.length ?
                            <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-w-5/6 tw-text-red-500">
                                {this.error}
                            </div>
                        :<></>}
                    </div>    
                </DialogContent>
                <Action handleClick={this.handleClick} handleClose={this.handleClose}/>
            </>
            
        )
    }
}


export default Tables