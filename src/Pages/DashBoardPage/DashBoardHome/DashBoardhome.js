import { Container, Typography } from '@mui/material';
import React from 'react';
import UseFireBase from '../../../Hooks/UseFireBase';

const DashBoardHome = () => {
    const { user } = UseFireBase()
    const admin = true;

    return (
        <Container >
            <Typography style={{ textAlign: 'center', justifyContent: "center" }}>
                {
                    user?.photoURL ? <img width={100} style={{ borderRadius: "50%", width: "10%" }} src={user.photoURL} alt="Logo" />
                        : <img width={100} style={{ borderRadius: "50%", width: "10%" }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Logo" />
                }
            </Typography> 
            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center" }}>
                <Typography> Welcome Back {user.displayName}</Typography>
            </Typography>
        </Container>
    );
};

export default DashBoardHome;