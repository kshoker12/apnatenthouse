import React from "react";
import {  Typography } from "@material-tailwind/react";
import { Rating, Avatar } from "@mui/material";

export const AboutUs = ({props, reviews}) => {
    console.log(props);
    let total = 0;
    reviews.map((review)=>{
        total += review.rating
    })

    total = total / reviews.length;

    return (
        <div id="about" data-aos = "fade-up" data-aos-once = {true}>
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-md-6">
                        <div className="tw-w-11/12 tw-mt-10" data-aos = "flip-left" data-aos-once = {true}>
                            <div className="tw-flex tw-justify-between tw-items-center ">
                                <div className="tw-text-gray-700 tw-text-4xl">Apna Tent House and Party Rentals</div>
                                <a href="https://www.google.com/search?q=apna+tent+house&sca_esv=1ea7dde12f243e7b&source=hp&ei=VUjYZYPdF-Lb0PEP_KG72A8&iflsig=ANes7DEAAAAAZdhWZdKUyXMzyXJj8LufebyyPajJF8io&ved=0ahUKEwjD2-Ot98CEAxXiLTQIHfzQDvsQ4dUDCA8&uact=5&oq=apna+tent+house&gs_lp=Egdnd3Mtd2l6GgIYAiIPYXBuYSB0ZW50IGhvdXNlMhEQLhivARjHARjJAxiABBiOBTIFEAAYgAQyBRAAGIAEMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yAhAmSM4XUABYjBZwAngAkAEAmAFyoAHVC6oBBDEyLjW4AQPIAQD4AQHCAhEQLhiDARjHARixAxjRAxiABMICERAuGIAEGLEDGIMBGMcBGNEDwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjHARjRA8ICDhAuGIAEGIoFGLEDGIMBwgIOEAAYgAQYigUYsQMYgwHCAhEQLhiABBiKBRixAxiDARjUAsICCxAuGIAEGMcBGNEDwgIIEAAYgAQYsQPCAhcQLhiABBixAxjlBBiLAxigAxioAxjTA8ICDhAuGIAEGMcBGK8BGJgFwgIQEAAYgAQYChixAxiDARixA8ICExAuGIAEGAoYsQMYxwEYrwEYjgXCAgUQLhiABMICBxAAGIAEGArCAhEQLhivARjHARixAxiABBiOBcICDhAuGIAEGMcBGK8BGI4FwgINEAAYgAQYChixAxiDAcICCxAuGK8BGMcBGIAEwgIOEC4YrwEYxwEYgAQYjgXCAgsQLhiABBjHARivAcICERAuGIAEGOUEGIsDGKADGKgD&sclient=gws-wiz#lrd=0x5485d9635f121079:0xa562f5425e00eb8f,1,,,," target="_blank" className="tw-flex tw-items-center tw-space-x-3 tw-bg-blue-500 tw-px-2 tw-py-1 tw-text-white tw-ease-in-out tw-duration-150">
                                    <i className="fa fa-pencil tw-text-lg"/>
                                    <span>Write a review</span>
                                </a>
                            </div>
                            <div className="tw-flex tw-justify-start tw-items-center tw-text-md tw-text-gray-600">
                                7809 122 St. Surrey, BC
                            </div>
                            <div className="tw-flex tw-items-center tw-gap-2 tw-font-bold tw-text-blue-gray-500">
                                <label htmlFor="" className="tw-text-5xl tw-font-normal">{total.toFixed(1)}</label>
                                <div className="mb-1">
                                    <Rating value={5} readOnly precision={0.5} style={{fontSize: "30px"}}/>    
                                </div>
                                <Typography color="blue-gray" className="tw-font-medium tw-text-blue-gray-500">
                                    {reviews.length} reviews
                                </Typography>
                            </div>
                            <div className="reviews tw-h-96 tw-overflow-y-scroll tw-w-full tw-px-5 tw-border-t-2 border-gray-600">
                                {reviews.map((review, index)=>{
                                    return (
                                            <div className="tw-w-full tw-border-b-2  tw-p-2">
                                                <div className="tw-flex tw-items-start tw-justify-start tw-space-x-1">
                                                    <a href={review.userlink} target="_blank">
                                                        <Avatar src={review.userthumbnail} alt="" sx={{width: "55px", height: "55px"}}/>
                                                    </a>
                                                    <div className="tw-p-2">
                                                        <div className="tw-font-bold tw-text-xl">
                                                            {review.username}
                                                        </div>
                                                        <div className="tw-text-md">
                                                            {review.userreviews > 0 ? review.userreviews + " reviews": ""}
                                                        </div>
                                                        <div className="tw-flex tw-py-1 tw-items-center tw-space-x-2">
                                                            <Rating value={review.rating} readOnly precision={0.5} size="large"/>    
                                                            <div className="">
                                                                {review.date}
                                                            </div>
                                                        </div>
                                                        <div className="tw-py-3">
                                                            {review.snippet}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>{props.main ? props.main : "loading..."}</p>
                            <h3>Why Choose Us?</h3>
                            <div className="list-style">
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    {props.why
                                    ? props.why.map((d, i) => (
                                        <li key={`${d}-${i}`}>{d}</li>
                                        ))
                                    : "loading"}
                                </ul>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-xs-12">
                                <ul>
                                    {props.why2
                                    ? props.why2.map((d, i) => (
                                        <li key={`${d}-${i}`}> {d}</li>
                                        ))
                                    : "loading"}
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};