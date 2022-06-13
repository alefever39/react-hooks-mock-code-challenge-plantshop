import React, { useState } from "react";

function PlantCard({ plant, handlePriceChange, handleDelete }) {
  const [inStock, setInStock] = useState(true);

  function handleClick() {
    setInStock((inStock) => !inStock);
  }

  function handleChange(e) {
    const newPrice = { price: e.target.value };
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrice),
    })
      .then((response) => response.json())
      .then((data) => handlePriceChange(data))
      .catch((error) => window.alert(error));
  }

  function handleDeleteButton() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((error) => window.alert(error));
    handleDelete(plant.id);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price:</p>
      <input type="number" value={plant.price} onChange={handleChange} />
      {inStock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDeleteButton}>Delete</button>
    </li>
  );
}

export default PlantCard;
