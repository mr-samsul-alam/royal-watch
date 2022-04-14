import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import UseFireBase from '../../../Hooks/UseFireBase';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const AddToCart = (props) => {
    const { signUsingGoogle, loginUser, registerUser, user, authError } = UseFireBase()
    const [addToProduct, setAddToProduct] = useState(false);
    const [reg, setReg] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleAddToCard = () => {
        if (user.email === undefined) {
            setOpen(true);
        }
        else {
            alert("adding product")
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(props.CartDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setAddToProduct(true);
                    }
                });
        }


    }
    const navigate = useNavigate();
    const goToCart = () => {
        navigate("/dashboard/myCart")
    }
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    // console.log(location);
    const handleLoginSubmit = e => {
        if (loginData?.name === undefined) {
            loginUser(loginData.email, loginData.password, location)
            setOpen(false)
        }
        else {
            registerUser(loginData.email, loginData.password, loginData.name, location)
            setOpen(false)
        }

        e.preventDefault();
    }
    const handleGoogleLogin = () => {
        setOpen(false)
        signUsingGoogle(location)
        if (user?.email) {
            
        }
    }
    const handleReg = () => {
        setReg(true)
    }
    const handleClose = () => setOpen(false);
    return (
        <div>
            {addToProduct && <Alert severity="success">Added to Cart successfully!</Alert>}
            {addToProduct && <Button onClick={goToCart} variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "10px", padding: '15px' }}> <ShoppingCartCheckoutIcon style={{ paddingRight: '5px' }} />  My Cart</Button>}
            <div>
                <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "10px", padding: '15px' }} onClick={handleAddToCard}> <AddShoppingCartIcon style={{ paddingRight: '5px' }} />  ADD TO CART</Button>


                <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "20px", padding: '15px' }} > <FavoriteBorderOutlinedIcon style={{ paddingRight: '5px' }} />ADD TO WISH</Button>


                <Button variant="outlined" size="large" style={{ color: '#D8C3A5', border: '2px solid #D8C3A5', margin: "20px", padding: '15px' }} > <ShoppingCartOutlinedIcon style={{ paddingRight: '5px' }} />  BUY NOW</Button>
            </div>
            <div>

                <Modal

                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} style={{ borderRadius: "25px ", textAlign: 'center', border: '5px solid #D8C3A5' }}>
                        {
                            reg ? <Typography variant="body1" gutterBottom>Register</Typography> : <Typography variant="body1" gutterBottom>Log In </Typography>
                        }
                        <form onSubmit={handleLoginSubmit}>
                            {
                                reg ? <TextField
                                    sx={{ width: '75%', m: 1 }}

                                    label="Your Name"
                                    name="name"
                                    type="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" /> : ''
                            }
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}

                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            {authError && <Alert severity="error">{authError}</Alert>}

                            {
                                reg ? <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button> : <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            }
                            {
                                reg ? <Button variant="text" onClick={() => setReg(false)}>Already have Account log in</Button> : ''
                            }
                            {
                                reg ? '' : <Button variant="text" onClick={handleReg}>New User? Please Register</Button>
                            }
                        </form>
                        <Typography>
                            <Button onClick={handleGoogleLogin} variant='contained'>Google SignIn</Button>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default AddToCart;