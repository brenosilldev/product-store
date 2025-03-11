import mongoose from "mongoose";
import {ProductModel} from "../models/products.js";

class ProductController {

    async CreateProduct(req, res) {

        if(!req.body.name || !req.body.price || !req.body.image) {
            return res.status(400).json({
                message: "Missing required fields",
            });
        }

        const product = new ProductModel({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
        });

        try {
        
            const savedProduct = await product.save();
            // return a success message
            res.status(201).json({
                message: "Product created successfully",
                product: savedProduct,
            });
        } catch (error) {
            // return an error message if something goes wrong
            res.status(400).json({
                message: "Error creating product",
                error: error,
            });
        }
    }

    async GetProducts(req, res) {
        try {
            const products = await ProductModel.find();
            res.status(200).json({
                message: "Products fetched successfully",
                products: products,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error fetching products",
                error: error,
            });
        }
    }

    async GetProductsDetails(req, res) {
        try {
            const products = await ProductModel.findById(req.params.id);
            res.status(200).json({
                message: "Products successfully",
                products: products,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error fetching products",
                error: error,
            });
        }
    }

    async UpdateProduct(req, res) {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({    
                message: "Product not found",
            });
        }

        try {
            // Atualizar os campos que tiver no req.body
            const products = await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new: true});
            res.status(200).json({
                message: "Products altered successfully",
                products: products,
                success: true
            });
        } catch (error) {
            res.status(400).json({
                message: "Error fetching products",
                error: error,
                success: false
            });
        }
    }

    async DeleteProduct(req, res) {
        try {
            
            const product = await ProductModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Product deleted successfully",
                success: true,
            });
        } catch (error) {
            res.status(400).json({
                message: "Error deleting product",
                error: error,
                success: false,
            });
        }
    }

}

export  {ProductController}