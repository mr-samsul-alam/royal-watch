import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { Autoplay, Pagination } from "swiper";
import { autoPlay } from 'react-swipeable-views-utils';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Swiper, SwiperSlide } from 'swiper/react';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

 

function Header() {
     


    return (
        <>
            <NavigationBar></NavigationBar>
            <Swiper loop={true} autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}  pagination={{
                clickable: true,
            }} modules={[Autoplay, Pagination]} className="mySwiper">
                <SwiperSlide> <img src="https://cdn.shopify.com/s/files/1/1692/8885/files/slider1.jpg?v=1485774434" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://cdn.shopify.com/s/files/1/1692/8885/files/slider2.jpg?v=1485774439" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://cdn.shopify.com/s/files/1/1692/8885/files/slide-3.jpg?v=1622274254" alt="" /> </SwiperSlide>
            </Swiper> 
        </>

    );
}

export default Header;