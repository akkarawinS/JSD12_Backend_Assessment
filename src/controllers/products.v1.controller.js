import mongoose from 'mongoose'
import { Product } from '../modules/products/products.model.js'

const pd = (doc) => {
    const product = doc.toObject();
    return product;
};
//Return all products
export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ success: true, data: products });
    } catch (err) {
        next(err);
    }
}
//Return a single product by ID
export const getProductsById = async (req, res, next) => {
    try {
        if (!mongoose.isValidObjectId(req.params.id)) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({ success: true, data: product });
    } catch (err) {
        next(err);
    }
}
// Add a new product
export const addProducts = async (req, res, next) => {
    const { name, price, quantity } = req.body || {};


    //Eror handling
    if (!name || !price || !quantity) {
        return res.status(400).json({ success: false, error: 'required name,price,qty' });
    }
    try {
        const doc = await Product.create({ name, price, quantity });
        return res.status(201).json({ success: true, data: pd(doc) });
    } catch (err) {
        next(err);
    }
}

//Update an existing product

export const updateProducts = async (req, res, next) => {
    const { name, price, quantity } = req.body || {};
    const update = {};

    if (name !== undefined) update.name = name;
    if (price !== undefined) update.price = price;
    if (quantity !== undefined) update.quantity = quantity;

    if (Object.keys(update).length === 0) {
        return res.status(400).json({
            success: false,
            error: "At least one field is required to update",
        });
    }
    try {
        const doc = await Product.findByIdAndUpdate(req.params.id, update, {
            returnDocument: "after",
            runValidators: true,
        });

        if (!doc) {
            return res.status(404).json({ success: false, error: "Product not found" });
        }
        return res.status(200).json({ success: true, data: doc });
    } catch (err) {
        err.status = 400;
        next(err);
    }
}

// Remove a product
export const deleteData = async (req, res, next) => {
    try {
        const deletedUser = await Product.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (err) {
        next(err)
    }
}