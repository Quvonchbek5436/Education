import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <Wrapper id='servies'>

            <h2 class="heading"> Bizning <span>Afzalliklarimiz</span> </h2>

            <div class="box-container">

                <div class="box">
                    <i class="fas fa-code"></i>
                    <h3>Oʻz ishining ustalari</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

                <div class="box">
                    <i class="fa-solid fa-computer"></i>
                    <h3>Faqatgina amaliyot</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

                <div class="box">
                    <i class="fa-solid fa-user"></i>
                    <h3>Mentor kerakmi?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

                <div class="box">
                    <i class="fa-solid fa-users"></i>
                    <h3>Hamjamiyat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

                <div class="box">
                    <i class="fa-sharp fa-solid fa-money-bill-transfer"></i>
                    <h3>Tezkor toʻlov</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

                <div class="box">
                    <i class="fa-solid fa-certificate"></i>
                    <h3>Sertifikat</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore architecto repellendus, magni facere itaque id, odio, alias neque reiciendis molestias accusantium? Facilis alias numquam nemo, reprehenderit quisquam odio dolor exercitationem!</p>
                </div>

            </div>

        </Wrapper>
    );
}

export default Services;

const Wrapper = styled.section`
        
    .box-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(38rem, 1fr));
        gap:2rem;
    }

    .box-container .box{
        padding:2rem;
        border-radius: .5rem;
        box-shadow: ${({ theme }) => theme.boxShadow};
        position: relative;
        z-index: 0;
        overflow:hidden;
        background-color: #fff;
    }

    .box-container .box i{
        font-size:4rem;
        padding-bottom: 5rem;
        color:#fff;
    }

    .box-container .box h3{
        font-size:2rem;
        padding-bottom: 1rem;
        color:${({ theme }) => theme.black};
    }

    .box-container .box p{
        font-size:1.4rem;
        line-height: 1.8;
        color:${({ theme }) => theme.lightColor};
        text-align: justify;
    }

    .box-container .box::before{
        content: '';
        position: absolute;
        top:0; left: 0;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => theme.orange};
        z-index: -1;
        clip-path: circle(9rem at 5% 0%);
        transition: .3s linear;
    }

    .box-container .box:hover::before{    
        clip-path: circle(100%);
    }

    .box-container .box:hover > *{
        color:#fff;
    }

`