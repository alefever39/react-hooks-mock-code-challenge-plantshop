import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsList, handlePriceChange, handleDelete }) {
  console.log(plantsList);

  return (
    <ul className="cards">
      {plantsList.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          handlePriceChange={handlePriceChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default PlantList;
