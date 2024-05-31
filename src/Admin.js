import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WhiskeyList from './WhiskeyList'; // Import the new component

function Admin() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };

    const [message, setMessage] = useState('');

    async function addProduct(e) {
        e.preventDefault();

        const newProduct = {
            name: document.getElementById('newWhiskeyName').value,
            description: document.getElementById('newWhiskeyDesc').value,
            price: document.getElementById('newWhiskeyPrice').value,
            image: document.getElementById('newWhiskeyImage').value,
            featured: document.getElementById('newWhiskeyFeatured').checked,
            website: document.getElementById('newWhiskeyWebsite').value
        };

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)
            });
            const result = await response.json();
            setMessage(result.message);
            // Clear the form
            document.getElementById('newProductForm').reset();
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to add product');
        }
    }

    async function updateProduct(e) {
        e.preventDefault();

        const updatedProduct = {
            id: document.getElementById('updateWhiskeyId').value,
            name: document.getElementById('updateWhiskeyName').value,
            description: document.getElementById('updateWhiskeyDesc').value,
            price: document.getElementById('updateWhiskeyPrice').value,
            image: document.getElementById('updateWhiskeyImage').value,
            featured: document.getElementById('updateWhiskeyFeatured').checked,
            website: document.getElementById('updateWhiskeyWebsite').value
        };

        try {
            const response = await fetch(`http://localhost:3000/api/products/${updatedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct)
            });
            const result = await response.json();
            setMessage(result.message);
            // Clear the form
            document.getElementById('updateProductForm').reset();
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to update product');
        }
    }

    async function removeProduct(e) {
        e.preventDefault();

        const productId = document.getElementById('removeWhiskeyId').value;

        try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            setMessage(result.message);
            // Clear the form
            document.getElementById('removeProductForm').reset();
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to remove product');
        }
    }

    return (
        <div className="admin-panel">
            <div className="admin-panel-head">
                <h1>Admin Panel</h1>
                <p>Here you can manage your products. Use the forms below to add, update, or remove products.</p>
                <button onClick={handleLogout}>Logout</button>
            {message && <p>{message}</p>}
            </div>
            
            <div className="admin-panel-content">
                <div className="whiskey-list-container">
                    <WhiskeyList /> {/* Include the WhiskeyList component */}
                </div>

                <div className="forms-container">
                    <form id="newProductForm" className="admin-form">
                        <h2>Add Product</h2>
                        <input type="text" id="newWhiskeyName" placeholder="Name" />
                        <input type="text" id="newWhiskeyDesc" placeholder="Description" />
                        <input type="text" id="newWhiskeyPrice" placeholder="Price" />
                        <input type="text" id="newWhiskeyImage" placeholder="Image" />
                        <label htmlFor="newWhiskeyFeatured">Featured</label>
                        <input type="checkbox" id="newWhiskeyFeatured" placeholder="Featured" />
                        <input type="text" id="newWhiskeyWebsite" placeholder="Website" />
                        <button type="submit" onClick={addProduct}>Add Whiskey</button>
                    </form>

                    <form id="updateProductForm" className="admin-form">
                        <h2>Update Product</h2>
                        <input type="text" id="updateWhiskeyId" placeholder="Product ID" />
                        <input type="text" id="updateWhiskeyName" placeholder="Name" />
                        <input type="text" id="updateWhiskeyDesc" placeholder="Description" />
                        <input type="text" id="updateWhiskeyPrice" placeholder="Price" />
                        <input type="text" id="updateWhiskeyImage" placeholder="Image" />
                        <label htmlFor="updateWhiskeyFeatured">Featured</label>
                        <input type="checkbox" id="updateWhiskeyFeatured" placeholder="Featured" />
                        <input type="text" id="updateWhiskeyWebsite" placeholder="Website" />
                        <button type="submit" onClick={updateProduct}>Update Whiskey</button>
                    </form>

                    <form id="removeProductForm" className="admin-form">
                        <h2>Remove Product</h2>
                        <input type="text" id="removeWhiskeyId" placeholder="Product ID" />
                        <button type="submit" onClick={removeProduct}>Remove Whiskey</button>
                    </form>
                </div>
            </div>
            

        </div>
    );
}

export default Admin;