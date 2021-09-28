import React, { useState, useEffect, useContext} from "react";
//import ApiUrlContext from '../ApiUrlContext.js';

export default function ElectronSpecific(props) {

  // Not needed in Vite, but in CRA
  const require = window.require;
  console.log(props.favouritesLists)
  //const ApiUrl = useContext(ApiUrlContext);
  // Use ipcRenderer + remote that can connect to Electron
  // methods only available on the Node side otherwise
  const { ipcRenderer } = require('electron');
  const remote = require('@electron/remote');

  // Use dialog via remote
  const { dialog } = remote;
  const { app } = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');

  // State variables
  const [menuChoice, setMenuChoice] = useState('');
  //const [favourites, setFavourites] = useState([]);
  
  //const fetchFavourites = async () => {
    //const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    //const response = await fetch(`${ApiUrl}/favourites/${userId}`);
   // const data = await response.json();
   // setFavourites(data);
  //}
  useEffect(() => {
    // On mount of the component
    // add an event listener listening to the Electron main process
    // and the event sent from the main process called menuChoice
    //fetchFavourites();
    ipcRenderer.on('menuChoice', (ipcEvent, choice) => {
      
      let fileExtensionToUse = "wishlist";
      if (choice === 'Download current wish list') {
          dialog.showSaveDialog({
          properties: ['createDirectory']
        }).then(data=> console.log(data))
        // your logic and something with fs and path eventually to save 
        //if (filePath) {
          // add extension if missing
         // if (
           // filePath.slice(fileExtensionToUse.length - 1) !==
            //'.' + fileExtensionToUse
          //) {
           // filePath += '.' + fileExtensionToUse;
         // }
          
          fs.writeFileSync(
           // filePath,
            JSON.stringify({ textArea: props.favouritesLists}, null, '  '),
            'utf-8'
          );
      };
      if (choice === 'Load a wish list') {
        let filePaths = dialog.showOpenDialogSync({
          properties: ['openFile'],
          options: { filters: { extensions: ['.wishlist'] } }
        });
        // your logic and something with fs and path eventually to load
      }
      setMenuChoice(choice);
    });

    // Return a function to run un unmount of the component
    // that will remove the ipcRenderer-listener
    return () => ipcRenderer.off('menuChoice');


  }, []);

  return <>
    <h3>Electron Specific Component</h3>
    <p>Last menu choice: {menuChoice}</p>
  </>
}

//let isElectron = navigator.userAgent.includes('Electron');
//isElectron && ElectronSpecific();
