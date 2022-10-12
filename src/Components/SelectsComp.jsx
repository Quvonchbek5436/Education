import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select'
import styled from 'styled-components';
import { regions, educations } from '../data/Data';

const SelectsComp = () => {

    const navigate = useNavigate()
    const { regId, eduId, directId } = useParams()

    console.log(regId);

    const regionOption = regions.map((region) => {
        let data = {
            value: region.id,
            label: region.regionName
        }
        return data
    })

    const eduOption = []

    educations.forEach((edu, index) => {
        let k = 1;
        let data = {
            id: k,
            value: edu.id,
            label: edu.educationName
        }

        if (edu.regId.toString() === regId) {
            eduOption.push(data);
            k++
        }
    })

    const directOption = []

    educations.forEach((edu) => {

        if (edu.id.toString() === eduId) {
            edu.directions.forEach((direct) => {
                let data = {
                    value: direct.id,
                    label: direct.directionName
                }
                directOption.push(data)
            })

        }
    })

    console.log(directOption);

    return (
        <FormSelect action="" className='form'>
            <Select options={regionOption} styles placeholder="Viloyatlar"
                defaultValue={regId && regionOption[regId - 1]}
                onChange={(e) => navigate(`/${e.value}`)}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: 'rgba(255, 119, 0, 0.2)',
                        primary: '#ff7800',
                    },
                })} />

            {console.log(eduOption.find(d => d.value.toString() === eduId))}
            <Select options={eduOption} isDisabled={regId ? false : true} styles placeholder="Markazlar"
                defaultValue={eduId && eduOption.find(d => d.value.toString() === eduId)} //[eduOption.find(d => d.value.toString() === eduId]
                onChange={(e) => navigate(`/${regId}/${e.value}`)}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: 'rgba(255, 119, 0, 0.2)',
                        primary: '#ff7800',
                    },
                })} />

            <Select options={directOption} styles placeholder="Yo'nalishlar" isDisabled={eduId ? false : true}
                defaultValue={directId && directOption[directId - 1]}
                onChange={(e) => navigate(`/${regId}/${eduId}/${e.value}`)}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary25: 'rgba(255, 119, 0, 0.2)',
                        primary: '#ff7800',
                    },
                })} />

            <Select placeholder="Qidirish" theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary25: 'rgba(255, 119, 0, 0.2)',
                    primary: '#ff7800',
                },
            })} />
        </FormSelect>
    );
}

export default SelectsComp;

const FormSelect = styled.form`
    padding-bottom: 2rem;
    font-size: 1.5rem;
    display: flex;
    gap: 2rem;
    width: 100%;

    &>div {
        width: 100%;
    }

    @media(max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`
