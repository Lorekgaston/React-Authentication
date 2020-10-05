import React from 'react';
import { useLoginState } from '../../store/context';
import { Redirect } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Profile.scss';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18)
  }
}));

const Profile = () => {
  const [state] = useLoginState();
  const classes = useStyles();
  const { user } = state;
  console.log(user);
  return (
    <div className="profile">
      {user ? (
        <Redirect to="/login" />
      ) : (
        <>
          <div className="profile__header">
            <div className="profile__avatar">
              <Avatar
                className={classes.large}
                src="https://res.cloudinary.com/dxk8kglks/image/upload/v1600313871/Olivia%20Fotos/Olivia37_ga3amc.jpg"
              />
              <span>Change Profile Image</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
