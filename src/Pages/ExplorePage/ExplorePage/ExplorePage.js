import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products4SaleCard from '../../HomePages/Products4Sale/Products4SaleCard/Products4SaleCard';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import LinearProgress from '@mui/material/LinearProgress';

const ExplorePage = () => {
    const [products, setProducts] = useState([]);
    const [progress, setProgress] = React.useState(20);
    const [buffer, setBuffer] = React.useState(30);
    useEffect(() => {
        setBuffer(40)
        setProgress(50)
        fetch('https://sheltered-depths-49982.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
        setBuffer(100)
        setProgress(100)
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
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