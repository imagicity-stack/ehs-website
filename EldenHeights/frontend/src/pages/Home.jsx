import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import crest from '../assets/crest.svg';
import gallery1 from '../assets/gallery-1.svg';
import gallery2 from '../assets/gallery-2.svg';
import gallery3 from '../assets/gallery-3.svg';
import virtualTour from '../assets/virtual-tour-360.svg';

const counters = [
  { label: 'Years of Excellence', value: 125 },
  { label: 'National Awards', value: 48 },
  { label: 'Student Clubs', value: 32 },
  { label: 'Global Alumni', value: 9200 }
];

const Home = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const durations = counters.map(() => 1800);
    const increments = counters.map((counter, index) => Math.ceil(counter.value / (durations[index] / 30)));

    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) => {
          const nextValue = count + increments[index];
          return nextValue >= counters[index].value ? counters[index].value : nextValue;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24 pb-24">
      <section className="fade-in relative overflow-hidden bg-hero-pattern text-white">
        <div className="hero-overlay pointer-events-none absolute inset-0" aria-hidden="true"></div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-24 text-center lg:flex-row lg:gap-16 lg:text-left">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <img src={crest} alt="Elden Heights crest" className="h-16 w-16" />
              <p className="text-sm uppercase tracking-[0.4em]">Towards Eternal Glory</p>
            </div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Heritage, Honor, and Innovation for the Next Generation of Leaders
            </h2>
            <p className="text-lg text-white/80">
              The Elden Heights School blends classical wisdom with modern learning to nurture scholars, artists, and champions
              equipped to lead with integrity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/admissions"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-cardinal transition hover:bg-cardinal hover:text-white"
              >
                Admissions Open 2025
              </Link>
              <a
                href="#virtual-tour"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                Virtual Tour
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex flex-1 flex-wrap justify-center gap-6">
            {counts.map((count, index) => (
              <div key={counters[index].label} className="w-40 rounded-2xl border border-white/30 bg-white/10 p-6 text-center">
                <p className="text-4xl font-semibold">{count}+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/80">{counters[index].label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-in mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {[gallery1, gallery2, gallery3].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-3xl shadow-lg">
              <img src={image} alt={`Campus showcase ${index + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="virtual-tour" className="fade-in mx-auto flex max-w-5xl flex-col gap-8 px-6 md:flex-row">
        <div className="flex-1 space-y-4">
          <h3 className="text-3xl font-semibold text-cardinal">Experience Elden Heights from Anywhere</h3>
          <p className="text-sm text-gray-600">
            Take a glimpse into our iconic campus, innovation labs, and championship arenas through our immersive 360° virtual
            tour. Discover how tradition meets technology in every corner of The Elden Heights School.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Guided walkthrough narrated by student ambassadors</li>
            <li>High-definition aerial footage of the 50-acre campus</li>
            <li>Interactive hotspots for academic blocks, hostels, and sports complexes</li>
          </ul>
          <Link
            to="/campus"
            className="inline-block rounded-full bg-cardinal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-cardinal/90"
          >
            Explore Campus Life
          </Link>
        </div>
        <div className="flex-1 overflow-hidden rounded-3xl shadow-xl">
          <img src={virtualTour} alt="360 degree virtual tour placeholder" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="fade-in bg-white py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-6 text-center">
          <h3 className="text-3xl font-semibold text-cardinal">Upcoming Highlights</h3>
          <p className="mx-auto max-w-3xl text-sm text-gray-600">
            Join our upcoming leadership conclaves, international exchange programs, and arts showcases designed to inspire the
            next wave of global citizens from Elden Heights.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {['Leadership Conclave', 'Global Cultural Week', 'Innovation Expo'].map((event) => (
              <div key={event} className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900">{event}</h4>
                <p className="mt-3 text-sm text-gray-600">
                  RSVP through the events portal to secure your place in our distinguished calendar of happenings.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
