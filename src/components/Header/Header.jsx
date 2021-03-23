import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      {/* <div className="header__container">
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
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => logout()}
                >
                  LogOut
                </Button>
              </div>
            </>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Header;

{
  /* <button onClick={logout} className="login__container-signInButton">
  Log Out
</button>; */
}
