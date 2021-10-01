import React, {useState, useEffect, useContext} from 'react';
import ApiUrlContext from '../ApiUrlContext.js';
import {Grid, Typography, Paper, Box, } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {SizeButtonWrapper, SizeButton} from './ProductStyle.jsx';
import {
  FavouritesWrapper,
  FavouritesLists,
  FavouriteCard,
  FavouriteImg,
  FavouriteHeader,
  Backdrop,
  Modal,
  ModalHeading,
  InvertedAddtoCartButton,
  AddFavouritetoCartButton, FavouriteProductInfo
} from './FavouritesStyle.jsx';
import favouriteImg from '../images/heart.png';
import Footer from '../components/footer/Footer.jsx';

const Favourites = ({favourites, setFavourites}) => {
  const ApiUrl = useContext(ApiUrlContext);
  const [size, setSize] = useState(null);
  const [showSizePicker, setShowSizePicker] = useState(false);

  useEffect(() => {
    fetchFavourites();
    setShowSizePicker(false);
  }, [])


  const fetchFavourites = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/favourites/${userId}`);
    const data = await response.json();
    setFavourites(data);
  }

  const removeProduct = async (index) => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/favourites/remove/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({index})
    });
    const data = await response.json();
    setFavourites(data);
  }

  const addFavouritesToCart = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/favourites/addToCart/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({size})
    });
    const data = await response.json();
    setShowSizePicker(false);
    setFavourites(data);
  }

  return (
    <div>
      <FavouritesWrapper>
        <FavouriteHeader>
          <img src={favouriteImg} alt="favourite" style={{width: "55px", height: 'auto', marginRight: "2px"}} />
          <h1 style={{fontFamily: 'fantancy', marginLeft: "0px", marginTop: "2px"}}>Favourites</h1>
        </FavouriteHeader>
        {favourites.length ? (
          <>
            <FavouritesLists>
              {
                favourites.map((product, index) => (
                  <FavouriteCard key={product._id} display="flex" alignItems="center" style={{justifyContent: 'space-between'}}>
                    <FavouriteImg src={product.image} alt={product.name} />
                    <FavouriteProductInfo>
                      <span >{product.name}</span>
                      <span style={{marginTop: '10%'}}>£{product.price}</span>
                    </FavouriteProductInfo>
                    <HighlightOffIcon size="20" style={{cursor: 'pointer', marginLeft: "auto"}} onClick={() => removeProduct(index)} />
                  </FavouriteCard>
                ))
              }
            </FavouritesLists>
            <AddFavouritetoCartButton style={{whiteSpace: "nowrap"}} onClick={() => setShowSizePicker(true)}>Add to cart</AddFavouritetoCartButton>
          </>
        ) : null}
        {showSizePicker ? (
          <>
            <Backdrop onClick={() => {
              setShowSizePicker(false);
              setSize(null); // disables confirm button incase size was selected
            }} />
            <Modal>
              <ModalHeading>What is your size?</ModalHeading>
              <SizeButtonWrapper> {/* conditional styling will be added when size matches button */}
                <SizeButton selected={size === 37} onClick={() => setSize(37)}>37</SizeButton>
                <SizeButton selected={size === 38} onClick={() => setSize(38)}>38</SizeButton>
                <SizeButton selected={size === 39} onClick={() => setSize(39)}>39</SizeButton>
                <SizeButton selected={size === 40} onClick={() => setSize(40)}>40</SizeButton>
                <SizeButton selected={size === 41} onClick={() => setSize(41)}>41</SizeButton>
                <SizeButton selected={size === 42} onClick={() => setSize(42)}>42</SizeButton>
                <SizeButton selected={size === 43} onClick={() => setSize(43)}>43</SizeButton>
                <SizeButton selected={size === 44} onClick={() => setSize(44)}>44</SizeButton>
                <SizeButton selected={size === 45} onClick={() => setSize(45)}>45</SizeButton>
                <SizeButton selected={size === 46} onClick={() => setSize(46)}>46</SizeButton>
              </SizeButtonWrapper>
              <InvertedAddtoCartButton disabled={!size} onClick={addFavouritesToCart}>Confirm</InvertedAddtoCartButton>
            </Modal>
          </>
        ) : null}
      </FavouritesWrapper>
      <Footer />
    </div>
  )
}

export default Favourites;
