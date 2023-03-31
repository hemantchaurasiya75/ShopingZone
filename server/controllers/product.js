const Product = require('../models/Product');

class ProductControllers {
    // create new product
    async createProduct(req, res) {
        const { name, price, description, image, countInStock } = req.body;
        try {
            const productExist = await Product.findOne({ name });
            if (productExist) {
                res.status(401).json('Product name already exist');
            } else {
                const product = new Product({
                    name,
                    price,
                    description,
                    image,
                    countInStock,
                    user: req.user._id,
                });
                if (product) {
                    const createdproduct = await product.save();
                    res.status(201).json(createdproduct);
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // get single product
    async getProduct(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json("Product not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // get all product
    async getAllProducts(req, res) {
        const pageSize = 12;
        const page = Number(req.query.pageNumber) || 1;
        try {
            const keyword = req.query.keyword
                ? {
                    name: {
                        $regex: req.query.keyword,
                        $options: "i",
                    },
                }
                : {};
            const count = await Product.countDocuments({ ...keyword });
            const products = await Product.find({ ...keyword })
                .limit(pageSize)
                .skip(pageSize * (page - 1))
                .sort({ _id: -1 });
            res.status(200).json({ products, page, pages: Math.ceil(count / pageSize) });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // admin get all products
    async getAllProductsbyAdmin(req, res) {
        try {
            const products = await Product.find({}).sort({ _id: -1 });
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // product review
    async productReview(req, res) {
        try {
            const { rating, comment } = req.body;
            const product = await Product.findById(req.params.id);
            if (product) {
                const alreadyReviewed = product.reviews.find(
                    (r) => r.user.toString() === req.user._id.toString()
                );
                if (alreadyReviewed) {
                    res.status(400).json("Product already Reviewed");
                }
                const review = {
                    name: req.user.name,
                    rating: Number(rating),
                    comment,
                    user: req.user._id,
                };

                product.reviews.push(review);
                product.numReviews = product.reviews.length;
                product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
                await product.save();
                res.status(201).json({ message: "Reviewed Added" });
            } else {
                res.status(404).json("Product not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // delete product
    async deleteProduct(req, res) {
        try {
            const product = await Product.findById(req.params.id);
            if (product) {
                await product.remove();
                res.status(200).json({ message: "Product deleted" });
            } else {
                res.status(404).json("Product not Found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    // update product
    async updateProduct(req, res) {
        try {
            const { name, price, description, image, countInStock } = req.body;
            const product = await Product.findById(req.params.id);
            if (product) {
                product.name = name || product.name;
                product.price = price || product.price;
                product.description = description || product.description;
                product.image = image || product.image;
                product.countInStock = countInStock || product.countInStock;

                const updatedProduct = await product.save();
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json("Product not found");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = new ProductControllers();