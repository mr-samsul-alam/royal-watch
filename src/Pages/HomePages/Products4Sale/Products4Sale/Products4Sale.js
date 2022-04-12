import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products4SaleCard from '../Products4SaleCard/Products4SaleCard';

const Products4Sale = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('/fake_product_data.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
    console.log(products);

    return (
        <Container>
            <Typography variant="div" style={{ textAlign: 'center' }}>
                <Typography >
                    360° COLLECTION
                </Typography>
                <hr style={{ width: "50px" }} />
                <Typography variant='h3' style={{ fontWeight: "bolder" }}>
                    <span style={{ color: '#D8C3A5' }}>FEATURED</span> PRODUCTS
                </Typography>
            </Typography>

            <Grid container spacing={2}>
                {
                    products.map(review => <Products4SaleCard key={review._id} review={review} ></Products4SaleCard>)
                }
            </Grid>
        </Container>
    );
};

export default Products4Sale;