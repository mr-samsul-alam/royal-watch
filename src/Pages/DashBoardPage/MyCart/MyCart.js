import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Button, Container, Typography } from '@mui/material';
import UseFireBase from '../../../Hooks/UseFireBase';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}


const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function MyCart() {
    const { user } = UseFireBase()
    const navigate = useNavigate();
    const [carts, setCarts] = React.useState([])
    console.log(user?.email);
    React.useEffect(() => {
        fetch(`http://localhost:5000/carts/${user?.email}`)
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [user.email])
    console.log(carts);

    const goToPaymentPage = () => {
        navigate("/dashboard/payments")
    }
    const cancelOrder = (id) => {
        alert('R u Sure U wanna Delete')
        const url = `http://localhost:5000/orders/${id}`
        console.log(url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully');
                    const remainingUsers = carts.filter(user => user._id !== id);
                    setCarts(remainingUsers);
                }
            });

    }
    return (
        <Container>
            <Typography variant='h4' style={{ textAlign: 'center' }}>
                My Cart
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Product</TableCell>
                            <TableCell align="center">Qty.</TableCell>
                            <TableCell align="center"> Per Unit</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Sum</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {carts.map((row) => (
                            // console.log(row?._id, row?.name, row?.email)
                            <TableRow key={row?._id}>
                                <TableCell style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}> <img src={row?.productImg} style={{ width: '100px' }} alt="" />{row?.productName}</TableCell>
                                <TableCell align="center">{row?.quantity}</TableCell>
                                <TableCell align="center">{row?.perUnit}</TableCell>
                                <TableCell align="center">100000</TableCell>
                                <TableCell align="center">{row?.status}</TableCell>
                                <TableCell align="center" ><Button variant='contained' onClick={() => cancelOrder(row?._id)} style={{ alignItems: 'center' }} >  <DeleteOutlineIcon /></Button>  </TableCell>
                                {/* <TableCell align="right">{ccyFormat(row?.price)}</TableCell> */}
                            </TableRow>
                        ))}

                        <TableRow>
                            <TableCell rowSpan={4} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={5}><Button onClick={goToPaymentPage} variant="contained" >Complete Payment</Button></TableCell>
                        </TableRow>
                        <Typography>

                        </Typography>
                    </TableBody>
                </Table>

            </TableContainer>


        </Container>
    );
}