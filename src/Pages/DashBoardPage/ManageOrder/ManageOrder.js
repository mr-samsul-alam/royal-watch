import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const ManageOrder = () => {
    const [data, setData] = useState([])
    const [status, setStatus] = React.useState();


    // useEffect(() => {
    //     const hello = async () => {
    //         await fetch(`https://mighty-woodland-10467.herokuapp.com/bookingInfo/`)
    //             .then(res => res.json())
    //             .then(data => setData(data))
    //     }
    //     hello()
    // }, [])
    const handleStatusUpdate = id => {
        // const state = 'approved'
        // console.log(id);
        // const url = `https://mighty-woodland-10467.herokuapp.com/bookingInfo/624f3e66280f4ca76bb69cbc`;
        // fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(state)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             alert('Update Successful');
        //         }
        //     })
    }
    return (
        <Container>
            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                Manage Order
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell align="right">Name </TableCell>
                            <TableCell align="right">Package Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {data.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.packageName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">
                                    {
                                        row.status === 'pending' && "pending"
                                    }
                                    {
                                        row.status === 'approved' && "approved"
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    {
                                        row.status === 'pending' && <Button onClick={() => handleStatusUpdate(row._id)} >Approved</Button>
                                    }
                                    {
                                        row.status === 'approved' && <Button>Done</Button>
                                    }  </TableCell>


                            </TableRow>
                        ))} */}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageOrder;