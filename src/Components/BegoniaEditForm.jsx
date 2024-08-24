import React, { useState, useEffect } from "react";

export default function BegoniaEditForm() {
  const [begonias, setBegonias] = useState([]);
  const [currentBegonia, setCurrentBegonia] = useState({
    id: "",
    name: "",
    price: "",
    in_stock: true,
    category: "",
    supplier_id: "",
    leaf_color: "",
    leaf_pattern: "",
    leaf_size: "",
    description: "",
  });

  // Fetch all begonias on component mount
  useEffect(() => {
    fetch("/api/begonias")
      .then((response) => response.json())
      .then((data) => setBegonias(data))
      .catch((error) => console.error("Error fetching begonias:", error));
  }, []);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentBegonia({ ...currentBegonia, [name]: value });
  };

  // Handle adding a new begonia
  const handleAddBegonia = () => {
    fetch("/api/begonias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentBegonia),
    })
      .then((response) => response.json())
      .then((newBegonia) => {
        setBegonias([...begonias, newBegonia]);
        resetForm();
      })
      .catch((error) => console.error("Error adding begonia:", error));
  };

  // Handle updating an existing begonia
  const handleUpdateBegonia = () => {
    fetch(`/api/begonias/${currentBegonia.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentBegonia),
    })
      .then((response) => response.json())
      .then((updatedBegonia) => {
        const updatedBegonias = begonias.map((begonia) =>
          begonia.id === updatedBegonia.id ? updatedBegonia : begonia
        );
        setBegonias(updatedBegonias);
        resetForm();
      })
      .catch((error) => console.error("Error updating begonia:", error));
  };

  // Handle deleting a begonia
  const handleDeleteBegonia = (id) => {
    fetch(`/api/begonias/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const remainingBegonias = begonias.filter((begonia) => begonia.id !== id);
        setBegonias(remainingBegonias);
        resetForm();
      })
      .catch((error) => console.error("Error deleting begonia:", error));
  };

  // Reset the form
  const resetForm = () => {
    setCurrentBegonia({
      id: "",
      name: "",
      price: "",
      in_stock: true,
      category: "",
      supplier_id: "",
      leaf_color: "",
      leaf_pattern: "",
      leaf_size: "",
      description: "",
    });
  };

  // Handle selecting a begonia for editing
  const handleSelectBegonia = (begonia) => {
    setCurrentBegonia(begonia);
  };

  return (
    <div className="BegoniaEditForm">
      <h1>Manage Begonias</h1>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={currentBegonia.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={currentBegonia.price}
            onChange={handleChange}
          />
        </label>
        <label>
          In Stock:
          <input
            type="checkbox"
            name="in_stock"
            checked={currentBegonia.in_stock}
            onChange={() =>
              setCurrentBegonia({
                ...currentBegonia,
                in_stock: !currentBegonia.in_stock,
              })
            }
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={currentBegonia.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Supplier ID:
          <input
            type="number"
            name="supplier_id"
            value={currentBegonia.supplier_id}
            onChange={handleChange}
          />
        </label>
        <label>
          Leaf Color:
          <input
            type="text"
            name="leaf_color"
            value={currentBegonia.leaf_color}
            onChange={handleChange}
          />
        </label>
        <label>
          Leaf Pattern:
          <input
            type="text"
            name="leaf_pattern"
            value={currentBegonia.leaf_pattern}
            onChange={handleChange}
          />
        </label>
        <label>
          Leaf Size:
          <input
            type="text"
            name="leaf_size"
            value={currentBegonia.leaf_size}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={currentBegonia.description}
            onChange={handleChange}
          ></textarea>
        </label>
        <div>
          {currentBegonia.id ? (
            <button type="button" onClick={handleUpdateBegonia}>
              Update Begonia
            </button>
          ) : (
            <button type="button" onClick={handleAddBegonia}>
              Add Begonia
            </button>
          )}
          <button type="button" onClick={resetForm}>
            Reset Form
          </button>
        </div>
      </form>

      <h2>All Begonias</h2>
      <ul>
        {begonias.map((begonia) => (
          <li key={begonia.id}>
            {begonia.name} - ${begonia.price}
            <button onClick={() => handleSelectBegonia(begonia)}>
              Edit
            </button>
            <button onClick={() => handleDeleteBegonia(begonia.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
