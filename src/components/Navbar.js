import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import { Link, useHistory } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";
import { signOut } from "../firebase/firebase";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const { currentUser } = React.useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">
              <Avatar alt="clrswy" src="https://lms.clarusway.com/pluginfile.php/1/core_admin/logocompact/300x300/1628491244/clarusway_LOGO_tek_png.png" />
            </Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="center">
            <a
              href="https://github.com/serhatkoyuncu"
              color="white"
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              -----<code>{"<Serhat/>"}</code> <span> Blog -----</span></a>
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {currentUser ? (
              <>
                <MenuItem onClick={handleClose}>
                  <Link to="">Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}><Link to="/new-blog">New</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="" onClick={() => signOut()} >Logout</Link></MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleClose}>
                  <Link to="/login" underline="none" onClick={() => history.push("/login")}>Login</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}><Link to="/register" onClick={() => history.push("/register")} underline="none" >Register</Link></MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}