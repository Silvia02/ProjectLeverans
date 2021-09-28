import React, {useState} from 'react'
import {Avatar, Button, Menu, MenuItem} from '@material-ui/core';
import '../Header/header.css'
import {useHistory} from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({stayLogedin, userName}) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogout = () => {
    stayLogedin({});
    history.push("/")

  }

  return (
    <>
      <div className="header">
        <div>
          <ArrowBackIosIcon className="headerBackArrow" onClick={() => {window.history.back()}}></ArrowBackIosIcon>
        </div>
        <div>
          <p className="title">The Shoe Store</p>
        </div>
        <div className="avatarWrapper" aria-haspopup="true" area-aria-controls="menu" onClick={anchorEl ? handleClose : handleMenu}>
          <div className="avatar">
            <Avatar className="avatarIcon" />
            <h3 className="avatarUsername">{userName.charAt(0).toUpperCase() + userName.slice(1)}</h3>
          </div>
          <Menu
            style={{marginTop: "55px", marginLeft: "-10px"}}
            id="menu"
            onClose={handleClose}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}>
            <MenuItem onClick={handleClose}>
              <h4 onClick={handleLogout}>Logout</h4>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  )
}

export default Header;
