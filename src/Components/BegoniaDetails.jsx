import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../CSS/BegoniaDetails.css'; // Make sure this file exists and has relevant styles

const API = import.meta.env.VITE_API_URL;

export default function BegoniaDetails() {
    const [begonia, setBegonia] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/begonias/${id}`)
            .then(response => response.json())
            .then(responseJSON => setBegonia(responseJSON))
            .catch(error => {
                console.error(error);
                navigate("/notfound");
            });
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/begonias/${id}`, {
            method: "DELETE"
        })
            .then(() => navigate("/begonias"))
            .catch(error => console.error("Failed to delete begonia:", error));
    };

    return (
        <div className="BegoniaDetails">
            <h1>Begonia Details</h1>
            <div className="begonia-image-container">
                <img src={`/images/${begonia.name}.png`} alt={begonia.name} className="begonia-image" />
            </div>
            <div className="begonia-info">
                <p><strong>ID:</strong> {begonia.id}</p>
                <p><strong>Name:</strong> {begonia.name}</p>
                <p><strong>Price:</strong> ${begonia.price.toFixed(2)}</p>
                <p><strong>In Stock:</strong> {begonia.in_stock ? 'Yes' : 'No'}</p>
                <p><strong>Category:</strong> {begonia.category}</p>
                <p><strong>Leaf Color:</strong> {begonia.leaf_color}</p>
                <p><strong>Leaf Pattern:</strong> {begonia.leaf_pattern}</p>
                <p><strong>Leaf Size:</strong> {begonia.leaf_size}</p>
                <p><strong>Description:</strong> {begonia.description}</p>
            </div>
            <div className="buttons">
                <Link to={`/begonias/${id}/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
