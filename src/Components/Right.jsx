import React from 'react';
import styled from 'styled-components';

const Right = () => {
    return (
        <RightPanel className='rightPanel'>
            <div className="heading">
                <span>Reyting</span>
            </div>


        </RightPanel>
    );
}

export default Right;

const RightPanel = styled.article`
    width: 100%;
    min-height: calc(100vh - 90px) !important;
    height: 100%;
    background:#fff;
`
