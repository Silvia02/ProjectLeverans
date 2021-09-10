import React from 'react'
import '../css/mycart.css'
import shoeimage from '../images/highheel.jpeg'
import shoeimage2 from '../images/sportblack.png'

import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Paper,
  TableHead,
  TableCell,
  Table,
  TableRow,
} from '@material-ui/core'

const MyCart = () => {
   const paperStyle = {
     padding: 20,
     width: 320,
     height: 'auto',
     margin: '25px'
   }
  return (
    <div>
      <h1>My Cart</h1>
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          
           <h4>Description</h4>
          <div className='itemImage'>
            <p>Items</p>
                  <img src={shoeimage} />
          <br></br>
           <br></br>
                    <img src={shoeimage2} />
          </div>         
         
        </Paper>
      </Grid>
    </div>
  )
}
export default MyCart