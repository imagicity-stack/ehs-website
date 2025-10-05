const events = [
  {
    id: 1,
    title: 'Leadership Conclave 2024',
    date: '2024-08-12',
    description: 'A global panel of diplomats and entrepreneurs mentors students on ethical leadership.'
  },
  {
    id: 2,
    title: 'Royal Arena Sports Meet',
    date: '2024-09-28',
    description: 'Inter-house championships celebrating athletic excellence and sportsmanship.'
  },
  {
    id: 3,
    title: 'Athenaeum Arts Festival',
    date: '2024-11-16',
    description: 'A week-long celebration of theatre, music, and fine arts curated by Elden Heights alumni.'
  }
];

export const getUpcomingEvents = (_req, res) => {
  res.json({ events });
};
