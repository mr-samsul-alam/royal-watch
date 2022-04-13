import { Typography } from '@mui/material';
import React from 'react';
import ProductsDetails from '../../Shared/ProductsDetails/ProductsDetails';

const SpacialEdition = () => {
    return (
        <div>
            <Typography variant="div" style={{ textAlign: 'center' }}>
                <Typography >
                A COMPANION FOR YOU
                </Typography>
                <hr style={{ width: "50px" }} />
                <Typography variant='h3' style={{ fontWeight: "bolder" }}>
                    <span style={{ color: '#D8C3A5' }}>SPECIAL</span> EDITION
                </Typography>
            </Typography>
            <ProductsDetails></ProductsDetails>
        </div>
    );
};

export default SpacialEdition;