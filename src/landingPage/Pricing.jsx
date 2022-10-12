import React from 'react';
import styled from 'styled-components';

const Pricing = () => {
    return (
        <Wrapper class="pricing" id="pricing">

            <h2 class="heading"> Bizning  <span>Kurslar</span></h2>

            <div class="box-container container">

                <div class="box">
                    <h3>Online ta'lim</h3>
                    <div class="price"><span>$</span>50<span>/oyiga</span></div>
                    <div class="list">
                        <p> <i class="fas fa-check"></i> Shaxsiy trener </p>
                        <p> <i class="fas fa-check"></i> Istalgan vaqtda </p>
                        <p> <i class="fas fa-check"></i> Xoxishga qarab </p>
                        <p> <i class="fas fa-times"></i> Mentor bilan ishlash </p>
                        <p> <i class="fas fa-times"></i> Shaxsiy kabinet </p>
                    </div>
                </div>

                <div class="box">
                    <h3>Simple ta'lim</h3>
                    <div class="price"><span>$</span>100<span>/oyiga</span></div>
                    <div class="list">
                        <p> <i class="fas fa-check"></i> Shaxsiy trener </p>
                        <p> <i class="fas fa-check"></i> Haftada 3 kun </p>
                        <p> <i class="fas fa-check"></i> 3 soatdan </p>
                        <p> <i class="fas fa-check"></i> Mentor bilan ishlash </p>
                        <p> <i class="fas fa-times"></i> Shaxsiy kabinet </p>
                    </div>
                </div>

                <div class="box">
                    <h3>Bootcamp ta'lim</h3>
                    <div class="price"><span>$</span>150<span>/oyiga</span></div>
                    <div class="list">
                        <p> <i class="fas fa-check"></i> Shaxsiy trener </p>
                        <p> <i class="fas fa-check"></i> Haftada 5 kun </p>
                        <p> <i class="fas fa-check"></i> 4 soatdan </p>
                        <p> <i class="fas fa-check"></i> Mentor bilan ishlash </p>
                        <p> <i class="fas fa-check"></i> Shaxsiy kabinet </p>
                    </div>
                </div>

            </div>

        </Wrapper>
    );
}

export default Pricing;

const Wrapper = styled.section`
    
    .box-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
        gap: 2rem;
        margin: 3rem 0;
    }

    .box-container .box {
        padding: 2rem;
        text-align: center;
        border: ${({ theme }) => theme.border};
        background: #fff;
        border-radius: .5rem;
    }

    .box-container .box:nth-child(2) {
        transform: scale(1.2);
    }

    .box-container .box h3 {
        font-size: 2rem;
        text-transform: capitalize;
        color: ${({ theme }) => theme.orange};
        padding-top: 1rem;
    }

    .box-container .box .price {
        padding: 1rem 0;
        font-size: 6rem;
        text-transform: capitalize;
        color: ${({ theme }) => theme.black};
        font-weight: bolder;
    }

    .box-container .box .price span {
        font-size: 2rem;
        font-weight: normal;
    }

    .box-container .box .list p {
        font-size: 1.7rem;
        line-height: 2;
        color: ${({ theme }) => theme.lightColor};
    }

    .box-container .box .list p i {
        padding-right: .5rem;
        color: ${({ theme }) => theme.orange};
    }

    .box-container .box .list p i.fa-times {
        color: ${({ theme }) => theme.black};
    }

    
    @media (max-width: 1200px) {
        .box-container {
            margin: 0;
        }
        .box-container .box:nth-child(2) {
            transform: scale(1);
        }
    }
`