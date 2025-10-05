import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: 'Parent' });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });
    try {
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      await axios.post(`${API_BASE_URL}/api/contact`, formData);
      setStatus({ type: 'success', message: 'Thank you for connecting with Elden Heights. We will respond shortly.' });
      setFormData({ name: '', email: '', message: '', role: 'Parent' });
    } catch (error) {
      console.error('Contact form error', error);
      setStatus({ type: 'error', message: 'Unable to send your message. Please reach us at info@eldenheights.edu.' });
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
      <section className="fade-in space-y-4 text-center">
        <h2 className="text-4xl font-semibold text-cardinal">Connect with Elden Heights</h2>
        <p className="text-gray-600">
          Whether you&apos;re scheduling a campus visit or exploring collaborations, our team will curate a bespoke response within
          one business day.
        </p>
      </section>

      <section className="fade-in grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            title="Elden Heights Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019918638196!2d-122.41941528468285!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA3LjkiVw!5e0!3m2!1sen!2sin!4v1678700000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <h3 className="text-2xl font-semibold text-cardinal">Reach Out</h3>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
                placeholder="Your full name"
              />
            </div>
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
              <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
              >
                <option>Parent</option>
                <option>Student</option>
                <option>Alumni</option>
                <option>Partner</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-2 w-full rounded-xl border-gray-200 bg-gray-50 focus:border-cardinal focus:ring-cardinal"
                placeholder="How can we assist you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-cardinal px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-cardinal/90"
            >
              Send Message
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
          <div className="mt-8 space-y-2 text-sm text-gray-600">
            <p><strong>Admissions Office:</strong> admissions@eldenheights.edu</p>
            <p><strong>Switchboard:</strong> +91 80080 45678</p>
            <p><strong>Office Hours:</strong> Monday to Friday · 9 AM – 5 PM IST</p>
          </div>
        </div>
      </section>

      <section className="fade-in rounded-3xl bg-cardinal p-10 text-white shadow-lg">
        <h3 className="text-2xl font-semibold">Connect on Social</h3>
        <p className="mt-3 text-sm text-white/80">
          Follow @EldenHeightsSchool across digital channels for announcements, student features, and live event coverage.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-[0.3em]">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white px-6 py-2">
            Instagram
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="rounded-full border border-white px-6 py-2">
            YouTube
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white px-6 py-2">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
