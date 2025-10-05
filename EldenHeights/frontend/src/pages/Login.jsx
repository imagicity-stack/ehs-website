import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: 'Student' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Authenticating...' });
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      const response = await axios.post(`${API_BASE_URL}/api/login`, formData);
      setStatus({ type: 'success', message: `Welcome ${response.data.role}. Redirecting to EL-NODE...` });
      window.open('https://el-node.eldenheights.edu', '_blank');
    } catch (error) {
      console.error('Login error', error);
      setStatus({ type: 'error', message: 'Invalid credentials. Please try again or contact system admin.' });
    }
  };

  return (
    <div className="fade-in flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">
        <h2 className="text-center text-3xl font-semibold text-cardinal">EL-NODE Portal Access</h2>
        <p className="mt-3 text-center text-sm text-gray-600">
          Choose your role to access the respective dashboards hosted on the EL-NODE suite.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
            >
              <option>Student</option>
              <option>Parent</option>
              <option>Staff</option>
              <option>Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-cardinal px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-cardinal/90"
          >
            Login to EL-NODE
          </button>
          {status.message && (
            <p
              className={`text-sm text-center ${
                status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-gray-500'
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
