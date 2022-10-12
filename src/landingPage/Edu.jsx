import React from 'react';
import styled from 'styled-components';
import Contact from './Contact';
import Direction from './Direction';
import HeaderLanding from './HeaderLanding';
import HeroLanding from './HeroLanding';
import Pricing from './Pricing';
import Services from './Services';
import Teacher from './Teacher';

const Edu = () => {


    return (
        <Wrapper>
            <HeaderLanding />
            <HeroLanding />
            <Services />
            <Direction />
            <Pricing />
            <Teacher />
            <Contact />
        </Wrapper>
    );
}

export default Edu;

const Wrapper = styled.div`
    
`
