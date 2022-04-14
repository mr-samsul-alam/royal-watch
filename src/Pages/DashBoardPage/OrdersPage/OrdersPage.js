import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
    'payment Done', 
    'Order On package',
    'Order On Ship',
    'Order Complete'
];

export default function OrderPage() {
    const [activeState, setActive] = React.useState(2)
    return (
        <>
            <h1>u r Order Update Page</h1>
            {activeState === 0 ? (<h1>You donot have any order</h1>) : (<Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeState} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>)
            }
        </>


    );
}