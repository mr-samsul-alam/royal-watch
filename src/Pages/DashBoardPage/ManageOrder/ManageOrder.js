import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
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
    const [age, setAge] = React.useState('');
    const handleBoxChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Container>

            <Typography variant='h3' style={{ textAlign: 'center', justifyContent: "center", padding: '10px' }}>
                Manage Order
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <div style={{ width: '200px' }}><Box sx={{ py: '20px', textAlign: 'center' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">SRC</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleBoxChange}
                        >
                            <MenuItem value={10}>payed</MenuItem>
                            <MenuItem value={20}>OnShip</MenuItem>
                            <MenuItem value={30}>Complete</MenuItem>
                        </Select>
                    </FormControl>
                </Box></div>
            </Box>
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