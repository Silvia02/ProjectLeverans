import React from 'react'
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
import '../ShippingDetails/shipping.css'

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(3),
    }
  }
}))
 
export const ShippingForm = () => {

  const classes = useStyle();
  const paperStyle = { padding: 20, width: 320, height: '60vh', margin: '25px' }
  return (
    <div className='shippingDetails'>
      <h1> Shippind Details </h1>
        <form className={classes.root}>
        <Grid container>
          <div className = 'formdetails'>
            <Grid item xs={6}>
              <Paper elevation = {10} style={paperStyle}>
              <TextField
                label='Full Name'
                variant='outlined'
                  size='small'
                  required
              />
              <TextField
              label = 'Email'
              variant = 'outlined'
                  size='small'
                  required
                />
              <TextField
              label = 'Address'
              variant = 'outlined'
                  size='small'
                  required
                />
              <TextField
              label = 'Zipcode'
              variant = 'outlined'
                  size='small'
                  required
                />
              <TextField
              label = 'City'
              variant = 'outlined'
                  size='small'
                  required
                />
                </Paper>
            </Grid>
            </div>
            <div className='priceDetails'>
            <Grid item xs={6} align='center'>
              <Paper elevation = {10}
                style={paperStyle}>
                priceDetails
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Items</TableCell>
                      <TableCell align='right'>Quantity</TableCell>
                      <TableCell align='right'>Price</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell rowSpan={3}/>
                      <TableCell colSpan={1}> Total Amount </TableCell>
                      <TableCell align='right'>xxxkr</TableCell>
                    </TableRow>
                  </TableHead>
               </Table> 
              </Paper>
                </Grid>
            </div>
          </Grid>
      </form>
        <br></br>
          <button>
            Checkout </button>
    </div>
  )
}
export default ShippingForm