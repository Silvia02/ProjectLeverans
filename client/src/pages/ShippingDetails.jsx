import React, {useState} from 'react'
import '../css/shippingDetails.css'
import {
  Grid,
  makeStyles,
  TextField,
  Paper,
} from '@material-ui/core'
import {Scrollbars} from 'react-custom-scrollbars-2';
import {useHistory} from 'react-router';



const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '90%',
      margin: theme.spacing(2),
    }
  }
}))
const initialInputValues = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  zipcode: ""
}
export const ShippingDetails = ({addToShoppingList, removeFromShoppingList, shoppingList}) => {
  const history = useHistory();
  const classes = useStyle();
  const paperStyle = {
    padding: 20,
    width: 370,
    height: '65vh',
    margin: '20px',
  }

  const [values, setValues] = useState(initialInputValues);
  const [errors, setErrors] = useState({});
  const error = "null"

  const handleChange = (e) => {

    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Clear cart on checkout
      const userId = JSON.parse(window.localStorage.getItem("MyUser"))._id;
      await fetch(`/api/cart/clear/${userId}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      // Redirect to thank you page
      history.push('/thankyou')
    }
  }

  const validate = () => {
    let temp = {}
    temp.fullName = values.fullName ? "" : <span style={{color: "red"}}> Full name required!</span>;
    temp.email = (/$|.+@.+..+/).test(values.email) ? "" : <span style={{color: "red"}}>Not a valid email!</span>;
    temp.address = values.address ? "" : <span style={{color: "red"}}> Address of shippinging required!</span>;
    temp.zipcode = values.zipcode ? "" : <span style={{color: "red"}}> Zipcode required!</span>;
    temp.city = values.city ? "" : <span style={{color: "red"}}> Enter your city!</span>;
    setErrors({
      ...temp
    })

    return Object.values(temp).every(x => x == "")
  }

  return (
    <div className='shippingDetails'>
      <h1> Shipping Details </h1>
      <img src="http://mistydaydream.com/wp-content/uploads/2017/04/delivery-1.gif" alt="Delivery.gif" />
      <form className={classes.root} >
        <Grid container >
          <div className='formdetails' >
            <Grid item xs={6}>
              <Paper elevation={10} style={paperStyle} >
                <TextField label='Full Name'
                  variant='outlined'
                  size='small'
                  name='fullName'
                  value={values.fullName}
                  helperText={errors.fullName}
                  onChange={handleChange}
                  required={true} />
                <TextField label='Email'
                  variant='outlined'
                  size='small'
                  name='email'
                  value={values.email}
                  helperText={errors.email}
                  onChange={handleChange}
                  required={true}
                />
                <TextField label='Address'
                  variant='outlined'
                  size='small'
                  name='address'
                  value={values.address}
                  helperText={errors.address}
                  onChange={handleChange}
                  required={true} />
                <TextField label='Zipcode'
                  variant='outlined'
                  size='small'
                  name='zipcode'
                  value={values.zipcode}
                  helperText={errors.zipcode}
                  onChange={handleChange}
                  required={true} />
                <TextField label='City'
                  variant='outlined'
                  size='small'
                  name='city'
                  value={values.city}
                  helperText={errors.city}
                  onChange={handleChange}
                  required={true} />
              </Paper>
            </Grid>
          </div>
        </Grid>
      </form>
      <br></br>
      <button id="checkout" type='submit' onClick={handleSubmit}>
        Checkout </button>

    </div>
  )
}
export default ShippingDetails

