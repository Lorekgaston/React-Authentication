import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { user } = useSelector(state => state.login);
  console.log(user);
  return (
    <div className="Home">
      <div className="Home__userInfo">
        <h2>Username: {user.user.userName}</h2>
        <h2>Email: {user.user.email}</h2>
        <h2>Role: {user.user.role}</h2>
        <h2>ID: {user.user._id}</h2>
      </div>
    </div>
  );
};

export default Home;
