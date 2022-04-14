import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router'; 
import UseFireBase from '../../../Hooks/UseFireBase';
import Upperbar from '../../HomePages/Upperbar/Upperbar';
import { Avatar } from '@mui/material';
const pages = ['Home', 'Explore', 'About',];



const NavigationBar = () => {
    const { user, logout } = UseFireBase()
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleNavClicked = (page) => {
        switch (page) {
            case "Home": navigate('/home')
                break;
            case "Explore": navigate('/explore')
                break;
            case "About": navigate('/about')
                break;
            default: navigate('/home')
        }


    }
    const handleLogOut = () => {
        logout()
    }
    const goToLogIn = () => {
        navigate('/signIn')
    }
    const gotToDashboard = () => {
        navigate('/dashboard')
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Upperbar></Upperbar>
            <AppBar position="static" style={{ backgroundColor: "#D8C3A5", marginTop: "10px" }} >
                {/* color='transparent' */}
                <Container maxWidth="xl" >
                    <Toolbar disableGutters >


                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" style={{ fontWeight: "700", color: '#E85A4F', }} onClick={() => handleNavClicked(page)}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#E85A4F', display: 'block' }}
                                >
                                    <Typography style={{ fontWeight: "700", }} onClick={() => handleNavClicked(page)}>
                                        {page}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {
                                user.email ? <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '100px', color: "#E85A4F", fontWeight: "700" }}  >{user.displayName}</Box>
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        {/* {
                                            user.photoURL ? (<img src={user.photoURL} style={{ borderRadius: "50%", width: "65%" }} alt="" />)
                                                :
                                                (<Avatar {...stringAvatar(user?.displayName)} />)
                                        } */}
                                        <img src={user.photoURL} style={{ borderRadius: "50%", width: "65%" }} alt="" />

                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={gotToDashboard}>Dashboard</MenuItem>
                                        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                                    </Menu>
                                </div> : <Button onClick={goToLogIn} style={{ color: '#E85A4F' }}  >Login</Button>
                            }

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default NavigationBar;