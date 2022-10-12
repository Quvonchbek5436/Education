import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { educations } from "../data/Data"
import SelectsComp from './SelectsComp';

const Card = ({ data }) => {
    console.log(data);

    return (
        <CardComp>
            <h2 class="heading"> <span>Viloyatlar</span> </h2>

            <SelectsComp />

            <div className="box-container" >
                {
                    data.map((region) => {
                        return (
                            <div className="box" key={Math.random()}>
                                <h3>{region.regionName}</h3>

                                <p> {educations.filter((el) => el.regId === region.id).length} ta IT markaz</p>
                                <Link to={`/${region.id}`} className="btn">Batafsil</Link>
                            </div>
                        )
                    })
                }

            </div>



        </CardComp>
    );
}

export default Card;

const CardComp = styled.section`

.box-container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap:1.5rem;
}

.box-container .box{
    padding:3rem 2rem;
    background: #fff;
    outline: ${({ theme }) => theme.outline};
    outline-offset: -1rem;
    text-align: center;
    box-shadow: ${({ theme }) => theme.boxShadow};
}

.box-container .box:hover{
    outline: ${({ theme }) => theme.outlineHover};
    outline-offset: 0rem;
}

.box-container .box img{
    margin:1rem 0;
    height: 20rem;
}

.box-container .box h3{
    font-size: 2.5rem;
    line-height: 1.8;
    color:var(--black);
}

.box-container .box p{
    font-size: 1.5rem;
    line-height: 1.8;
    color:${({ theme }) => theme.lightColor};
    padding:1rem 0;
}

`


