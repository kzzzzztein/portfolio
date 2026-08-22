// Central project data. Edit this file to update case studies across the
// whole site (cards, case study pages, and the featured section) in one place.
//
// liveUrl / repoUrl are left as placeholders. Replace YOUR_* placeholders
// with real links, or leave them blank ("") to hide the button.

export const projects = [
  {
    slug: 'resort-booking-platform',
    featured: true,
    title: 'Resort Booking Platform',
    subtitle: 'A complete online booking experience for local and international guests.',
    description:
      'A resort website and booking platform designed to make it easier for guests to discover accommodations and submit reservations online, while giving the resort a centralized way to manage bookings.',
    problem:
      'Guests had no way to browse accommodations or request a reservation online, so every booking depended on phone calls and manual back-and-forth, and the resort had no single place to see what was booked.',
    solution:
      'I built a public-facing resort site with accommodation listings and a guided reservation flow, backed by an admin dashboard where staff can review, confirm, and manage incoming bookings from one screen.',
    tech: ['React', 'Tailwind CSS', 'PHP', 'CodeIgniter 4', 'MySQL'],
    features: [
      'Resort homepage',
      'Accommodation listings',
      'Room details',
      'Online reservation flow',
      'Guest information capture',
      'Reservation management',
      'Admin dashboard',
      'Responsive design for local and international guests',
    ],
    images: [
      { src: 'resort-homepage.jpg', label: 'Homepage' },
      { src: 'resort-rooms.jpg', label: 'Gallery / accommodation photos' },
      { src: 'resort-booking.png', label: 'Reservation flow' },
      { src: 'resort-dashboard.png', label: 'Admin dashboard' },
      { src: 'resort-about.jpg', label: 'About / Our Story' },
    ],
    outcome:
      'The platform gives the resort a working online reservation channel and a single dashboard to manage bookings, replacing a phone-and-paper process. No traffic or revenue figures are published here, since none have been provided for this project.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'travel-booking-website',
    featured: false,
    title: 'Travel Booking Website',
    subtitle: 'A modern travel booking experience for discovering and planning trips.',
    description:
      'A travel-focused website designed to let users explore destinations, browse travel options, and move through a streamlined booking interface.',
    problem:
      'Travelers researching a trip often bounce between disconnected pages for destinations, packages, and booking, which makes it harder to go from browsing to committing.',
    solution:
      'I designed a single, search-led flow that keeps destination browsing, package details, and booking in one connected interface, so a visitor can go from idea to request without losing their place.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Destination browsing',
      'Travel packages',
      'Search functionality',
      'Booking interface',
      'Travel information pages',
      'Responsive, customer-friendly interface',
    ],
    images: [
      { src: 'travel-homepage.jpg', label: 'Homepage' },
      { src: 'travel-destinations.jpg', label: 'Destination browsing' },
      { src: 'travel-booking.jpg', label: 'Booking interface' },
    ],
    outcome:
      'Delivered as a functioning front-to-back booking flow for a travel use case. No business or traffic results are published here, since none have been provided for this project.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'maritime-training-management-system',
    featured: false,
    title: 'Maritime Training Management System',
    subtitle: 'A centralized system for monitoring maritime training and certification status.',
    description:
      'A web-based monitoring system designed to centralize seafarer training records, certificate status, and expiration tracking for a maritime organization.',
    problem:
      'Training records and certificate expiry dates were tracked manually across scattered documents, making it hard to know at a glance who was current, who was expiring soon, and who needed follow-up.',
    solution:
      'I built a centralized dashboard that tracks training and certificate status per seafarer, flags upcoming expirations, supports QR-code lookups, and generates certificate PDFs, with email notifications for renewals.',
    tech: ['PHP', 'CodeIgniter 4', 'MySQL', 'Bootstrap'],
    features: [
      'Training status dashboard',
      'QR-code input',
      'Certificate tracking',
      'Expiration monitoring',
      'PDF certificate generation',
      'Email notifications',
      'Administrative dashboard',
      'RFP (Request for Payment) management module',
    ],
    images: [
      { src: 'maritime-dashboard.png', label: 'Training dashboard' },
      { src: 'maritime-monitoring.png', label: 'Expiration monitoring' },
      { src: 'maritime-certificate.png', label: 'Certificate generation' },
      { src: 'maritime-rfp.png', label: 'RFP management system' },
    ],
    outcome:
      'Screenshots shown are generic or mocked to protect confidential company information. No revenue or business-impact figures are published here, since none have been provided for this project.',
    liveUrl: '',
    repoUrl: '',
  },
  {
    slug: 'sql-academy',
    featured: false,
    title: 'SQL Academy',
    subtitle: 'An interactive learning platform for learning SQL and database concepts.',
    description:
      'A web-based educational platform designed to help students learn SQL through structured lessons and interactive exercises.',
    problem:
      'Beginners learning SQL often struggle without a way to immediately practice what they read, which makes concepts like joins and filtering hard to retain from text alone.',
    solution:
      'I built a structured lesson flow paired with interactive exercises, so a learner reads a concept and then applies it right away, with progress tracked as they move through modules.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'SQL lessons',
      'Database concepts',
      'Interactive exercises',
      'Worked SQL examples',
      'Learning modules',
      'Progress tracking',
      'Beginner-friendly interface',
    ],
    images: [
      { src: 'sql-academy-home.png', label: 'Homepage' },
      { src: 'sql-academy-lessons.png', label: 'Lessons' },
      { src: 'sql-academy-exercises.png', label: 'Interactive exercises' },
    ],
    outcome:
      'Demonstrates an interactive, education-focused web application distinct from the booking and dashboard-style projects above. No user or usage figures are published here, since none have been provided for this project.',
    liveUrl: '',
    repoUrl: '',
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
export const featuredProject = projects.find((p) => p.featured)
export const secondaryProjects = projects.filter((p) => !p.featured)
