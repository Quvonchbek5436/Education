import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Left from '../Components/Left';
import Right from '../Components/Right';
import Sponsr from '../Components/Sponsr';
import { GlobalStyle, lightMode } from '../thema/Thema';


const Layout = ({ children }) => {

    return (
        <ThemeProvider theme={lightMode}>
            <GlobalStyle />
            <Header />
            <Hero />

            <Main>
                <Left />
                <div className="children">
                    {children}
                </div>
                <Right />
            </Main>

            <Sponsr />
            <Footer />
        </ThemeProvider>
    );
}

export default Layout;

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    @media(max-width: 768px) {
        /* .leftPanel, .rightPanel {
            display: none;
        } */

        & {
            grid-template-columns: 1fr;
        }

    }

`
