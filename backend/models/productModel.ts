import mongoose from "mongoose";
import { Product } from "../types/product";

const productSchema = new mongoose.Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<Product>("Product", productSchema);

export default Product;
