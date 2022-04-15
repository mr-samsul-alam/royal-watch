import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products4SaleCard from '../Products4SaleCard/Products4SaleCard';

const Products4Sale = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const hello = async () => {
            await fetch('https://sheltered-depths-49982.herokuapp.com/products')
                .then(res => res.json())
                .then(data => setProducts(data.slice(0, 6)))
        }
        hello()
    }, [])


    return (
        <Container style={{ marginTop: '70px' }}>
            <Typography variant="div" style={{ textAlign: 'center', }}>
                <Typography >
                    360° COLLECTION
                </Typography>
                <hr style={{ width: "50px" }} />
                <Typography variant='h3' style={{ fontWeight: "bolder", marginBottom: '70px' }}>
                    <span style={{ color: '#D8C3A5' }}>FEATURED</span> PRODUCTS
                </Typography>
            </Typography>

            <Grid container spacing={2}>
                {
                    products.map(product => <Products4SaleCard key={product._id} product={product} ></Products4SaleCard>)
                }
            </Grid>
        </Container>
    );
};

export default Products4Sale;