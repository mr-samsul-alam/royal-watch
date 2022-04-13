import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products4SaleCard from '../../HomePages/Products4Sale/Products4SaleCard/Products4SaleCard';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar'; 

const ExplorePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map(product => <Products4SaleCard key={product._id} product={product} ></Products4SaleCard>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ExplorePage;