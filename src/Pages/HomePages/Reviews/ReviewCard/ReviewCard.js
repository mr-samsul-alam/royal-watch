import { Grid, Paper, Rating } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import { display } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const ReviewCard = (props) => {
    const { _id, picture, name, rating, decription } = props.review
    return (
        <Grid item xs={12} md={4} style={{ paddingTop: "30px" }}   >
            <Paper elevation={24} variant='elevation' sx={{ maxWidth: 345, maxHeight: 450, padding: '20px', textAlign: 'center', alignItems: 'center', borderRadius: '25px' }}>

                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={11} md={11} variant="body2" style={{ padding: '50px' }} color="text.secondary">
                            <div style={{ width: "100%", height: 150, overflowY: "auto" }}>
                                {decription}
                            </div>
                        </Grid>
                        <Grid item xs={1} md={1} color="text.secondary" >
                            <Typography variant='h1'>
                                ”
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Box style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <Box>
                        <CardMedia
                            style={{ borderRadius: "50%", width: "150px" }}
                            component="img"
                            image={picture}
                            alt="green iguana"
                        />
                    </Box>
                    <Box style={{ alignItems: 'center' }} >
                        <Typography>
                            <Rating name="read-only" value={parseFloat(rating)} readOnly />
                        </Typography>
                        <Typography variant='h6' style={{ display: 'block' }}>
                            {name}
                        </Typography>
                    </Box>
                </Box>


            </Paper>
        </Grid>

    );
};

export default ReviewCard;