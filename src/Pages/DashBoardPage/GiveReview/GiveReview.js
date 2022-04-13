import { Button, TextField, Alert, Container, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import UseFireBase from '../../../Hooks/UseFireBase';
const GiveReview = () => {
    const [reviewText, setReviewText] = useState('');
    const [success, setSuccess] = useState(false);
    const [value, setValue] = useState(1);
    const { user } = UseFireBase()
    const handleOnBlur = e => {
        setReviewText(e.target.value);
    }
    const photo = user.photoURL
    const name = user.displayName
    const reviews = { review: reviewText, photo: photo, name: name, rating: value }

    const handleSubmit = e => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            });
        console.log(reviews);
        e.preventDefault()
    }
    return (
        <Container style={{ textAlign: "center" }}>

            <img style={{ borderRadius: "50%", width: "10%" }} src={user.photoURL} alt="Logo" />
            <form onSubmit={handleSubmit}>

                <TextField
                    required
                    sx={{ width: '100%' }}
                    label="Your Review About Us"
                    name="review"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Typography sx={{ p: 3 }} >
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                </Typography>
                {success && <Alert severity="success">Thanks For U  R Awesome Review</Alert>}
                <Button style={{ padding: "10px", margin: '50px', textAlign: "center" }} type="submit" variant="contained">Review</Button>
            </form>

        </Container >
    );
};

export default GiveReview;