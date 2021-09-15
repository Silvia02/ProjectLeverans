import React, {useState} from 'react'
import { Avatar , Button, Menu, MenuItem} from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import '../Header/header.css'
import { useHistory } from "react-router";

const Header = ({ setUserLogin }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogout = () => {
    history.push("/login")
     setUserLogin({})

  }
   
   return (
     <>
       {/*Add logo*/}
    <div className="header">
         <Avatar area-aria-controls="menu" style={iconStyle} onClick={handleMenu}/>
      <div className="userStyle">
           <h3>userName</h3>
         </div>
         <ShoppingCartOutlinedIcon fontSize="large" style={{marginRight:"30px",marginTop:"20px",marginLeft:"30px"}}/>
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
  marginTop: 10,
  
}
export default Header;