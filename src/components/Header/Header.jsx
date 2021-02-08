import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLoginState } from '../../store/context';
import { Avatar, IconButton, Typography } from '@material-ui/core';
import './Header.scss';
import HeaderMenu from './HeaderMenu/HeaderMenu';

const Header = () => {
  const [state, dispatch] = useLoginState();
  const { user } = state;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const logout = () => {
    dispatch({ type: 'logout' });
    localStorage.setItem('auth-token', '');
    history.push('/login');
  };
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuItem = url => {
    setAnchorEl(null);
    history.push(url);
  };
  console.log(user);
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__link">
          <div className="header__logo">
            <h3>Home</h3>
          </div>
        </Link>
        <div className="header__nav">
          {!user ? (
            <>
              <Link to="/login" className="header__link">
                <div className="header__nav-option">
                  <span>Log In</span>
                </div>
              </Link>
              <Link to="/signup" className="header__link">
                <div className="header__nav-option">
                  <span>Sign In</span>
                </div>
              </Link>
            </>
          ) : (
            <>
              {' '}
              <div className="header__nav-option">
                <Typography>{user.userName}</Typography>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar src={user?.photo} />
                </IconButton>
                <HeaderMenu
                  dispatch={dispatch}
                  handleMenuItem={handleMenuItem}
                  open={open}
                  close={() => setAnchorEl(null)}
                  anchorEl={anchorEl}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <button onClick={logout} className="login__container-signInButton">
  Log Out
</button>; */
}
