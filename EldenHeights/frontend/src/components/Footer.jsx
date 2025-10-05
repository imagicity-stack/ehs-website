import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-cardinal text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">The Elden Heights School</h2>
          <p className="max-w-sm text-sm opacity-90">
            A premier heritage institution guiding generations of leaders towards eternal glory through holistic education and
            character excellence.
          </p>
          <div className="text-sm">
            <p>123 Heritage Avenue</p>
            <p>New Crest City, 560045</p>
            <p className="mt-2">Phone: +91 80080 45678</p>
            <p>Email: info@eldenheights.edu</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3">
          <div>
            <h3 className="mb-3 font-semibold uppercase tracking-widest">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
              <li><Link to="/academics" className="hover:text-gray-200">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-gray-200">Admissions</Link></li>
              <li><Link to="/campus" className="hover:text-gray-200">Campus</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold uppercase tracking-widest">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">Instagram</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">YouTube</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-200">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold uppercase tracking-widest">Admissions</h3>
            <ul className="space-y-2">
              <li><a href="#admissions-process" className="hover:text-gray-200">Process</a></li>
              <li><a href="#admissions-fees" className="hover:text-gray-200">Fees</a></li>
              <li><a href="#admissions-form" className="hover:text-gray-200">Apply</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/30 px-6 py-4 text-center text-xs uppercase tracking-[0.35em]">
        © {new Date().getFullYear()} The Elden Heights School · Towards Eternal Glory
      </div>
    </footer>
  );
};

export default Footer;
