import gallery1 from '../assets/gallery-1.svg';
import gallery2 from '../assets/gallery-2.svg';
import gallery3 from '../assets/gallery-3.svg';
import mapPlaceholder from '../assets/map-placeholder.svg';

const galleryItems = [
  { image: gallery1, title: 'Heritage Courtyard' },
  { image: gallery2, title: 'Scholars Walkway' },
  { image: gallery3, title: 'Innovation Labs' }
];

const Campus = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <section className="fade-in space-y-4 text-center">
        <h2 className="text-4xl font-semibold text-cardinal">Our Campus</h2>
        <p className="text-gray-600">
          Nestled amidst rolling greens and heritage architecture, The Elden Heights School campus is an ecosystem for artistry,
          athletics, and academic discovery.
        </p>
      </section>

      <section className="fade-in grid gap-6 md:grid-cols-3">
        {galleryItems.map((item) => (
          <figure key={item.title} className="overflow-hidden rounded-3xl bg-white shadow-lg">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <figcaption className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-cardinal">
              {item.title}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="fade-in grid items-center gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold text-cardinal">Interactive 3-D Campus Map</h3>
          <p className="text-sm text-gray-600">
            Navigate the Elden Heights campus in 3-D to explore residential houses, academic quadrangles, and championship
            arenas. This placeholder highlights where an embedded 3-D experience or map integration will reside.
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-600">
            <li>Layered campus navigation for day and night modes</li>
            <li>Spotlight on heritage landmarks with audio narratives</li>
            <li>Integration-ready for AR/VR exploration modules</li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img src={mapPlaceholder} alt="3-D campus map placeholder" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="fade-in space-y-6">
        <h3 className="text-2xl font-semibold text-cardinal">360° Immersive Tour</h3>
        <p className="text-sm text-gray-600">
          Experience panoramic views of the House of Scholars, Royal Arena, and The Athenaeum Performing Arts Centre. Replace the
          embedded video below with your produced 360° showcase or third-party tour integration.
        </p>
        <div className="aspect-video overflow-hidden rounded-3xl shadow-2xl">
          <iframe
            title="Elden Heights 360 Tour"
            className="h-full w-full"
            src="https://www.youtube.com/embed/ysz5S6PUM-U"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Campus;
