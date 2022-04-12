import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material'; 
import { NavLink, useLocation } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import UseFireBase from '../../../Hooks/UseFireBase';
const SignIn = () => {
    const { signUsingGoogle, loginUser, user, isLoading, authError } = UseFireBase()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    // const history = useNavigate();

    const handleLoginSubmit = e => {
        console.log(loginData);
        loginUser(loginData.email, loginData.password, location)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signUsingGoogle(location)
    }
    return (
        <>
            <NavigationBar></NavigationBar>
            <Container>
                <Typography variant='h3' style={{ textAlign: 'center', fontWeight: "bolder", color: '#236F97B3', justifyContent: "center", marginTop: '100px' }}>
                    LOG IN
                </Typography>
                <Typography variant='h3' style={{ textAlign: 'center', color: '#236F97B3', justifyContent: "center", marginTop: '100px' }}>
                    <form onSubmit={handleLoginSubmit}>
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

                        <Button sx={{ width: '75%', m: 1 }} type="submit" style={{ backgroundColor: '#236F97B3' }} variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none', display: "block" }}
                            to="/signUp">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress sx={{ mx: 'auto' }} />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Typography>
                        <Button onClick={handleGoogleLogin} variant="contained" style={{ margin: "50px", backgroundColor: '#236F97B3' }} >Google SignIn</Button>
                    </Typography>

                </Typography>

            </Container>
        </>
    );
};

export default SignIn;