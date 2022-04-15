import { Alert, Button, ButtonGroup, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LinearProgress from '@mui/material/LinearProgress';
import UseFireBase from '../../../Hooks/UseFireBase';
import AddToCart from '../AddToCart/AddToCart';

const SingleProductDetails = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [progress, setProgress] = React.useState(20);
    const [buffer, setBuffer] = React.useState(30);
    const { user } = UseFireBase()
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const hello = async () => {
            setBuffer(40)
            setProgress(50)
            await fetch(`http://localhost:5000/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data))
            setBuffer(100)
            setProgress(100)
        }
        hello()
    }, [id])


    const CartDetails = {
        name: `${user.displayName}`,
        email: `${user.email}`,
        productName: `${product.name}`,
        productImg: `${product.main_picture}`,
        quantity: `${quantity}`,
        perUnit: `${product?.price}`,
        status: 'pending'
    }


    // console.log(typeof price);
    const upDate = (prop, quantity) => {
        if (quantity >= 1) {
            if (prop === "plus") {
                setQuantity(quantity + 1);
            }
            else {
                setQuantity(quantity - 1)
            }

        }
        else if (quantity >= 0) {
            if (prop === "plus") {
                setQuantity(quantity + 1);
            }
        }
    }

    // console.log(product?.price);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <Container>
                <Grid container spacing={2} style={{ margin: '2px solid red' }}>
                    <Grid item xs={12} md={6}>
                        <img src={product?.main_picture} width="200px" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography style={{ fontWeight: 'bolder', fontSize: '2rem' }}>{product?.name}</Typography>
                        <Typography  >
                            <Rating name="half-rating-read" style={{ color: '#D8C3A5' }} defaultValue={4} precision={0.5} readOnly />
                        </Typography>


                        <Typography>
                            {parseFloat(product?.price)}
                        </Typography>



                        <Typography  >
                            {product?.description}
                        </Typography>


                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button onClick={() => upDate("mynas", quantity)}>-</Button>
                            <Button>{quantity}</Button>
                            <Button onClick={() => upDate("plus", quantity)}>+</Button>
                        </ButtonGroup>



                        <AddToCart CartDetails={CartDetails} ></AddToCart>


                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default SingleProductDetails;