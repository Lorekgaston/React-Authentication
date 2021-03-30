import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../redux/actions/user';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Avatar } from '@material-ui/core';

import './Home.scss';

const colors = [
  '#16c591',
  '#277caa',
  '#21c1d6',
  '#f7b957',
  '#d2293d',
  '#6c76cc',
  '#983873',
  '#7460ee',
  '#b50003',
  '#761718',
  '#040301',
  '#65b954'
];

const Home = () => {
  const { user } = useSelector(state => state.login);
  const { userList } = useSelector(state => state.users);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { users } = userList || {};
  console.log(users);

  const handleRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const handelMenuOpen = userIdx =>
    isOpen === userIdx ? setIsOpen(null) : setIsOpen(userIdx);

  useEffect(() => {
    dispatch(userAction.getAllUsers());
  }, []);

  const renderUsers = () => {
    return users?.map((user, userIdx) => {
      const { userName, role } = user;
      return (
        <li key={userName + userIdx}>
          <Avatar>{userName?.charAt(0).toUpperCase()}</Avatar>
          <div className="Username">
            <h6>{userName}</h6>
            <span>Role: {role}</span>
          </div>
          <div className="Icon">
            <div
              className="Icon__container"
              onClick={() => handelMenuOpen(userIdx)}
            >
              <MoreVertIcon />
            </div>
            {isOpen === userIdx ? (
              <div className="Menu">
                <ul menu="Menu__list">
                  <li className="Menu__listItem">
                    <span>
                      <p>Role</p>
                      <ArrowRightIcon />
                      <div className="RolesMenu">
                        <ul className="RolesMenu__rolesList">
                          <li className="RoleMenu__roles">
                            <span>Admin</span>
                          </li>
                          <li className="RoleMenu__roles">
                            <span>Moderator</span>
                          </li>
                          <li className="RoleMenu__roles">
                            <span>user</span>
                          </li>
                        </ul>
                      </div>
                    </span>
                  </li>
                  <li className="Menu__listItem">
                    <span>Delete</span>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </li>
      );
    });
  };
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
          <ul>{renderUsers()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
