import { useState, useEffect } from "react";

export default function ElectronSpecific() {

  // Not needed in Vite, but in CRA
  const require = window.require;

  // Use ipcRenderer + remote that can connect to Electron
  // methods only available on the Node side otherwise
  const { ipcRenderer } = require('electron');
  const remote = require('@electron/remote');

  // Use dialog via remote
  const { dialog } = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');

  // State variables
  const [menuChoice, setMenuChoice] = useState('');

  useEffect(() => {
    // On mount of the component
    // add an event listener listening to the Electron main process
    // and the event sent from the main process called menuChoice
    ipcRenderer.on('menuChoice', (ipcEvent, choice) => {
      
      alert(`you have click on the ${choice}`)
      let fileExtensionToUse = "wishlist";
      if (choice === 'Download current wish list') {
        let filePath = dialog.showSaveDialogSync({
          properties: ['createDirectory']
        }); 
        // your logic and something with fs and path eventually to save 
        if (filePath) {
          // add extension if missing
          if (
            filePath.slice(-fileExtensionToUse.length - 1) !==
            '.' + fileExtensionToUse
          ) {
            filePath += '.' + fileExtensionToUse;
          }
          // save text as json
          let text = document.querySelector('.text-to-remember').value;
          fs.writeFileSync(
            filePath,
            JSON.stringify({ textArea: text }, null, '  '),
            'utf-8'
          );
          console.log('userData', app.getPath('userData'))
        }
        console.log('you have click on save file')
      }
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