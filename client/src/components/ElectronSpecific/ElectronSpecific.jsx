import React, {useState, useEffect, useContext} from "react";
import {ElectronButtonWrapper, ElectronButton, ElectronLoadMessage} from './ElectronSpecificStyle';
import ApiUrlContext from '../../ApiUrlContext.js';

export default function ElectronSpecific({setFavourites}) {
  const ApiUrl = useContext(ApiUrlContext);

  // Not needed in Vite, but in CRA
  const require = window.require;

  // Use ipcRenderer + remote that can connect to Electron
  // methods only available on the Node side otherwise
  const {ipcRenderer} = require('electron');
  const remote = require('@electron/remote');

  // Use dialog via remote
  const {dialog} = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');

  // State variables
  const [favouritesFile, setFavouritesFile] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // useEffect(() => {
  //   // On mount of the component
  //   // add an event listener listening to the Electron main process
  //   // and the event sent from the main process called menuChoice
  //   ipcRenderer.on('menuChoice', (ipcEvent, choice) => {
  //     if (choice === 'Save current wish list') {
  //       dialog.showSaveDialog({
  //         properties: ['createDirectory']
  //       }).then(data => console.log(data));
  //       // your logic and something with fs and path eventually to save
  //     }
  //     if (choice === 'Load a wish list') {
  //       // let filePaths = dialog.showOpenDialogSync(
  //       dialog.showOpenDialog({
  //         properties: ['openFile'],
  //         // options: {filters: {extensions: ['.wishlist']}}
  //       })
  //         // .then(res => JSON.stringify(res))
  //         .then(data => {
  //           console.log(data);
  //           if (!data.canceled) {
  //             const filePath = data.filePaths[0];
  //             console.log(path);
  //             let content = fs.readFileSync(filePath, {encoding: 'utf-8'});
  //             // setCurrentFilePath(data.filePaths[0])
  //             // setFileContent(content);

  //             const fileName = path.basename(data.filePaths[0]);
  //             setFavouritesFile(fileName);
  //             const formattedContent = content.split('\n');
  //             setFileAsFavourites(formattedContent);
  //           }
  //         })
  //         .catch(error => console.log(error));
  //     }
  //     setMenuChoice(choice);
  //   });

  //   // Return a function to run un unmount of the component
  //   // that will remove the ipcRenderer-listener
  //   return () => ipcRenderer.off('menuChoice');
  // }, []);

  const loadFavouritesFromFile = async () => {
    const data = await dialog.showOpenDialog({
      properties: ['openFile'],
    });

    console.log(data);

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
