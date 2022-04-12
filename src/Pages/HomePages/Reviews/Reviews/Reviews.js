import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/fake_review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }, [])
    console.log(reviews);

    return (
        <Container  >
            <Typography variant='h3'> What people Say about Us</Typography>
            <Grid container spacing={2}>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review} ></ReviewCard>)
                }
            </Grid>


        </Container>
    );
};

export default Reviews;