import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-depths-49982.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <Container style={{ marginTop: '80px' }} >
            <Typography variant="div" style={{ textAlign: 'center' }}>
                <Typography variant='h3' style={{ fontWeight: "bolder" }}>
                    <span style={{ color: '#D8C3A5' }}>PEOPLE'S</span> REVIEW
                </Typography>
            </Typography>
            <Grid container spacing={2} style={{ padding: '50px' }}>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} ></ReviewCard>)
                }
            </Grid>


        </Container>
    );
};

export default Reviews;