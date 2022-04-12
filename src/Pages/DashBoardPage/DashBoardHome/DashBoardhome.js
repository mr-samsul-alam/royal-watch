import { Container, Typography } from '@mui/material';
import React from 'react'; 
import UseFireBase from '../../../Hooks/UseFireBase';

const DashBoardHome = () => {
    const { user } = UseFireBase()
    const admin = true;
    
    return (
        <Container >
            <Typography style={{ textAlign: 'center', justifyContent: "center" }}>
                <img style={{ borderRadius: "50%", width: "15%" }} src={user.photoURL} alt="Logo" />
            </Typography>

            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center" }}>

                {
                    admin ? <p><p> Welcome {user.displayName} </p> <p>MR Admin</p></p> : <p> Welcome {user.displayName}</p>
                }
            </Typography>
        </Container>
    );
};

export default DashBoardHome;