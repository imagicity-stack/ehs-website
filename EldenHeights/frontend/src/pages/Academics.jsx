import Card from '../components/Card.jsx';
import curriculumPDF from '../assets/eldenheights-curriculum.pdf';

const streams = [
  {
    title: 'Science Stream',
    description: 'Rigorous STEM foundation with interdisciplinary research projects and Olympiad mentoring.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Engineering Graphics']
  },
  {
    title: 'Commerce Stream',
    description: 'Entrepreneurial incubators and global finance labs preparing future business leaders.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics', 'Marketing Analytics', 'Entrepreneurship']
  },
  {
    title: 'Humanities Stream',
    description: 'Immersive liberal arts program with leadership studios and diplomatic simulations.',
    subjects: ['History', 'Political Science', 'Psychology', 'Literature', 'Philosophy', 'Media Studies']
  }
];

const Academics = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <section className="fade-in space-y-4 text-center">
        <h2 className="text-4xl font-semibold text-cardinal">Academic Streams</h2>
        <p className="text-gray-600">
          Our curated pathways combine scholarly excellence with real-world exposure, guided by world-class faculty mentors and
          a network of industry collaborators.
        </p>
      </section>

      <section className="fade-in grid gap-8 md:grid-cols-3">
        {streams.map((stream) => (
          <Card key={stream.title} title={stream.title} description={stream.description}>
            <ul className="space-y-1">
              {stream.subjects.map((subject) => (
                <li key={subject} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cardinal"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <section className="fade-in rounded-3xl bg-white p-10 shadow-lg">
        <h3 className="text-2xl font-semibold text-cardinal">Signature Learning Experiences</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {["Cambridge Advanced Labs", 'Elden Leadership Studio', 'Global Fellowship Exchange'].map((experience) => (
            <div key={experience} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 text-sm text-gray-600 shadow-sm">
              {experience}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-600">
          Download our comprehensive curriculum guide that details assessment models, faculty mentors, and experiential learning
          modules for each stream.
        </p>
        <a
          href={curriculumPDF}
          download
          className="mt-4 inline-block rounded-full bg-cardinal px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-cardinal/90"
        >
          Download Curriculum PDF
        </a>
      </section>
    </div>
  );
};

export default Academics;
