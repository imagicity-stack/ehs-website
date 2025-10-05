import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    gradeApplyingFor: { type: String, required: true },
    message: { type: String }
  },
  { timestamps: true, collection: 'applications' }
);

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;
