import React, { useState } from 'react';
import { Grid, Paper, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import { display } from '@mui/system';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const cardOnHover = ({ hover }) => ({
    borderBottom: '3px solid',
    borderTop: '3px solid',
    borderRight: '3px solid',
    borderLeft: '3px solid',
    borderBottomColor: '#D8C3A5',
    borderTopColor: hover ? '#D8C3A5' : 'white',
    borderRightColor: hover ? '#D8C3A5' : 'white',
    borderLeftColor: hover ? '#D8C3A5' : 'white',
})

const ExploreCard = (props) => {
    const { _id, isAvailable, price, picture, name, review, company, about, quantity, type, Sub_Type } = props.review
    const [hover, setHover] = useState(false)

    return (
        <Grid item xs={12} md={4} style={{ paddingTop: "30px", }}   >
            <Paper >
                {/* elevation={24} variant='elevation' */}
                <Card style={cardOnHover({ hover })}
                    onPointerOver={() => setHover(true)}
                    onPointerOut={() => setHover(false)}  >

                    <CardMedia
                        component="img"
                        height="100%"
                        image={picture}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {isAvailable}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {about}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {quantity}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {Sub_Type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {company}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button size="small" color="primary">
                            Details
                        </Button>
                    </CardActions>
                </Card>


            </Paper>
        </Grid >
    );
};

export default ExploreCard;