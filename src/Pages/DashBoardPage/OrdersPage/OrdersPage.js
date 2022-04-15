import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import UseFireBase from '../../../Hooks/UseFireBase';
import { Container } from '@mui/material';


const steps = [
    'payment Done',
    'Order On packaging',
    'Order On Ship',
    'Order Complete'
];

export default function OrderPage() {
    const { user } = UseFireBase()
    const [activeState, setActive] = React.useState(1)
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        fetch(`https://sheltered-depths-49982.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email, orders])

    return (
        <>

            <Container>
                <h1 style={{ textAlign: 'center' }} >Order's Update Page</h1>
                {activeState === 0 ? (<h1>You don't have any order</h1>) : (orders.map(order => <Box style={{ border: "2px solid blue", margin: '20px', padding: '20px' }} sx={{ width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div>
                            <p>Product Name:{order?.productName}</p>
                            <p>Quantity:{order?.quantity}</p>
                        </div>
                        <img src={order?.productImg} width="10%" alt="" />
                    </div>
                    <Stepper activeStep={activeState} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}

                    </Stepper>
                </Box>))
                }
            </Container>

        </>


    );
}