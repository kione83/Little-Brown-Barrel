const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Endpoint to update products
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    const filePath = path.join(__dirname, 'src', 'products.json');

    // Read the existing products
    fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
            return res.status(500).json({ error: 'Failed to read products file' });
        }

        // Parse JSON data
        const products = JSON.parse(data);

        // Add the new product
        products.push(newProduct);

        // Write the updated products back to the file
        fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to write products file' });
            }
res.status(200).json({ message: 'Product added successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});