import react from 'react';
import Layout from './Layout';
import products from './products.json';

function Admin() {
    function updateProducts(e) {
        e.preventDefault();
        const newWhiskeyName = document.getElementById('newWhiskeyName').value;
        const newWhiskeyDesc = document.getElementById('newWhiskeyDesc').value;
        const newWhiskeyPrice = document.getElementById('newWhiskeyPrice').value;
        const newWhiskeyImage = document.getElementById('newWhiskeyImage').value;
        const newWhiskeyFeatured = document.getElementById('newWhiskeyFeatured').value;
        const newWhiskeyWebsite = document.getElementById('newWhiskeyWebsite').value;
        products.push({
            name: newWhiskeyName,
            description: newWhiskeyDesc,
            price: newWhiskeyPrice,
            image: newWhiskeyImage,
            featured: newWhiskeyFeatured,
            website: newWhiskeyWebsite
        });
        console.log(products);
    }
    return (
        <div className="Admin">
        <h1>Admin Panel</h1>
        <p>Here you will add your new whiskeys to your stock. Enter the values in the given areas. </p>
            <ul>
            <li>For the image, you can use any image link on the internet.</li>
            <li>Search for your product and right click the image that you want.</li>
            <li>Select 'copy image address' and then paste that into the image text box.</li>
            <li>Check the tick box if you want to make the new whiskey a 'featured' product.</li>
            </ul>  
        
        <form>
            <input type="text" id="newWhiskeyName" placeholder="Name"/>
            <input type="text" id="newWhiskeyDesc" placeholder="Description"/>
            <input type="text" id="newWhiskeyPrice" placeholder="Price"/>
            <input type="text" id="newWhiskeyImage" placeholder="Image"/>
            <label for="newWhiskeyFeatured">Featured</label>
            <input type="checkbox" id="newWhiskeyFeatured" placeholder="Featured"/>
            <input type="text" id="newWhiskeyWebsite" placeholder="Website"/>
            <button type="submit" onClick={updateProducts} >Add Whiskey</button>
            </form>
        </div>
    );
    }
    export default Admin;
