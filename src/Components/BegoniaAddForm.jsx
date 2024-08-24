import React, { useState } from 'react';

export default function BegoniaAddForm() {
    const [begonia, setBegonia] = useState({
        name: '',
        price: '',
        in_stock: true,
        category: '',
        supplier_id: '',
        leaf_color: '',
        leaf_pattern: '',
        leaf_size: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBegonia({ ...begonia, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('New Begonia:', begonia);
        // Handle the form submission, such as making an API call to add the begonia
    };

    return (
        <div className="BegoniaAddForm">
            <h1>Add a New Begonia</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={begonia.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={begonia.price} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="in_stock">In Stock:</label>
                    <select 
                        id="in_stock" 
                        name="in_stock" 
                        value={begonia.in_stock} 
                        onChange={handleChange} 
                        required
                    >
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        value={begonia.category} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="supplier_id">Supplier ID:</label>
                    <input 
                        type="number" 
                        id="supplier_id" 
                        name="supplier_id" 
                        value={begonia.supplier_id} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="leaf_color">Leaf Color:</label>
                    <input 
                        type="text" 
                        id="leaf_color" 
                        name="leaf_color" 
                        value={begonia.leaf_color} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="leaf_pattern">Leaf Pattern:</label>
                    <input 
                        type="text" 
                        id="leaf_pattern" 
                        name="leaf_pattern" 
                        value={begonia.leaf_pattern} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="leaf_size">Leaf Size:</label>
                    <input 
                        type="text" 
                        id="leaf_size" 
                        name="leaf_size" 
                        value={begonia.leaf_size} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={begonia.description} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </div>
                <button type="submit">Add Begonia</button>
            </form>
        </div>
    );
}
