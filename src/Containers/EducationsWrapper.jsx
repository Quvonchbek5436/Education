import React from 'react';
import { useParams } from 'react-router-dom';
import PaginatedItems from '../Components/Pagination';
import { educations } from '../data/Data';

const EducationsWrapper = () => {
    const { regId } = useParams()

    const data = educations.filter((el) => el.regId.toString() === regId)

    console.log(data);

    return (
        <PaginatedItems regId={regId} itemsPerPage={4} data={data} card={2} />
    )
}

export default EducationsWrapper;

