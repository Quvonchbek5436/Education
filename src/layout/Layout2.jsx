import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Left from '../Components/Left';
import Right from '../Components/Right';
import { GlobalStyle, lightMode } from '../thema/Thema';

const Layout2 = ({ children }) => {

    return (
        <ThemeProvider theme={lightMode}>
            <GlobalStyle />
            <Header />

            <Main>
                <Left />
                {children}
                <Right />
            </Main>

            <Footer />
        </ThemeProvider>
    );
}

export default Layout2;

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    margin-top: 90px;

    @media(max-width: 768px) {
        .leftPanel, .rightPanel {
            display: none;
        }

        & {
            grid-template-columns: 1fr;
        }
    }
`
