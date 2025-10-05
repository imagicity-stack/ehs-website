import jwt from 'jsonwebtoken';

export const loginUser = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role are required' });
  }

  const token = jwt.sign({ email, role }, process.env.JWT_SECRET || 'eldenheights-secret', { expiresIn: '1h' });

  res.json({
    message: 'Login successful',
    token,
    role,
    redirectUrl: 'https://el-node.eldenheights.edu'
  });
};
