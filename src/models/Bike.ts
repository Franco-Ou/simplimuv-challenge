import mongoose, { Schema } from 'mongoose';

const BikeSchema = new Schema(
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

const Bike = mongoose.models.Bike || mongoose.model('Bike', BikeSchema);

export default Bike;
