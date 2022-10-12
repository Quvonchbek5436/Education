import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SelectsComp from './SelectsComp';

const Card2 = ({ data, regId }) => {
    console.log(data);

    return (
        <CardComp>
            <h2 class="heading"> <span>Markazlar</span> </h2>

            <SelectsComp />

            <div className="box-container">
                {
                    data?.map((education, index) => {
                        return (
                            <div className="box" key={index}>
                                <img src={education.logo} alt="" />
                                <h3>{education.educationName}</h3>
                                <p> {education.directions.length} ta IT yo'nalish</p>

                                <div className="btns">
                                    <Link to={`/${regId}/${education.id}`} className="btn">Batafsil</Link>
                                    <Link target={"_blank"} to={`/markaz/${regId}/${education.id}`} className="btn">Asosiy saytga kirish</Link>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </CardComp>
    );
}

export default Card2;

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

    .btns {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        &>a {
            width: 100%;
        }
    }
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


