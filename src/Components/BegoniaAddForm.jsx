import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BegoniaAddForm.css";

const API = import.meta.env.VITE_API_URL;

export default function BegoniaAddForm() {
  const navigate = useNavigate();

  const [newBegonia, setNewBegonia] = useState({
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

  // function to add a new begonia to the library
  function addBegoniaToLibrary() {
    fetch(`${API}/begonias`, {
      method: "POST",
      body: JSON.stringify(newBegonia),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resJSON) => {
        // navigate to the new begonia's detail page after adding
        navigate(`/begonias/${resJSON.id}`);
      })
      .catch((error) => console.error(error));
  }

  // handle changes to text inputs
  function handleTextChange(e) {
    setNewBegonia({ ...newBegonia, [e.target.id]: e.target.value });
  }

  // handle changes to the in_stock checkbox
  function handleCheckboxChange() {
    setNewBegonia({ ...newBegonia, in_stock: !newBegonia.in_stock });
  }

  // handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    addBegoniaToLibrary();
  }

  return (
    <div className="BegoniaAddForm__container">
      <div className="BegoniaAddForm">
        <form className="BegoniaAddForm__form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            begonia name:
            <br />
            <input
              type="text"
              id="name"
              value={newBegonia.name}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="price">
            price:
            <br />
            <input
              type="number"
              id="price"
              value={newBegonia.price}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="in_stock">
            in stock:
            <br />
            <input
              type="checkbox"
              id="in_stock"
              onChange={handleCheckboxChange}
              checked={newBegonia.in_stock}
            />
          </label>
          <br />
          <label htmlFor="category">
            category:
            <br />
            <input
              type="text"
              id="category"
              value={newBegonia.category}
              onChange={handleTextChange}
            />
          </label>
          <br />
          <label htmlFor="supplier_id">
            supplier id:
            <br />
            <input
              type="number"
              id="supplier_id"
              value={newBegonia.supplier_id}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="leaf_color">
            leaf color:
            <br />
            <input
              type="text"
              id="leaf_color"
              value={newBegonia.leaf_color}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="leaf_pattern">
            leaf pattern:
            <br />
            <input
              type="text"
              id="leaf_pattern"
              value={newBegonia.leaf_pattern}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="leaf_size">
            leaf size:
            <br />
            <input
              type="text"
              id="leaf_size"
              value={newBegonia.leaf_size}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <label htmlFor="description">
            description:
            <br />
            <textarea
              id="description"
              value={newBegonia.description}
              onChange={handleTextChange}
              required
            />
          </label>
          <br />
          <button type="submit">add begonia to library</button>
        </form>
      </div>
    </div>
  );
}
