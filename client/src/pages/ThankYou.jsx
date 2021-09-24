import React from 'react'
import { useHistory } from 'react-router'
import Footer from '../components/footer/Footer';
import '../css/thankyou.css'
import byshoes from '../images/byshoe.png';
import facebook from '../images/facebook.jpg';
import instagram from '../images/instagram.jpg';
import twitter from '../images/twitter.jpg';


function ThankYou() {
  const history = useHistory();
  return (
    <>
    <div className="container">
      <div className='order'>
        <p>Your order was completed sucessefully!</p>
        <br></br>
      </div>
       <div className='thanks'>
        <img src={byshoes} alt='sohe'></img>
      <h1>Thank you for shopping with us!</h1>
        <br></br>
        </div>
        <div>
      <button id='continue' onClick={() => { history.push("/") }}>Continue shopping</button>
        </div>
          <br></br>
        <p>Follow us</p>
      <div className='followus'>
          <img src={facebook} alt='facebook' style={{hight:'25px',width:'25px'}}></img>
          <img src={twitter} alt='facebook' style={{hight:'25px',width:'25px'}}></img>
          <img src={instagram} alt='facebook' style={{hight:'25px',width:'25px'}}></img>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default ThankYou
