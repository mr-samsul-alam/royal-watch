import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Drawer from '@mui/material/Drawer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import { Outlet, useNavigate } from 'react-router-dom';
import UseFireBase from '../../../Hooks/UseFireBase';

const drawerWidth = 240;

function Dashboard(props) {
    const { user } = UseFireBase()
    const admin = true;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let navigate = useNavigate()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleRoute = (text) => {

        if (admin === true) {
            switch (text) {
                case "Home": navigate('/home')
                    break;
                case "Give Review": navigate('/dashboard/giveReview')
                    break;
                case "My Cart": navigate('/dashboard/myCart')
                    break;
                case "Dashboard": navigate('/dashboard')
                    break;
                case "Make Admin": navigate('/dashboard/makeAdmin')
                    break;
                case "Add Products": navigate('/dashboard/addProducts')
                    break;
                case "Manage Order": navigate('/dashboard/manageOrder')
                    break;
                case "Update Product": navigate('/dashboard/updateProduct')
                    break;
                default: navigate('/dashboard')
            }
        }
        else {
            switch (text) {
                case "Home": navigate('/home')
                    break;
                case "Give Review": navigate('/dashboard/giveReview')
                    break;
                case "My Cart": navigate('/dashboard/myCart')
                    break;
                case "Dashboard": navigate('/dashboard')
                    break;
                default: navigate('/dashboard')
            }

        }


    }

    const drawer = (
        <div>
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mx: "auto", padding: "10px", fontSize: "1.5rem", display: { md: 'flex' } }}

                >
                    <img width={100} style={{ borderRadius: "50%", width: "75%" }} src={user.photoURL} alt="Logo" />
                </Typography></Toolbar>
            <Divider />
            <List>
                {
                    admin ? ['Home', 'DashBoard', 'My Cart', 'Give Review', " ", "Add Products", "Update Product", "Manage Order", "Make Admin",].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index === 0 && <ArrowBackIcon />}
                                {index === 1 && <DashboardIcon />}
                                {index === 2 && <AddShoppingCartIcon />}
                                {index === 3 && <ReviewsIcon />}
                                {index === 4 && <hr style={{ width:"500px", color: '#D8C3A5' }} />}
                                {index === 5 && <AddCircleIcon />}
                                {index === 6 && <UpdateOutlinedIcon />}
                                {index === 7 && <ManageHistoryIcon />}
                                {index === 8 && <AdminPanelSettingsIcon />}
                                {index === 9 && <UpdateOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} onClick={() => handleRoute(text)} />
                        </ListItem>
                    ))
                        :
                        ['Home', 'DashBoard', 'My Cart', 'Give Review'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index === 0 && <ArrowBackIcon />}
                                    {index === 1 && <DashboardIcon />}
                                    {index === 2 && <AddShoppingCartIcon />}
                                    {index === 3 && <InboxIcon />}
                                    {index === 4 && <AddCircleIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} onClick={() => handleRoute(text)} />

                            </ListItem>
                        ))
                }
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed" style={{ backgroundColor: "white" }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar >
                    <IconButton
                        color="secondary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ mx: "auto", color: "black", fontWeight: "700" }} >
                        <img width={100} style={{ margin: "5px" }} src="https://cdn.shopify.com/s/files/1/2324/8827/files/Royal_Watch_Logo_PNG_Colour_480x480.png?v=1637904642" alt="Logo" />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', color: "green", sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: "600px" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}

            >
                <Toolbar />
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

