import { Typography } from '@mui/material';
import React from 'react';

const Upperbar = () => {
    return (
        <div>
            <Typography
                noWrap
                component="div"
                height="20%" width="15%"
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
                <img height="100%" width="100%" style={{ padding: '5px' }} src="https://cdn.shopify.com/s/files/1/2324/8827/files/Royal_Watch_Logo_PNG_Colour_480x480.png?v=1637904642" alt="Logo" />
            </Typography>
            <Typography
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}
            >
                <img height="50%" width="50%" style={{ padding: '5px' }} src="https://cdn.shopify.com/s/files/1/2324/8827/files/Royal_Watch_Logo_PNG_Colour_480x480.png?v=1637904642" alt="Logo" />
            </Typography>
        </div>
    );
};

export default Upperbar;