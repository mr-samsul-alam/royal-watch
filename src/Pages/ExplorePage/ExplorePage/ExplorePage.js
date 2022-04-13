import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products4SaleCard from '../../HomePages/Products4Sale/Products4SaleCard/Products4SaleCard';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar'; 

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
                        products.map(review => <Products4SaleCard key={review._id} review={review} ></Products4SaleCard>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ExplorePage;