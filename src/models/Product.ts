import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'productName cannot be grater than 200 characters']
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      enum: ['bike', 'accessory'],
      required: true
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
