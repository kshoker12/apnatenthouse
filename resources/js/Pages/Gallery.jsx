import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import jsonData from "../../data/data.json";


export default function Gallery({}) {
    return (
        <NavBar>
            <Head title="Gallery">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row" data-aos = "fade-right" data-aos-once = {true}>
                                <div className="col-md-8 col-md-offset-2 tw-text-center tw-pt-48 tw-pb-16" >
                                    <h1>
                                        Gallery
                                    </h1>  
                                    <a
                                        href={route("booking")}
                                        className="btn btn-custom btn-lg page-scroll"
                                        >
                                        Request Booking
                                    </a>{" "}    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <a className='tw-bottom-0 tw-right-0 tw-p-4 tw-fixed tw-z-50' href="#header">
                <button className='tw-rounded-full tw-bg-black tw-w-12 tw-h-12 hover:tw-bg-blue-500 tw-ease-in-out tw-duration-300'>
                    <i className="fas fa-arrow-up  tw-text-2xl tw-text-white"/>
                </button>
            </a>
            <div className="tw-bg-blue-50 tw-py-20">
                <div className="container">
                    <div className="tw-flex tw-items-center tw-justify-center tw-h-full tw-w-full" >
                        <MasonryImageList/>  
                    </div>
                </div>
            </div>
        </NavBar>
    );
}



function MasonryImageList() {
  return (
    <Box sx={{ width: '100%', height:"100%"}}>
      <ImageList variant="masonry" cols={3} gap={8} sx={{overflow:"hidden"}}>
        {jsonData.gallery.map((item) => (
          <ImageListItem key={item.img}
          data-aos = "flip-left" data-aos-once = {true}>
            <img
            className=''
            
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];