import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

import image1 from "../images/1.jpg"
import image2 from "../images/2.jpg"
import image3 from "../images/3.jpg"


const Hero = () => {
    return (
        <HeroComp className="home" id="home">

            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper home-slider">

                <SwiperSlide>
                    <div className="content">
                        <span>Barcha markazlar shu yerda</span>
                        <h3>Talaba bo'lish imkoniyati</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident quam nesciunt
                            accusantium quod enim? Corporis, eveniet? Error, rerum delectus.</p>
                        <a href="/" className="btn">Batafsil</a>
                    </div>
                    <div className="image">
                        <img src={image1} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="content">
                        <span>Respublika miqyosidagi sayt</span>
                        <h3>Katta atmosfera</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident quam nesciunt
                            accusantium quod enim? Corporis, eveniet? Error, rerum delectus.</p>
                        <a href="/" className="btn">Batafsil</a>
                    </div>
                    <div className="image">
                        <img src={image3} alt="" />
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="content">
                        <span>Biz nimani kafolatlaymiz</span>
                        <h3>Kelajak kasblarini</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, provident quam nesciunt
                            accusantium quod enim? Corporis, eveniet? Error, rerum delectus.</p>
                        <a href="/" className="btn">Batafsil</a>
                    </div>
                    <div className="image">
                        <img src={image2} alt="" />
                    </div>
                </SwiperSlide >
            </Swiper>

        </HeroComp >
    );
}

export default Hero;

const HeroComp = styled.section`

    position: relative;
    cursor: pointer;
    user-select: none;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 9%;

.home-slider .swiper-slide{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:2rem; 
    padding-top: 9rem;
}

.home-slider .swiper-slide .content{
    flex:1 1 45rem;
}

.home-slider .swiper-slide .image{
    flex:1 1 45rem;
}

.home-slider .swiper-slide .image img{
    width: 100%;
    border-radius: 1rem;
}

.home-slider .swiper-slide .content span{
    color: ${({ theme }) => theme.orange};
    font-size: 2.5rem;
}

.home-slider .swiper-slide .content h3{
    color:var(--black);
    font-size: 5rem;
}

.home-slider .swiper-slide .content p{
    color:${({ theme }) => theme.lightColor};
    font-size: 2rem;
    padding:.5rem 0;
    line-height: 1.5;
}

.swiper{
    height: 100vh;
}

.swiper-pagination-bullet-active{
    background:${({ theme }) => theme.orange};
}

.swiper-pagination-clickable {
    bottom: 5rem !important;
}
    
`

//malumot, qulaylik, oqituvchilar, boglanish