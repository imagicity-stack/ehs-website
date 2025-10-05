const milestones = [
  { year: '1900', title: 'Founding Legacy', description: 'The Elden Heights School opens its gates with a cohort of 60 scholars.' },
  { year: '1952', title: 'Global Outlook', description: 'First overseas cultural exchange program introduced to nurture global citizens.' },
  { year: '1998', title: 'Innovation Wing', description: 'Launch of the Innovation and Research Centre for interdisciplinary learning.' },
  { year: '2023', title: 'Sustainability Campus', description: 'Carbon-neutral initiatives and smart classrooms transform the learning experience.' }
];

const accolades = [
  'National Excellence in Education Award 2023',
  'Best Boarding School for Leadership Development 2022',
  'UNESCO Heritage Learning Partner 2021'
];

const About = () => {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-6 py-16">
      <section className="fade-in space-y-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-cardinal">Vision & Mission</h2>
          <p className="mt-4 text-sm text-gray-600">
            The Elden Heights School embodies an enduring passage to greatness, guided by our heritage and propelled by our
            motto, &ldquo;Towards Eternal Glory.&rdquo;
          </p>
        </div>

        <div className="space-y-10 rounded-3xl bg-white p-10 shadow-lg md:p-14">
          <article className="space-y-4">
            <h3 className="text-2xl font-semibold text-cardinal">Vision</h3>
            <p className="text-gray-600">
              The Elden Heights School stands as a citadel of heritage and aspiration, where education is not the mere transfer
              of knowledge but the cultivation of greatness across generations. The very name Elden Heights embodies our
              purpose: &ldquo;Elden&rdquo; signifying the timeless journey of growing old with wisdom, and &ldquo;Heights&rdquo;
              symbolizing the relentless ascent toward excellence and elevated achievement. Together, the name evokes a legacy
              of refinement, endurance, and elevation.
            </p>
            <p className="text-gray-600">
              Our emblem translates this philosophy into form. The eagle, sovereign and unyielding, represents the will to soar
              above the ordinary. The torch, burning eternal, signifies the undimmed pursuit of truth and enlightenment. The
              four wings of the eagle mirror the four cardinal stages of a student&rsquo;s passage: Roots, Ascent, Radiance, and
              Eternity. These stages, like the wings of flight, empower every learner to rise with balance, strength, and
              purpose, ever guided by our motto &ldquo;Towards Eternal Glory.&rdquo;
            </p>
            <p className="text-gray-600">
              The Elden Heights is thus more than an institution; it is an enduring passage to greatness, where each generation
              is prepared to stand tall in wisdom, dignity, and eternal legacy.
            </p>
          </article>

          <article className="space-y-4">
            <h3 className="text-2xl font-semibold text-cardinal">Mission</h3>
            <p className="text-gray-600">
              The mission of The Elden Heights School is to craft not merely scholars, but legacies. We exist to shape a
              student&rsquo;s journey through the four timeless stages of life, each one refining their character and elevating
              their destiny.
            </p>
            <div className="space-y-4 rounded-2xl border border-cardinal/10 bg-cardinal/5 p-6 text-sm text-gray-700">
              <div>
                <h4 className="text-base font-semibold text-cardinal">Roots</h4>
                <p>
                  At the foundation, we instill discipline, virtue, and cultural heritage. Here the child is grounded, like the
                  roots of an ancient tree, drawing strength from values that endure through every age.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-cardinal">Ascent</h4>
                <p>
                  With a firm foundation, the learner begins to rise. This stage is defined by exploration, resilience, and
                  intellectual awakening. We nurture a spirit that questions, seeks, and climbs with dignity and perseverance
                  toward knowledge and truth.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-cardinal">Radiance</h4>
                <p>
                  As wisdom matures, the individual begins to illuminate. In this stage, talents unfold and leadership emerges.
                  Students radiate brilliance through creativity, innovation, and excellence, becoming beacons of inspiration
                  within their communities and beyond.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-cardinal">Eternity</h4>
                <p>
                  The pinnacle stage, where learning transcends achievement and becomes legacy. Here, the Eldenite rises beyond
                  self-interest to embody purpose, virtue, and vision that echo through generations. This is the stage of
                  eternal glory, the fulfillment of The Elden Heights journey.
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              The name Elden Heights is fulfilled in this mission: &ldquo;Elden&rdquo; to grow wiser with age, and &ldquo;Heights&rdquo;
              to ascend beyond limitation. The eagle with its four wings embodies these stages, carrying the torch of
              enlightenment as a symbol of knowledge that never fades. Each student, through this sacred passage, is prepared
              not merely for success, but for significance—to rise, to lead, and to leave behind a mark that is eternal.
            </p>
          </article>
        </div>
      </section>

      <section className="fade-in rounded-3xl bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold text-cardinal">Principal&apos;s Message</h3>
        <p className="mt-4 text-gray-600">
          &ldquo;At Elden Heights, we uphold a tradition of academic excellence while embracing the possibilities of tomorrow. Our
          faculty nurtures inquisitive minds, our mentors shape resilient hearts, and our community celebrates every milestone.
          As we stride towards eternal glory, we invite you to witness the transformation of potential into greatness.&rdquo;
        </p>
        <p className="mt-4 text-sm font-semibold text-gray-500">Dr. Aria Caldwell · Principal</p>
      </section>

      <section className="fade-in space-y-6">
        <h3 className="text-2xl font-semibold text-cardinal">Awards & Distinctions</h3>
        <ul className="grid gap-4 md:grid-cols-3">
          {accolades.map((item) => (
            <li key={item} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="fade-in space-y-6">
        <h3 className="text-2xl font-semibold text-cardinal">Our Timeline</h3>
        <div className="relative border-l-2 border-cardinal/30 pl-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative pb-12">
              <span className="absolute -left-[39px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-cardinal bg-white text-sm font-semibold text-cardinal">
                {milestone.year}
              </span>
              <h4 className="text-xl font-semibold text-gray-900">{milestone.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{milestone.description}</p>
              {index !== milestones.length - 1 && <span className="absolute -left-[28px] top-9 h-full border border-dashed border-cardinal/30"></span>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
