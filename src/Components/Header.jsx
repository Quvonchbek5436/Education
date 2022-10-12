import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const [navbarShow, setNavbarShow] = useState(false)

    return (
        <HeaderComp>

            <a href="/" className="logo"> <i className="fa fa-graduation-cap"></i> My_Education </a>

            <nav className="navbar">
                <Link to="/">Bosh sahifa</Link>
                <Link to="/">Biz haqimizda</Link>
                <Link to="/statistics">Statistika</Link>
                <Link to="/contact">Bog'lanish</Link>
            </nav>

            <div className="icons" id='menu-btn'>
                <div className="fas fa-bars" onClick={() => setNavbarShow(!navbarShow)}></div>
            </div>

            {navbarShow && <nav className="navbar active">
                <Link to="/">Bosh sahifa</Link>
                <Link to="/">Biz haqimizda</Link>
                <Link to="/statistics">Statistika</Link>
                <Link to="/contact">Bog'lanish</Link>
            </nav>}

        </HeaderComp>
    )
}

export default Header;

const HeaderComp = styled.header`
    position: fixed;
    height: 90px;
    top:0; 
    left:0; 
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:2rem 9%;
    background:#fff;
    box-shadow: ${({ theme }) => theme.boxShadow};


 .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color:${({ theme }) => theme.black};
}

 .logo i{
    color:${({ theme }) => theme.orange};
}

 .navbar a{
    font-size: 1.7rem;
    margin:0 1rem;
    color:${({ theme }) => theme.black};
}

 .navbar a:hover{
    color:${({ theme }) => theme.orange};
}

 .icons div{
    height: 4.5rem;
    width: 4.5rem;
    line-height: 4.5rem;
    border-radius: .5rem;
    background: #eee;
    color:${({ theme }) => theme.black};
    font-size: 2rem;
    margin-left: .3rem;
    cursor: pointer;
    text-align: center;
}

 .icons div:hover{
    background: ${({ theme }) => theme.orange};
    color:#fff;
}

#menu-btn{
    display: none;
}

 .search-form{
    position: absolute;
    top:110%; right:-110%;
    width: 50rem;
    height:5rem;
    background: #fff;
    border-radius: .5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
}

 .search-form.active{
    right:2rem;
    transition: .4s linear;
}

 .search-form input{
    height:100%;
    width:100%;
    background: none;
    text-transform: none;
    font-size: 1.6rem;
    color:${({ theme }) => theme.black};
    padding:0 1.5rem;
}

 .search-form label{
    font-size: 2.2rem;
    padding-right: 1.5rem;
    color:${({ theme }) => theme.black};
    cursor: pointer;
}

 .search-form label:hover{
    color:${({ theme }) => theme.orange};
}

 .shopping-cart{
    position: absolute;
    top:110%; right:-110%;
    padding:1rem;
    border-radius: .5rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    width:35rem;
    background: #fff;
}

 .shopping-cart.active{
    right:2rem;
    transition: .4s linear;
}

 .shopping-cart .box{
    display: flex;
    align-items: center;
    gap:1rem;
    position: relative;
    margin:1rem 0;
}

 .shopping-cart .box img{
    height:10rem;
}

 .shopping-cart .box .fa-trash{
    font-size: 2rem;
    position: absolute;
    top:50%; right:2rem;
    cursor: pointer;
    color:${({ theme }) => theme.lightColor};
    transform: translateY(-50%);
}

 .shopping-cart .box .fa-trash:hover{
    color:${({ theme }) => theme.orange};
}

 .shopping-cart .box .content h3{
    color:${({ theme }) => theme.black};
    font-size: 1.7rem;
    padding-bottom: 1rem;
}

 .shopping-cart .box .content span{
    color:${({ theme }) => theme.lightColor};
    font-size: 1.6rem;
}

 .shopping-cart .box .content .quantity{
    padding-left: 1rem;
}

 .shopping-cart .total{
    font-size: 2.5rem;
    padding:1rem 0;
    text-align: center;
    color:${({ theme }) => theme.black};
}

 .shopping-cart .btn{
    display: block;
    text-align: center;
    margin:1rem;
}

 .login-form{
    position: absolute;
    top:110%; right:-110%;
    width:35rem;
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding:2rem;
    border-radius: .5rem;
    background: #fff;
    text-align: center;
}

 .login-form.active{
    right:2rem;
    transition: .4s linear;
}

 .login-form h3{
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.black};
}

 .login-form .box{
    width: 100%;
    margin:.7rem 0;
    background:#eee;
    border-radius: .5rem;
    padding:1rem;
    font-size: 1.6rem;
    color:${({ theme }) => theme.black};
    text-transform: none;
}

 .login-form p{
    font-size: 1.4rem;
    padding:.5rem 0;
    color:var(--light-color);
}

 .login-form p a{
    color:${({ theme }) => theme.orange};
    text-decoration: underline;
}

@media (max-width:768px){
    #menu-btn{
        display: inline-block;
    }

    .navbar{
        position: absolute;
        top:110%; 
        right:-110%;
        width:30rem;
        box-shadow: var(--box-shadow);
        border-radius: .5rem;
        background: #fff;
    }

    .navbar.active{
        right:2rem;
        transition: .4s linear;
    }

    .navbar a{
        font-size: 2rem;
        margin:2rem 2.5rem;
        display: block;
    }
}

`