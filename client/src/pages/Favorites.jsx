import React from 'react'

const Favorites = ({favorites, onAdd, onRemove}) => {
  return (
    <div>
      <h1>Favorites page</h1>
      <p>{favorites.length}</p>
      <div>
      {favorites.length === 0 && <div>Favorites list is empty</div>}
      {favorites.map(favorite => (
        <div key={favorite._id}>
          <div>{favorite.name}</div>
          <div>
            <button onClick={() => onAdd(favorite)}>+</button>
            <button onClick={()=>onRemove(favorite)}>-</button>
          </div>
          <div>
            <img src={favorite.image} alt=""/>
            <p>{favorite.name}</p>
            <span>{favorite.quantity} x ${favorite.price.toFixed(2)}</span>
            console.log(favorite)
          </div>
        </div>
      ))} 
      </div>
    </div>
  )
}

export default Favorites
