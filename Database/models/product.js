import { Schema, model, models } from "mongoose";

var productSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true,
    required: true,
  },
  desc: String,
  price: Number,
  category: String,
  subcategory: String,
  availableqty: {
    type: Number,
    default: 0,
  },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
