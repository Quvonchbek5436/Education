import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Footer from '../Components/Footer';
import { GlobalStyle, lightMode } from '../thema/Thema';


const LandingPageLayout = ({ children }) => {

    return (
        <ThemeProvider theme={lightMode}>
            <GlobalStyle />

            <Main>
                <div className="children">
                    {children}
                </div>
            </Main>

            <Footer />
        </ThemeProvider>
    );
}

export default LandingPageLayout;

const Main = styled.main`
    padding: 0 9%;
`
