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
 
        fetch('http://localhost:5000/products', {
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
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="main_picture"
                    label="Main Picture Link"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="picture1"
                    label="1'st Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="picture2"
                    label="2'nd Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '30%', m: 1 }}
                    id="outlined-size-small"
                    name="picture3"
                    label="3'rd Picture"
                    onBlur={handleOnBlur}
                    size="small"
                />

                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Products Name"
                    name="name"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Sub Category"
                    name="sub_category"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    label="Description"
                    name="description"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="company"
                    label="Company Name"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="price"
                    label=" Product Price"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <TextField
                    required
                    sx={{ width: '90%', m: 1 }}
                    id="outlined-size-small"
                    name="quantity"
                    label="Quantity"
                    onBlur={handleOnBlur}
                    size="small"
                />

                <Button sx={{ display: 'block', mx: 'auto', paddingX: 3, marginTop: 4 }} type="submit" variant="contained">Submit</Button>
            </form>
        </Container >
    );
};

export default AddProducts;