import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import crest from '../assets/crest.svg';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/campus', label: 'Campus' },
  { path: '/contact', label: 'Contact' }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={crest} alt="The Elden Heights School crest" className="h-12 w-12" />
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.35em] text-cardinal">Towards Eternal Glory</p>
              <h1 className="text-xl font-semibold text-gray-900">The Elden Heights School</h1>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm uppercase tracking-widest transition-colors duration-200 ${
                  isActive ? 'text-cardinal' : 'text-gray-700 hover:text-cardinal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            className="rounded-full border-2 border-cardinal px-4 py-2 text-sm font-semibold text-cardinal transition hover:bg-cardinal hover:text-white"
          >
            EL-NODE Login
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-cardinal"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="space-y-4 border-t border-gray-200 bg-white px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-sm uppercase tracking-widest transition-colors duration-200 ${
                  isActive ? 'text-cardinal' : 'text-gray-700 hover:text-cardinal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block rounded-full border-2 border-cardinal px-4 py-2 text-center text-sm font-semibold text-cardinal transition hover:bg-cardinal hover:text-white"
          >
            EL-NODE Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
