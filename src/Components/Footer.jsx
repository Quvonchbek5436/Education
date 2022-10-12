import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterComp>

            <div className="box-container">

                <div className="box">
                    <h3> <i className="fa fa-graduation-cap"></i> My_Education </h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dicta cupiditate neque voluptatem, molestiae rerum.</p>
                    <div className="share">
                        <a href="/" > <i class="fa-brands fa-facebook-f"></i> </a>
                        <a href="/"> <i class="fa-brands fa-twitter"></i> </a>
                        <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        <a href="/"><i class="fa-brands fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div className="box">
                    <h3>Bog'lanish</h3>
                    <a href="tel: +998941234517" className="links"> <i className="fas fa-phone"></i> +998-94-123-45-17 </a>
                    <a href="tel: +998330013039" className="links"> <i className="fas fa-phone"></i> +998-33-001-30-39 </a>
                    <a href="mailto: keldiyorraxmatov1303@gmail.com" className="links"> <i className="fas fa-envelope"></i> keldiyorraxmatov1303@gmail.com </a>
                    <a href="/" className="links"> <i className="fas fa-map-marker-alt"></i> Buxoro viloyati G'ijduvon tumani </a>
                </div>

                <div className="box">
                    <h3>Havolalar</h3>
                    <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> Bosh sahifa </Link>
                    <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> Biz haqimizda </Link>
                    <Link to="/statistics" className="links"> <i className="fas fa-arrow-right"></i> Statistika </Link>
                    <Link to="/contact" className="links"> <i className="fas fa-arrow-right"></i> Bog'lanish </Link>
                </div>

                <div className="box">
                    <h3>Axborot</h3>
                    <p>Bizning kanalga obuna bo'ling</p>
                    <input type="email" placeholder="Sizning email" className="email" />
                    <input type="submit" value="Obuna bo'lish" className="btn" />
                    <img src="image/payment.png" className="payment-img" alt="" />
                </div>

            </div>

        </FooterComp>
    );
}

export default Footer;

const FooterComp = styled.section`
    background: #fff;
    padding: 2rem 9%;
    margin-top: 2rem;

.box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap:1.5rem;
}

.box-container .box h3{
    font-size: 2.5rem;
    color:${({ theme }) => theme.black};
    padding:1rem 0;
}

.box-container .box h3 i{
    color:${({ theme }) => theme.orange};
}

.box-container .box .links{
    display: block;
    font-size: 1.5rem;
    color:${({ theme }) => theme.lightColor};
    padding:1rem 0;
}

.box-container .box .links i{
    color:${({ theme }) => theme.orange};
    padding-right: .5rem;
}

.box-container .box .links:hover i{
    padding-right: 2rem;
}


.box-container .box p{
    line-height: 1.8;
    font-size: 1.5rem;
    color:${({ theme }) => theme.lightColor};
    padding:1rem 0;
}

.box-container .box .share a i{
    height:4rem;
    width:4rem;
    line-height:4rem;
    border-radius: .5rem;
    font-size: 2rem;
    color:${({ theme }) => theme.black};
    margin-right: .2rem;
    background: #eee;
    text-align: center;
}

.box-container .box .share a i:hover{
    background: ${({ theme }) => theme.orange};
    color: #fff;
}

.box-container .box .email{
    width: 100%;
    margin:.7rem 0;
    padding:1rem;
    border-radius: .5rem;
    background: #eee;
    font-size: 1.6rem;
    color:${({ theme }) => theme.black};
    text-transform: none;
}

.box-container .box .payment-img{
    margin-top: 2rem;
    height: 3rem;
    display: block;
}
`
