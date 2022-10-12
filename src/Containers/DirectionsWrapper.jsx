import React from 'react';
import { useParams } from 'react-router-dom';
import PaginatedItems from '../Components/Pagination';
import { educations } from '../data/Data';

const DirectionsWrapper = () => {
    const { eduId } = useParams()

    const data = educations.filter((education) => education.id.toString() === eduId)[0].directions

    console.log(data)

    return (
        <PaginatedItems eduId={eduId} itemsPerPage={4} data={data} card={3} />
    )
}

export default DirectionsWrapper;
