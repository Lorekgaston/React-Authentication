import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { Avatar } from '@material-ui/core';

import './Home.scss';

const Home = () => {
  const { user } = useSelector(state => state.login);
  const history = useHistory();

  return (
    <div className="Home">
      <div className="Home__Header"></div>
      <div className="Home__Bottom">
        <div className="Home__Bottom_user">
          <div className="Avatar">
            <div className="Avatar__container">
              <div className="Avatar__container_image">
                <Avatar />
              </div>
            </div>
          </div>
          <div className="Info">
            <div className="Info__name">
              <h1>Welcome {user.user.userName}!</h1>
            </div>
            <div className="Info__rest">
              <h6>{user.user.role}</h6>
              <h6>{user.user.email}</h6>
              <h6>{user.user._id}</h6>
            </div>
          </div>

          <button
            className="LogOutButton"
            onClick={() => history.push('/login')}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
