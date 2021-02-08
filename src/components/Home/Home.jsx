import React from 'react';
import { useLoginState } from '../../store/context';

const Home = () => {
  const [state] = useLoginState();
  const { user, error, isLoggedIn } = state;
  return (
    <div>
      <h1>welcome {user.userName}</h1>
    </div>
  );
};

export default Home;
