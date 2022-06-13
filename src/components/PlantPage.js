import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList, setPlantsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlantsList(data))
      .catch((error) => window.alert(error));
  }, []);

  function handleSubmitPlant(newPlant) {
    const newPlantsList = [...plantsList, newPlant];
    setPlantsList(newPlantsList);
  }

  function handlePriceChange(newPlant) {
    const newPlantsList = plantsList.map((plant) =>
      plant.id === newPlant.id ? (plant = newPlant) : plant
    );
    setPlantsList(newPlantsList);
  }

  function handleDelete(id) {
    const newPlantsList = plantsList.filter((plant) => plant.id !== id);
    setPlantsList(newPlantsList);
  }

  const filteredPlantsList = plantsList.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm handleSubmitPlant={handleSubmitPlant} />
      <Search search={search} setSearch={setSearch} />
      <PlantList
        plantsList={filteredPlantsList}
        handlePriceChange={handlePriceChange}
        handleDelete={handleDelete}
      />
    </main>
  );
}

export default PlantPage;
