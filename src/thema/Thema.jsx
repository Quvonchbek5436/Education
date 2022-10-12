import { createGlobalStyle } from 'styled-components';

export const lightMode = {
  orange: "#ff7800",
  black: "#130f40",
  lightColor: "#666",
  boxShadow: "0 .5rem 1.5rem rgba(0, 0, 0, .1)",
  border: ".2rem solid rgba(0, 0, 0, .1)",
  outline: ".1rem solid rgba(0, 0, 0, .1)",
  outlineHover: ".2rem solid #130f40",
}

export const GlobalStyle = createGlobalStyle`

  *{
    font-family: 'Poppins', sans-serif;
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    transition: all .2s linear;
}

html{
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 7rem;
}

body{
    background:#eee;
}

section{
    padding:1rem;
}

.heading{
    text-align: center;
    padding:2rem 0;
    padding-bottom: 3rem;
    font-size: 3.5rem;
    color:${({ theme }) => theme.black};
}

.heading span{
    background: ${({ theme }) => theme.orange};
    color:#fff;
    display: inline-block;
    padding:.5rem 3rem;
    clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%);
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    padding:.8rem 3rem;
    font-size: 1.7rem;
    border-radius: .5rem;
    border:.2rem solid ${({ theme }) => theme.black};
    color:${({ theme }) => theme.black};
    cursor: pointer;
    background: none;
}

.btn:hover{
    background: ${({ theme }) => theme.orange};
    color:#fff;
}

`;