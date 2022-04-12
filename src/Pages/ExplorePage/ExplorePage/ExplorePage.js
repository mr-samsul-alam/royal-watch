import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import ExploreCard from '../ExploreCard/ExploreCard';

const ExplorePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/fake_product_data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map(review => <ExploreCard key={review._id} review={review} ></ExploreCard>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ExplorePage;