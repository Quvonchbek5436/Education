import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import styled from 'styled-components';

import t1 from "../images/t1.png"
import t2 from "../images/t2.png"
import t3 from "../images/t3.png"


const Teacher = () => {
    return (
        <Wrapper className="teachers" id='teacher'>

            <h1 className="heading">Markazimiz <span>Mentorlari</span></h1>

            <Swiper spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper teachers-slider">

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t1} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Temirova Dilnora</h3>
                            <span>Frontend Developer</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t2} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Boltayeva Nigora</h3>
                            <span>UX/UI Designer</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t3} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Teshayev Farrux</h3>
                            <span>Backend Developer</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t1} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Temirova Dilnora</h3>
                            <span>Frontend Developer</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t2} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Boltayeva Nigora</h3>
                            <span>UX/UI Designer</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="swiper-slide slide">
                        <div className="image">
                            <div className="img">
                                <img src={t3} alt="sdfsdsdsdsa" />
                            </div>
                            <div className="share">
                                <a href="/"> <i className="fab fa-facebook-f" ></i></a>
                                <a href="/"> <i className="fab fa-twitter" ></i></a>
                                <a href="/"> <i className="fab fa-instagram" ></i></a>
                                <a href="/"> <i className="fab fa-linkedin" ></i></a>
                            </div>
                        </div>
                        <div className="content">
                            <h3>Teshayev Farrux</h3>
                            <span>Backend Developer</span>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </Wrapper>
    );
}

export default Teacher;

const Wrapper = styled.section`
        
    .slide {
        text-align: center;
    }

    .slide:hover .image .img {
        background:  ${({ theme }) => theme.orange};
    }

    .slide:hover .image .share {
        bottom: 0;
    }

    .slide .image {
        position: relative;
        overflow: hidden;
    }

    .slide .image .img {
        background: rgba(255, 120, 0, 0.2);
        width: 100%;
        height: 45rem;

        img {
            height: 45rem;
        }
    }

    .slide .image .share {
        position: absolute;
        bottom: -10rem;
        left: 0;
        right: 0;
        background: rgba(19, 15, 64, 0.8);
        padding: 1rem;
    }

    .slide .image .share a {
        font-size: 3rem;
        margin: 0 1rem;
        color: #fff;
    }

    .slide .image .share a:hover {
        color:  ${({ theme }) => theme.orange};
    }

    .slide .content {
        display: flex;
        padding-top: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    .slide .content h3 {
        font-size: 2rem;
        text-transform: capitalize;
        color:  ${({ theme }) => theme.black};
    }

    .slide .content span {
        font-size: 1.5rem;
        line-height: 2;
        color:  ${({ theme }) => theme.lightColor};
    }
`