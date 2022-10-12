import React from 'react';
import styled from 'styled-components';
import frontend from "../images/frontend.png"
import backend from "../images/django.jpeg"
import flutter from "../images/flutter.png"
import uxui from "../images/uxui.jpg"
import { Link, useParams } from 'react-router-dom';
import { educations } from '../data/Data';


const Direction = () => {

    const { eduId } = useParams()

    const data = educations.filter((education) => education.id.toString() === eduId)[0].directions

    console.log(data);

    return (
        <CardComp id='direct'>
            <h2 class="heading"> <span>Yo'nalishlar</span> </h2>

            <div className="box-container">
                {
                    data.map((direction) => {
                        return (
                            <div className="box" key={Math.random()}>
                                {direction.directionName === "Frontend" && <img src={frontend} alt="" />}
                                {direction.directionName === "Backend" && <img src={backend} alt="" />}
                                {direction.directionName === "Flutter" && <img src={flutter} alt="" />}
                                {direction.directionName === "UX/UI Design" && <img src={uxui} alt="" />}
                                <h3>{direction.directionName}</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <Link to={`/`} className="btn">Kursga qo'shilish</Link>
                            </div>
                        )
                    })
                }

            </div>

        </CardComp>
    );
}

export default Direction;

const CardComp = styled.section`
    
.box-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:1.5rem;
}

@media(max-width: 992px) {
    .box-container{
        grid-template-columns: 1fr;
    }
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


