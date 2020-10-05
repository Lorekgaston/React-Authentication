import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  menuButton: {
    display: 'flex',
    width: '220px'
    //color: '#65c04e'
    // border: '1px solid red'
  },
  menuContainer: {
    marginTop: '45px',
    right: 0
  }
});

const HeaderMenu = ({ dispatch, handleMenuItem, open, close, anchorEl }) => {
  const history = useHistory();
  const classes = useStyles();
  const logout = () => {
    dispatch({ type: 'logout' });
    localStorage.setItem('auth-token', '');
  };
  return (
    <div>
      <Menu
        className={classes.menuContainer}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={open}
        onClose={close}
      >
        <MenuItem
          className={classes.menuButton}
          onClick={() => handleMenuItem('/profile')}
        >
          <ListItemIcon>
            <AccountCircleOutlinedIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <Divider variant="inset" component="li" />
        <MenuItem
          className={classes.menuButton}
          onClick={() => history.push('/')}
        >
          <ListItemIcon>
            <MessageIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </MenuItem>
        <Divider variant="inset" component="li" />
        <MenuItem
          className={classes.menuButton}
          onClick={() => handleMenuItem('/account/edit')}
        >
          <ListItemIcon>
            <SettingsIcon fontSize="medium" color="primary" />
          </ListItemIcon>
          <ListItemText primary="Account Settings" />
        </MenuItem>
        <Divider light />
        <MenuItem className={classes.menuButton} onClick={logout}>
          {/* <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon> */}
          <ListItemText primary="Log Out" />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderMenu;

{
  /* <div
          style={{
            borderBottom: '1px solid  lightgrey',
            width: '100%'
          }}
        ></div> */
}
