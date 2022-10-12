import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import prowebLogo from "../images/proweb.jpeg"
import pdpLogo from "../images/pdp.jpeg"
import gitaLogo from "../images/gita.png"
import najotTalimLogo from "../images/najottalim.jpg"
import qalamTalimLogo from "../images/qalamtalim.png"
import idrokTalimLogo from "../images/idroktalim.jpg"

const Sponsr = () => {
    return (
        <SponsrComp>

            <h2 class="heading"> <span>Hamkorlar</span> </h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img className='imageSlide' src={prowebLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imageSlide' src={pdpLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imageSlide' src={gitaLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imageSlide' src={idrokTalimLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imageSlide' src={najotTalimLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imageSlide' src={qalamTalimLogo} alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src={prowebLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={prowebLogo} alt="" /></SwiperSlide>
                <SwiperSlide><img src={prowebLogo} alt="" /></SwiperSlide> */}
            </Swiper>
        </SponsrComp>
    );
}

export default Sponsr;

const SponsrComp = styled.section`
.imageSlide {
    height: 20rem;
    width: 100%;
    object-fit: cover;
}

@media(max-width: 768px) {
    .imageSlide {
        width: 80% ;
        height: 25rem;
    }
}

.swiper-wrapper {
    text-align: center;
    max-width: 100%;
}

*{
    text-align: center;
}
`
