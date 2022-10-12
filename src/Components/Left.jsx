import React from 'react';
import styled from 'styled-components';


const Left = () => {
    return (
        <LeftPanel className='leftPanel'>
            <div className="heading">
                <span>Tanlovlar</span>
            </div>

            <div className="box-container">

                <div className="box">
                    <div className="content">
                        <div className="tags">
                            <h3>Frontend</h3>
                            <div className="marker">
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> Buxoro / </a>
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> PDP </a>
                            </div>
                        </div>
                        <span> <i className="fas fa-calendar"></i> 13-mart, 2022-yil </span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="/" className="btn">Qatnashish</a>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <div className="tags">
                            <h3>Backend</h3>
                            <div className="marker">
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> Toshkent / </a>
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> Proweb </a>
                            </div>
                        </div>
                        <span> <i className="fas fa-calendar"></i> 13-mart, 2022-yil </span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="/" className="btn">Qatnashish</a>
                    </div>
                </div>

                <div className="box">
                    <div className="content">
                        <div className="tags">
                            <h3>UX/UI Design</h3>
                            <div className="marker">
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> Andijon / </a>
                                <a href="/"> <i className="fas fa-map-marker-alt"></i> PDP </a>
                            </div>
                        </div>
                        <span> <i className="fas fa-calendar"></i> 27-oktabr, 2022-yil </span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, earum.</p>
                        <a href="/" className="btn">Qatnashish</a>
                    </div>
                </div>
            </div>

        </LeftPanel>
    );
}

export default Left;

const LeftPanel = styled.article`
    width: 100%;
    min-height: calc(100vh - 90px) !important;
    height: 100%;
    background: #fff;
    padding: 1rem;
    overflow: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 0rem;
    }

    .box-container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .box-container .box {
        border-radius: .5rem;
        overflow: hidden;
    }

    .box-container .box:hover .image h3 {
        left: 1.5rem;
    }

    .box-container .box:hover .image img {
        transform: scale(1.1);
    }

    .box-container .box .content {
        padding: 2rem 1.5rem;
        background: #f7f7f7;
    }
    
    /* .box-container .box .content:hover {
        background-color: ${({ theme }) => theme.orange} !important;
        
        * {
            color: #fff !important;
        }
        
    } */

    .box-container .box .content .tags {
        padding-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
       justify-content: space-between;
    }

    .box-container .box .content .tags a,
    .box-container .box .content span{
        font-size: 1.5rem;
        color: ${({ theme }) => theme.black};
        padding-right: .5rem;
    }

    .box-container .box .content .tags a:hover,
    .box-container .box .content span:hover {
        color: ${({ theme }) => theme.orange};
        cursor: pointer;
    }

    .box-container .box .content i {
        color: ${({ theme }) => theme.orange};
        padding-right: .5rem;
    }

    .box-container .box .content h3 {
        font-size: 2rem;
        color: ${({ theme }) => theme.black};
    }

    .box-container .box .content p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.lightColor};
        padding: 1rem 0;
        line-height: 2;
    }

`
