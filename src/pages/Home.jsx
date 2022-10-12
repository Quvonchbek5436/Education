import React from 'react';
import styled from 'styled-components';
import PaginatedItems from '../Components/Pagination';
import { regions } from "../data/Data"

const Home = () => {

    return (
        <HomeComp>
            <PaginatedItems itemsPerPage={6} data={regions} card={1} />,
        </HomeComp>
    );
}

export default Home;

const HomeComp = styled.div`
    
`
