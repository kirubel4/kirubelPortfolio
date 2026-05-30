export const PROJECTS = [
  {
    id: 1,
    title: 'AI Resume Screening System',
    desc: 'AI-powered system that classifies resumes into skill categories and extracts key information such as skills, experience, and technical stacks.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
    color: '#00f5d4',
    icon: '🤖',
    github: 'https://github.com/kirubel4',
    featured: true,
  },

  {
    id: 2,
    title: 'Weather Prediction System',
    desc: 'End-to-end weather forecasting platform using time-series analysis, feature engineering, and LSTM-based prediction models.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'Time Series'],
    color: '#f72585',
    icon: '🌦️',
    github: 'https://github.com/kirubel4',
    featured: true,
  },

  {
    id: 3,
    title: 'ID Card Fraud Detector',
    desc: 'Machine learning and computer vision system that detects fraudulent or tampered ID cards using OpenCV and image analysis techniques.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'ML'],
    color: '#7209b7',
    icon: '🪪',
    github: 'https://github.com/kirubel4',
    live: 'https://id-card-authenticity-web.onrender.com/',
    featured: true,
  },

  {
    id: 4,
    title: 'Disaster Relief Web App',
    desc: 'Public web platform designed to support disaster response, resource coordination, and communication during emergency situations.',
    tech: ['Next.js', 'React', 'Full-Stack', 'Web App'],
    color: '#4cc9f0',
    icon: '🚑',
    github: 'https://github.com/kirubel4',
    featured: false,
  },

  {
    id: 5,
    title: 'Restaurant Menu Management System',
    desc: 'Digital restaurant management system for handling menu items, orders, and operational workflows efficiently.',
    tech: ['React', 'Node.js', 'Database', 'Full-Stack'],
    color: '#fb5607',
    icon: '🍽️',
    github: 'https://github.com/kirubel4',
    live: 'https://digital-restaurant-menu-management.vercel.app/',
    featured: false,
  },

  {
    id: 6,
    title: 'Smart Complaint Management System',
    desc: 'Next.js frontend application for a complaint management platform providing users with a streamlined issue reporting experience.',
    tech: ['Next.js', 'React', 'Frontend', 'UI/UX'],
    color: '#06d6a0',
    icon: '📋',
    github: 'https://github.com/kirubel4',
    live: 'https://astu-smart-complaint-frontend.vercel.app/',
    featured: false,
  },
]
export const SKILLS = [
  { name: 'Python',        level: 95, cat: 'Language' },
  { name: 'JavaScript',    level: 90, cat: 'Language' },
  { name: 'TypeScript',    level: 82, cat: 'Language' },

  { name: 'React',         level: 90, cat: 'Frontend' },
  { name: 'Next.js',       level: 88, cat: 'Frontend' },
  { name: 'Tailwind CSS',  level: 85, cat: 'Frontend' },

  { name: 'Node.js',       level: 82, cat: 'Backend' },
  { name: 'MongoDB',       level: 80, cat: 'Backend' },
  { name: 'PostgreSQL',    level: 75, cat: 'Backend' },

  { name: 'Machine Learning', level: 90, cat: 'AI / ML' },
  { name: 'TensorFlow',       level: 85, cat: 'AI / ML' },
  { name: 'OpenCV',           level: 82, cat: 'AI / ML' },

  { name: 'Git / GitHub',  level: 90, cat: 'Tools' },
  { name: 'Docker',        level: 70, cat: 'DevOps' },
  { name: 'REST APIs',     level: 88, cat: 'Backend' },
]

export const CAT_COLORS = {
  Frontend: '#00f5d4',
  Language: '#f72585',
  Styling:  '#7209b7',
  Backend:  '#4cc9f0',
  Tools:    '#fb5607',
  DevOps:   '#06d6a0',
}
