import styled from 'styled-components';
import {AddtoCartButton} from './ProductStyle.jsx';

export const FavouritesWrapper = styled.div`
  position: relative;
  padding-top: 20px;
  height: calc(100vh - 130px);
  overflow: auto;
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled(Backdrop)`
  margin: 0 32px;
  background-color: transparent;
  flex-direction: column;
  z-index: 100;
`

export const ModalHeading = styled.h3`
  color: whitesmoke;
  font-size: 24px;
`

export const InvertedAddtoCartButton = styled(AddtoCartButton)`
  background-color: whitesmoke;
  color: rgb(38, 39, 39);
  margin: 0 25px;
  margin-top: 80px;
`
