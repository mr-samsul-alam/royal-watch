import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ManageOrder = () => {
    const [progress, setProgress] = React.useState(20);
    const [buffer, setBuffer] = React.useState(30);
    const [orders, setOrders] = useState([])
    React.useEffect(() => {
        setBuffer(40)
        setProgress(50)
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
        setBuffer(100)
        setProgress(100)
    }, [])
    const handleStatusUpdate = () => {

    }

    return (
        <div>
            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
            <Container>
                <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                    Manage Order
                </Typography>



                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Name </TableCell>
                                <TableCell align="right">Package Name</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (

                                <TableRow
                                    key={row?._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell align="right">{row?.name}</TableCell>
                                    <TableCell align="right">{row?.productName}</TableCell>
                                    <TableCell align="right">{row?.email}</TableCell>
                                    <TableCell align="right">
                                        {
                                            row.status === 'paid' && "paid"
                                        }
                                        {
                                            row.status === 'approved' && "approved"
                                        }
                                    </TableCell>
                                    <TableCell align="right">
                                        {
                                            row.status === 'paid' && <Button onClick={() => handleStatusUpdate(row?._id)} >Approved</Button>
                                        }
                                        {
                                            row.status === 'approved' && <Button>Done</Button>
                                        }  </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
};

export default ManageOrder;