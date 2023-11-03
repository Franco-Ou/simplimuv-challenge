import mongoose, { Schema } from 'mongoose';

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'name cannot be grater than 200 characters']
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'lastName cannot be grater than 200 characters']
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      maxlength: [200, 'email cannot be grater than 200 characters']
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: [200, 'name cannot be grater than 200 characters']
    }
  },
  {
    timestamps: true
  }
);

const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);

export default Lead;
