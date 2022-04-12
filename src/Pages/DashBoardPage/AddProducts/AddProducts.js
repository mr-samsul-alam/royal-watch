import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert, Container, Typography } from '@mui/material';


const AddProducts = () => {
    const [added, setAdded] = useState(false)
    const [bookingInfo, setBookingInfo] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // send to the server
        fetch('https://mighty-woodland-10467.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAdded(true);
                    e.target.reset();
                }
            });

        e.preventDefault();
    }
    return (
        <Container>
            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                Add Services
            </Typography>
            {
                added && <Alert severity="success">Made Admin successfully!</Alert>
            }
            <form onSubmit={handleBookingSubmit}>

                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="main_picture"
                    label="Main Picture Link"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture1"
                    label="1'st Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture2"
                    label="2'nd Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture3"
                    label="3'rd Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture4"
                    label="4'th Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture5"
                    label="5'th Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '10%', m: 1 }}
                    id="outlined-size-small"
                    name="picture6"
                    label="6'th Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Package Name"
                    name="package_name"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Description"
                    name="description"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="overview"
                    label="Write OverView"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="price"
                    label="Package Price"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="day"
                    label="Day's of Package"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="reviews_star"
                    label="Reviews Star"
                    onBlur={handleOnBlur}
                    size="small"
                />

                <Button sx={{ display: 'block', mx: 'auto', paddingX: 3, marginTop: 4 }} type="submit" variant="contained">Submit</Button>
            </form>
        </Container >
    );
};

export default AddProducts;