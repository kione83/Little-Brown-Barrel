const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());
// Endpoint to get products
app.get("/api/products", (req, res) => {
	const filePath = path.join(__dirname, "src", "products.json");
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Failed to read products file" });
		}
		res.status(200).json(JSON.parse(data));
	});
});


// Endpoint to add a new product
app.post("/api/products", (req, res) => {
	const newProduct = req.body;
	const filePath = path.join(__dirname, "src", "products.json");

	// Read the existing products
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Failed to read products file" });
		}

		// Parse JSON data
		const products = JSON.parse(data);

		// Generate the next ID
		const nextId =
			Math.max(...products.map((product) => parseInt(product.id, 10))) + 1;
		newProduct.id = nextId.toString();

		// Add the new product
		products.push(newProduct);

		// Write the updated products back to the file
		fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to write products file" });
			}

			res.status(200).json({ message: "Product added successfully" });
		});
	});
});

// Endpoint to update a product
app.put("/api/products/:id", (req, res) => {
	const productId = req.params.id;
	const updatedProduct = req.body;
	const filePath = path.join(__dirname, "src", "products.json");

	// Read the existing products
	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Failed to read products file" });
		}

		// Parse JSON data
		const products = JSON.parse(data);

		// Find the product by ID and update it
		const productIndex = products.findIndex(
			(product) => product.id === productId
		);
		if (productIndex === -1) {
			return res.status(404).json({ error: "Product not found" });
		}

		products[productIndex] = { ...products[productIndex], ...updatedProduct };

		// Write the updated products back to the file
		fs.writeFile(filePath, JSON.stringify(products, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to write products file" });
			}

			res.status(200).json({ message: "Product updated successfully" });
		});
	});
});

// Endpoint to delete a product
app.delete('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const filePath = path.join(__dirname, 'src', 'products.json');

    // Read the existing products
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Failed to read products file:', err);
            return res.status(500).json({ error: 'Failed to read products file' });
        }

        // Parse JSON data
        let products = JSON.parse(data);

        // Filter out the product to be deleted
        const newProducts = products.filter((product) => product.id !== productId);

        if (newProducts.length === products.length) {
            console.error('Product not found:', productId);
            return res.status(404).json({ error: 'Product not found' });
        }

        // Write the updated products back to the file
        fs.writeFile(filePath, JSON.stringify(newProducts, null, 2), (err) => {
            if (err) {
                console.error('Failed to write products file:', err);
                return res.status(500).json({ error: 'Failed to write products file' });
            }

            res.status(200).json({ message: 'Product deleted successfully' });
        });
    });
});


app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
