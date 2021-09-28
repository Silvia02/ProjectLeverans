import React, {useState, useEffect, useContext} from "react";
import {ElectronButtonWrapper, ElectronButton, ElectronLoadMessage} from './ElectronSpecificStyle';
import ApiUrlContext from '../../ApiUrlContext.js';

export default function ElectronSpecific({setFavourites}) {
  const ApiUrl = useContext(ApiUrlContext);
  const [favouritesFile, setFavouritesFile] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Not needed in Vite, but in CRA
  const require = window.require;

  // Dialog and remote from electron
  const remote = require('@electron/remote');
  const {dialog} = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');


  const loadFavouritesFromFile = async () => {
    const data = await dialog.showOpenDialog({
      properties: ['openFile'],
    });

    if (!data.canceled) {
      const filePath = data.filePaths[0];
      console.log(path);

      // Get and set filename from path
      const fileName = path.basename(data.filePaths[0]);
      setFavouritesFile(fileName);

      // Extract file content and format it
      const content = fs.readFileSync(filePath, {encoding: 'utf-8'});
      const formattedContent = content.split('\n');
      setFileAsFavourites(formattedContent);
    }
  }

  const setFileAsFavourites = async (favourites) => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`${ApiUrl}/favourites/addFile/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({favourites})
    });
    const data = await response.json();
    setFavourites(data);
    setShowMessage(true);
  }

  return (
    <>
      <ElectronButtonWrapper>
        <ElectronButton onClick={loadFavouritesFromFile}>Save favourites to file</ElectronButton>
        <ElectronButton onClick={loadFavouritesFromFile}>Load favourites from file</ElectronButton>
      </ElectronButtonWrapper>
      { showMessage && <ElectronLoadMessage>Loaded favourites from {favouritesFile}</ElectronLoadMessage>}
    </>
  )
}
