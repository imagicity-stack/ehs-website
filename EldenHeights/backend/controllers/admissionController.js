import Application from '../models/Application.js';

export const submitApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    console.error('submitApplication error', error);
    res.status(500).json({ message: 'Unable to submit application', error: error.message });
  }
};
