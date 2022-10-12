import React from 'react';
import styled from 'styled-components';
import frontend from "../images/frontend.png"
import backend from "../images/django.jpeg"
import flutter from "../images/flutter.png"
import uxui from "../images/uxui.jpg"
import SelectsComp from './SelectsComp';
import { useParams } from 'react-router-dom';
import { educations } from '../data/Data';


const Card4 = () => {

    const { eduId, directId } = useParams()

    const data = educations.filter((edu) => edu.id.toString() === eduId)[0].directions

    console.log(data);

    return (
        <CardComp>
            <h2 class="heading"> <span>Yo'nalish</span> </h2>

            <SelectsComp />

            <div className="box-container">
                {
                    data?.map((direction) => {
                        return (
                            (direction.id.toString() === directId) && <div className="box" key={Math.random()}>
                                {direction.directionName === "Frontend" && <img src={frontend} alt="" />}
                                {direction.directionName === "Backend" && <img src={backend} alt="" />}
                                {direction.directionName === "Flutter" && <img src={flutter} alt="" />}
                                {direction.directionName === "UX/UI Design" && <img src={uxui} alt="" />}

                                <div className="info">
                                    <h3>{direction.directionName}</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate quae accusamus iure officia laudantium necessitatibus velit voluptatem consectetur blanditiis. Voluptates maxime dolore tempora atque vero fugiat ipsum enim animi architecto deserunt quasi non iusto tenetur id, ipsa, beatae quibusdam laudantium doloribus nulla praesentium a. Ab eveniet molestiae veritatis? Iusto?</p>
                                    <a href="/" className="btn">Kursga qo'shilish</a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </CardComp>
    );
}

export default Card4;

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
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
}

@media(max-width: 992px) {
    .box-container .box{
        flex-direction: column;
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
    text-align: justify;
}

`


