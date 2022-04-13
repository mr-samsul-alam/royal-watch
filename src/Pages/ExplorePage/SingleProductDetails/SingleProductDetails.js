import { Alert, Button, ButtonGroup, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import UseFireBase from '../../../Hooks/UseFireBase';

const SingleProductDetails = () => {
    const [product, setProduct] = useState({});
    const [addToProduct, setAddToProduct] = useState(false);
    const [quantity, setQuantity] = useState(1); 
    const { user } = UseFireBase()
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const hello = async () => {
            await fetch(`http://localhost:5000/products/${id}`)
                .then(res => res.json())
                .then(data => setProduct(data))
        }
        hello()
    }, [id])


    const CartDetails = {
        name: `${user.displayName}`,
        email: `${user.email}`,
        productName: `${product.name}`,
        productImg: `${product.main_picture}`,
        quantity: `${quantity}`,
        // price: `${price}`,
        status: 'addedToCart'
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
    const handleAddToCard = () => {
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(CartDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddToProduct(true);
                }
            });

    }

    const goToCart = () => {
        navigate("/dashboard/myCart")
    }
    // console.log(product?.price);
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container>
                <Grid container spacing={2} style={{ margin: '2px solid red' }}>
                    <Grid item xs={12} md={6}>
                        <img src={product?.main_picture} width="200px" alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography style={{ fontWeight: 'bolder', fontSize: '2rem' }}>{product?.name}</Typography>
                        <Typography  >
                            <Rating name="half-rating-read" style={{ color: '#D8C3A5' }} defaultValue={parseFloat(product?.rating)} precision={0.5} readOnly />
                        </Typography>
                        <Typography>
                            {/* {price} */}
                        </Typography>
                        <Typography  >
                            {product?.description}
                        </Typography>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button onClick={() => upDate("mynas", quantity)}>-</Button>
                            <Button>{quantity}</Button>
                            <Button onClick={() => upDate("plus", quantity)}>+</Button>
                        </ButtonGroup>





                        {addToProduct && <Alert severity="success"> {quantity} {product?.name} Added to Cart successfully!</Alert>}
                        {addToProduct && <Button onClick={goToCart} variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "10px", padding: '15px' }}> <ShoppingCartCheckoutIcon style={{ paddingRight: '5px' }} />  My Cart</Button>}
                        <div>
                            <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "10px", padding: '15px' }} onClick={handleAddToCard}> <AddShoppingCartIcon style={{ paddingRight: '5px' }} />  ADD TO CART</Button>


                            <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "20px", padding: '15px' }} > <FavoriteBorderOutlinedIcon style={{ paddingRight: '5px' }} />ADD TO WISH</Button>


                            <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "20px", padding: '15px' }} > <ShoppingCartOutlinedIcon style={{ paddingRight: '5px' }} />  BUY NOW</Button>
                        </div>


                    </Grid>
                </Grid>
            </Container>

        </div>
    );
};

export default SingleProductDetails;