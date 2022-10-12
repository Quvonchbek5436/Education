import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import Card from './Card';
import Card2 from './Card2';
import Card3 from './Card3';

function Items({ currentItems, card, regId, eduId }) {
    return (
        <>
            {currentItems && (card === 1) &&
                <Card data={currentItems} />}

            {currentItems && (card === 2) &&
                <Card2 data={currentItems} regId={regId} />}

            {currentItems && (card === 3) &&
                <Card3 data={currentItems} eduId={eduId} />}
        </>
    );
}

export default function PaginatedItems({ itemsPerPage, data, card, regId, eduId }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} data={data} card={card} regId={regId} eduId={eduId} />

            <Pagination>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="keyingi >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< oldingi"
                    renderOnZeroPageCount={null}
                />
            </Pagination>
        </>
    );
}

const Pagination = styled.div`
    
    ul {
        display: flex;
        justify-content: center;
        padding-left: 0;
        margin: 1rem auto;
        list-style: none;
    }
    
    li {
        border: 1px solid ${({ theme }) => theme.black};
        color: ${({ theme }) => theme.black};
        cursor: pointer;
        margin-right: .5rem;
        border-radius: .5rem;
        margin-bottom: .5rem;
        font-size: 2rem;
        min-height: 4rem;
        min-width: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: all .5s;

            &:hover {
                background-color: ${({ theme }) => theme.black};
                color: ${({ theme }) => theme.orange};
            }
    }
    
    li a {
        padding: .5rem;
        display: inline-block;
        color: ${({ theme }) => theme.black};
        outline: none;

        &:hover {
                color: #fff;
            }

    }
    
    li.selected {
        background: ${({ theme }) => theme.orange};
        outline: none;

        a {
            color: #fff;
        }
    }

    li.disabled {
        background-color: ${({ theme }) => theme.lightColor};

        a {
            color: ${({ theme }) => theme.black};
        }
    }
`
