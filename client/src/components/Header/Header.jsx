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

  }
   
   return (
     <>
       
       <div className="header">
        <Link to="/"><ArrowBackIosIcon style={{marginTop:45,marginRight:20,color: 'red',fontSize:35}}></ArrowBackIosIcon></Link>
        <h2 style={{marginTop:45,fontFamily:'fantasy', marginRight:255}}> The Shoe Store</h2>
         <Avatar area-aria-controls="menu" style={iconStyle} onClick={handleMenu}/>
      <div className="userStyle">
           <h4>{userName}</h4>
         </div>
         <ShoppingCartOutlinedIcon fontSize="large" style={{marginRight:"30px",marginTop:"40px",marginLeft:"30px"}}/>
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
  
}
export default Header;