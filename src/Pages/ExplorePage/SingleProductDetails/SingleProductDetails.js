import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const SingleProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    useEffect(() => {
        // const hello = async () => {
        //     await fetch(`http://localhost:5000/product/${id}`)
        //         .then(res => res.json())
        //         .then(data => setProduct(data))
        // }
        // hello()
    }, [id])

    return (
        <>
            <NavigationBar></NavigationBar>
            <h1>This is single id {id}</h1>
        </>
    );
};

export default SingleProductDetails;