import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';

import './Home.scss';

const colors = [
  '#16c591',
  '#277caa',
  '#ff7a92',
  '#fae681',
  '#9bd290',
  '#f7b957',
  '#d2293d',
  '#6c76cc',
  '#983873'
];

const Home = () => {
  const { user } = useSelector(state => state.login);
  const { users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  console.log(user);

  const handleRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    dispatch(userAction.getAllUsers(user));
  }, []);
  console.log(users);
  return (
    <div className="Home">
      <div className="Home__userInfo">
        <h1>Welcom {user.user.userName}</h1>
        <h2>Email: {user.user.email}</h2>
        <h2>Role: {user.user.role}</h2>
        <h2>ID: {user.user._id}</h2>
      </div>
      <div className="Home__userList">
        <div className="Home__userList_list">
          <div className="Home__userList_title">
            <h3>User List</h3>
          </div>
          <ul>
            <li>
              <div
                className="Avatar"
                style={{ '--color-random': `${handleRandomColor()}` }}
              >
                <Avatar />
              </div>
              <div className="Username">
                <h5>George</h5>
                <span>Role: user</span>
              </div>
              <div className="Icon">
                <div className="Icon__container">
                  <MoreVertIcon />
                </div>
              </div>
            </li>
            <li>
              <div
                className="Avatar"
                style={{ '--color-random': `${handleRandomColor()}` }}
              >
                <Avatar>H</Avatar>
              </div>
              <div className="Username">
                <h5>George</h5>
                <span>Role: user</span>
              </div>
              <div className="Icon">
                <div className="Icon__container">
                  <MoreVertIcon />
                </div>
              </div>
            </li>
            <li>
              <div
                className="Avatar"
                style={{ '--color-random': `${handleRandomColor()}` }}
              >
                <Avatar />
              </div>
              <div className="Username">
                <h5>George</h5>
                <span>Role: user</span>
              </div>
              <div className="Icon">
                <div className="Icon__container">
                  <MoreVertIcon />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
