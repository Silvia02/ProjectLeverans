import React from 'react'

const Favourites = () => {
  return (
    <div>
      <h1>Favourites page</h1>
      <p>{favourites.length}</p>
      <div>
        {favourites.length === 0 && <div>Favourites list is empty</div>}
        {favourites.map(favourite => (
          <div key={favourite._id}>
            <div>{favourite.name}</div>
            <div>
              <button onClick={() => onAdd(favourite)}>+</button>
              <button onClick={() => onRemove(favourite)}>-</button>
            </div>
            <div>
              <img src={favourite.image} alt="" />
              <p>{favourite.name}</p>
              <span>{favourite.quantity} x ${favourite.price.toFixed(2)}</span>
            console.log(favourite)
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favourites;
