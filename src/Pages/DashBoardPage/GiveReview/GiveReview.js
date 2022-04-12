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
        // fetch('https://mighty-woodland-10467.herokuapp.com/reviews', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(reviews)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             setSuccess(true);
        //         }
        //     });
        console.log(reviews);
        e.preventDefault()
    }
    return (
        <Container>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            <img style={{ borderRadius: "50%", width: "15%" }} src={user.photoURL} alt="Logo" />
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    sx={{ width: '75%' }}
                    label="Your City"
                    name="review"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <TextField
                    required
                    sx={{ width: '75%' }}
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
                <Button style={{ display: 'block', padding: "5px", margin: '50px' }} type="submit" variant="contained">Review</Button>
            </form>

        </Container >
    );
};

export default GiveReview;