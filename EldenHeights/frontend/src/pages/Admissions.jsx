import { useState } from 'react';
import axios from 'axios';

const steps = [
  {
    title: 'Step 1 — Inquiry',
    description: 'Submit an online inquiry and receive a personalised admissions kit within 24 hours.'
  },
  {
    title: 'Step 2 — Assessment',
    description: 'Students undertake aptitude diagnostics and parents join an interactive school walkthrough.'
  },
  {
    title: 'Step 3 — Enrollment',
    description: 'Complete documentation, select residential preferences, and confirm scholarships if awarded.'
  }
];

const fees = [
  { grade: 'Grades 1 - 5', tuition: '₹2,40,000', boarding: '₹1,50,000', total: '₹3,90,000' },
  { grade: 'Grades 6 - 8', tuition: '₹2,80,000', boarding: '₹1,80,000', total: '₹4,60,000' },
  { grade: 'Grades 9 - 12', tuition: '₹3,40,000', boarding: '₹2,10,000', total: '₹5,50,000' }
];

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gradeApplyingFor: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting your application...' });

    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      await axios.post(`${API_BASE_URL}/api/admissions`, formData);
      setStatus({ type: 'success', message: 'Application submitted successfully. Our admissions team will contact you shortly.' });
      setFormData({ fullName: '', email: '', phone: '', gradeApplyingFor: '', message: '' });
    } catch (error) {
      console.error('Admissions submission error', error);
      setStatus({
        type: 'error',
        message: 'We were unable to submit your application at this time. Please try again later or reach us at admissions@eldenheights.edu.'
      });
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
      <section className="fade-in space-y-4 text-center">
        <h2 className="text-4xl font-semibold text-cardinal">Admissions Pathway</h2>
        <p className="text-gray-600">
          The Elden Heights School welcomes aspirants who embody courage, curiosity, and compassion. Our admissions pathway is
          designed to be responsive, transparent, and personalised for every family.
        </p>
      </section>

      <section id="admissions-process" className="fade-in grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm">
            <h3 className="text-lg font-semibold text-cardinal">{step.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </section>

      <section id="admissions-fees" className="fade-in overflow-hidden rounded-3xl bg-white shadow-lg">
        <div className="bg-cardinal px-6 py-4 text-lg font-semibold uppercase tracking-[0.35em] text-white">Fee Structure</div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-700">Grade</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-700">Tuition (Annual)</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-700">Boarding (Optional)</th>
                <th scope="col" className="px-6 py-3 text-left font-semibold text-gray-700">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {fees.map((row) => (
                <tr key={row.grade} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.grade}</td>
                  <td className="px-6 py-4 text-gray-600">{row.tuition}</td>
                  <td className="px-6 py-4 text-gray-600">{row.boarding}</td>
                  <td className="px-6 py-4 text-gray-600">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admissions-form" className="fade-in rounded-3xl bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold text-cardinal">Application Form</h3>
        <p className="mt-2 text-sm text-gray-600">
          Submit your details and our admissions counsellors will connect with you to craft a personalised learning journey.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              placeholder="Your full name"
            />
          </div>
          <div className="md:col-span-1">
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
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              placeholder="Contact number"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Grade Applying For</label>
            <select
              name="gradeApplyingFor"
              value={formData.gradeApplyingFor}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
            >
              <option value="">Select grade</option>
              <option value="primary">Primary (1 - 5)</option>
              <option value="middle">Middle (6 - 8)</option>
              <option value="senior">Senior (9 - 12)</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              placeholder="Share specific interests, achievements, or questions"
            ></textarea>
          </div>
          <div className="md:col-span-2 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="rounded-full bg-cardinal px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-cardinal/90"
            >
              Submit Application
            </button>
            {status.message && (
              <p
                className={`text-sm ${
                  status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Admissions;
