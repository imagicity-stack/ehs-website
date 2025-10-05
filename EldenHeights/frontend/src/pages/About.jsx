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
      <section className="fade-in space-y-4 text-center">
        <h2 className="text-4xl font-semibold text-cardinal">Vision & Mission</h2>
        <p className="text-gray-600">
          We inspire every learner to pursue wisdom, cultivate character, and lead with compassion. The Elden Heights School
          envisions a world where knowledge, courage, and service converge to create extraordinary futures.
        </p>
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
