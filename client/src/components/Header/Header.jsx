import React, {useState} from 'react'
import { Avatar , Button, Menu, MenuItem} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import '../Header/header.css'
import { useHistory } from "react-router";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';


const Header = ({stayLogedin, userName }) => {
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
           <ArrowBackIosIcon style={{ marginTop: "40px" }} onClick={() => { window.history.back(); }}></ArrowBackIosIcon>
         </div>
         <div>
           <p id ="title" style={{ marginTop: 45, fontFamily: 'fantasy' }}> The Shoe Store</p>
          </div>
         <div className="avatar">
           <Avatar area-aria-controls="menu" style={iconStyle} onClick={handleMenu} />
            <h3>{userName}</h3>
         </div>
        </div>
       <Menu
         style={{marginTop:"40px",marginLeft:"-10px"}}
         id="menu"
         onClose={handleClose}
         anchorEl={anchorEl}
         open={Boolean(anchorEl)}>
         <MenuItem onClick={handleClose}>
            <FavoriteBorderOutlinedIcon fontSize="large" style={iconStyle}/>
         </MenuItem>
         <MenuItem onClick={handleClose}>
            <h4 onClick={handleLogout}>Logout</h4>
         </MenuItem>
       </Menu>
   </>    
  )
 }
const iconStyle = {
  marginTop: 30,
  marginRight: -10,
  
}
export default Header;