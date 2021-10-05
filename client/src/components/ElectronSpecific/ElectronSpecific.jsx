import React, { useState, useEffect, useContext } from "react";

export default function ElectronSpecific({setFavourites}) {
  const require = window.require;

  // Dialog and remote from electron
  const {ipcRenderer} = require('electron');
  const remote = require('@electron/remote');

  // Use dialog via remote
  const {dialog} = remote;

  // Use the fs and paths modules from node
  const fs = require('fs');
  const path = require('path');
  const [favouritesLists, setFavouritesLists] = useState([]);
 
 

  useEffect(() => {
    fetchFavourites();
  }, []);

  useEffect(() => {
    ipcRenderer.on('menuChoice', (ipcEvent, choice) => {
      if (choice === 'Save current wish list') {
        //const wishLists = fetchFavourites();
        //console.log(wishLists);
        saveFavouritesAsFile(favouritesLists);
        console.log(favouritesLists)
      }
      if (choice === 'Load a wish list') {
        loadFavouritesFromFile();
      }
      return () => ipcRenderer.off('menuChoice');
    });
  }, [favouritesLists]);
  

  const fetchFavourites = async () => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`/api/favourites/${userId}`);
    const data = await response.json();
    console.log(data);
    setFavouritesLists(data);
  }

  const saveFavouritesAsFile = async (favouritesLists) => {
      let text = '';
      const data = await dialog.showSaveDialog({
        properties: ['createDirectory'],
        title: 'Select the File Path to save',
        defaultPath: path.join(__dirname, '../desktop/wishlist.txt'),
        filters: [
          {
            name: 'Text Files',
            extensions: ['txt', 'docx']
          },]
      }).then(file => {
        // Stating whether dialog operation was cancelled or not.
        if (!file.canceled) {
          for (let i = 0; i < favouritesLists.length; i++) {
            text += favouritesLists[i].name + '\n'; 
          }
          fs.writeFile(
            file.filePath.toString(),
            text,
            function (err) {
              if (err) throw err;
              console.log('Saved!');
            });
        }
      }).catch(err => {
        console.log(err)
      });
    }
  {/*const downloadWishList = async () => {
    let text = '';
    const data = await dialog.showSaveDialog({
      properties: ['createDirectory'],
      title: 'Select the File Path to save',
      defaultPath: path.join(__dirname, '../desktop/wishlist.txt'),
      buttonLabel: 'Save',
      filters: [
        {
          name: 'Text Files',
          extensions: ['txt', 'docx']
        },]
    }).then(file => {
      // Stating whether dialog operation was cancelled or not.
      if (!file.canceled) {
        console.log(favouritesLists);
        for (let i = 0; i < favouritesLists.length; i++) {
          text += favouritesLists[i].name + '\n';
          fs.writeFile(file.filePath.toString(),
            text, function (err) {
              if (err) throw err;
              console.log('Saved!');

            });
        }
        //setFavouritesFile(path.basename(file.filePath));
        //setShowMessage('write')
      }
    }).catch(err => {
      console.log(err)
    });
  }; */}
  const loadFavouritesFromFile = async () => {
    const data = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [{
        name: 'Text Files',
        extensions: ['txt']
      }]
    });

    if (!data.canceled) {
      const filePath = data.filePaths[0];
      console.log(path);

      // Extract file content and format it
      const content = fs.readFileSync(filePath, {encoding: 'utf-8'});
      const formattedContent = content.split('\n');
      setFileAsFavourites(formattedContent);
    }
  }

  const setFileAsFavourites = async (favourites) => {
    const userId = JSON.parse(window.localStorage.getItem('MyUser'))._id;
    const response = await fetch(`/api/favourites/addFile/${userId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({favourites})
    });
    const data = await response.json();
    setFavourites(data);
  }

  return (
    <div>
      {/*<SaveButton onClick={() => downloadWishList()}>&darr;</SaveButton>*/}
      <span style={{ display: 'none' }}>ELECTRONSPECIFIC</span>    
    </div>
    
  )
}
