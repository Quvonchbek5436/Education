import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <ContactComp class="contact" id="contact">

            <h2 class="heading"><span>Bog'lanish</span></h2>

            <div class="row">

                <div style={{ position: "relative", overflow: "hidden", borderRadius: ".5rem" }}><a href="https://yandex.uz/maps/10330/bukhara/?utm_medium=mapframe&utm_source=maps" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "0px" }}>Бухара</a><a href="https://yandex.uz/maps/10330/bukhara/?ll=64.421701%2C39.767945&utm_medium=mapframe&utm_source=maps&z=12" style={{ color: "#eee", fontSize: "12px", position: "absolute", top: "14px" }}>Карта Бухары с улицами и номерами домов онлайн — Яндекс Карты</a><iframe title='buxoro' src="https://yandex.uz/map-widget/v1/-/CGdTvU0m" width="100%" height="520" frameborder="1" allowfullscreen="true" style={{ position: "relative" }}></iframe></div>


                <form action="">
                    <h3>Biz bilan aloqa</h3>
                    <input type="text" placeholder="Ismingiz" class="box" />
                    <input type="email" placeholder="Emailingiz" class="box" />
                    <input type="tel" placeholder="Telefon raqamingiz" class="box" />
                    <textarea placeholder="Xabar qoldiring" class="box" cols="30" rows="10"></textarea>
                    <input type="submit" value="Yuborish" class="btn" />
                </form>

            </div >

        </ContactComp >
    );
}

export default Contact;

const ContactComp = styled.section`
    width: 100%;

    .row{
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 520px !important;
        gap:1.5rem;
    }

    @media(max-width: 992px) {
        .row {
            grid-template-columns: 1fr;
        }
    }

    .row .map{
        flex:1 1 42rem;
        width: 100%;
        padding:2rem;
        box-shadow: ${({ theme }) => theme.boxShadow};
        border:${({ theme }) => theme.border};
        border-radius: .5rem;
    }

    .row form{
        padding:2rem;
        flex:1 1 42rem;
        box-shadow: ${({ theme }) => theme.boxShadow};
        border:${({ theme }) => theme.border};
        text-align: center;
        border-radius: .5rem;
    }

    .row form h3{
        font-size: 3rem;
        color:${({ theme }) => theme.black};
        padding-bottom: 1rem;
    }

    .row form .box{
        width:100%;
        border-radius: .5rem;
        padding:1rem 1.2rem;
        font-size: 1.6rem;
        text-transform: none;
        border:${({ theme }) => theme.border};
        margin:.7rem 0;
    }

    .row form textarea{
        height:15rem;
        resize: none;
    }
`
