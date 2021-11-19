import styled from 'styled-components';
import {AddFavouritetoCartButton} from '../../pages/FavouritesStyle.jsx';

export const ElectronButtonWrapper = styled.div`
  display: flex;
  width: calc(75% + 8px);
`

export const ElectronButton = styled(AddFavouritetoCartButton)`
  flex: 1 1 50%;

  @media only screen and (max-width: 640px) {
    padding: 5px;
    font-size: 1em;
  }
`

export const ElectronLoadMessage = styled.span`
  color: #444;
  font-size: 20px;
  margin: 10px;
`
