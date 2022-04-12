import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExploreCard from '../../../ExplorePage/ExploreCard/ExploreCard';

const Products4Sale = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/fake_product_data.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    products.map(review => <ExploreCard key={review._id} review={review} ></ExploreCard>)
                }
            </Grid>
        </Container>
    );
};

export default Products4Sale;