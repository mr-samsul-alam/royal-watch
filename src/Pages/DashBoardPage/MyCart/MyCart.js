import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { Container, Typography } from '@mui/material';

const MyCart = () => {
    const [order, SetOrder] = useState([])
    // const { user } = useAuth()
    // useEffect(() => {
    //     const url = `https://mighty-woodland-10467.herokuapp.com/bookingInfo/${user.email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => SetOrder(data));
    // }, [user.email])

    const cancelOrder = (id) => {
        // alert('R u Sure U wanna Delete')
        // const url = `https://mighty-woodland-10467.herokuapp.com/bookingInfo/${id}`

        // fetch(url, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.deletedCount)
        //         if (data.deletedCount > 0) {
        //             alert('Deleted successfully');
        //             const remainingUsers = order.filter(user => user._id !== id);
        //             SetOrder(remainingUsers);
        //         }
        //     });

    }
    console.log(order);
    return (
        <div>
            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                My Plan
            </Typography>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{}} aria-label="Appointments table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Package</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.map((row) => (
                                <TableRow
                                    key={row?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.Name}
                                    </TableCell>
                                    <TableCell align="right">{row?.packageName}</TableCell>
                                    <TableCell align="right">{row?._id}</TableCell>
                                    <TableCell align="right">{row?.price}</TableCell>
                                    <TableCell align="right">{row?.status}</TableCell>
                                    <TableCell align="right">
                                        <button onClick={() => cancelOrder(row?._id)} >Cancel</button> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default MyCart;