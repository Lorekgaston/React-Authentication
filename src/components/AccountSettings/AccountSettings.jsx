import React, { useState } from 'react';
import './AccountSettings.scss';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditProfile from '../EditProfile/EditProfile';
import ChangePassword from '../ChangePassword/ChangePassword';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper
  }
}));

const AccountSettings = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const history = useHistory();
  //const classes = useStyles();
  const handleListItemClick = (e, url, index) => {
    setSelectedIndex(index);
    history.push(url);
  };
  return (
    <div className="accountSettings">
      <div className="accountSettings__sideBar">
        <List component="nav">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={e => handleListItemClick(e, '/account/edit', 0)}
          >
            <ListItemText primary="Edit Profile" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={e => handleListItemClick(e, '/account/password', 1)}
          >
            <ListItemText primary="Change Password" />
          </ListItem>

          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={e => handleListItemClick(e, 2)}
          >
            <ListItemText primary="Manage Friends" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 3}
            onClick={e => handleListItemClick(e, 3)}
          >
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
      </div>
      <div className="accountSettings__options">
        <Switch>
          <Route path="/account/edit">
            <EditProfile />
          </Route>
          <Route path="/account/password">
            <ChangePassword />
          </Route>
        </Switch>
        {/* <EditProfile />
        <ChangePassword /> */}
      </div>
    </div>
  );
};

export default AccountSettings;
