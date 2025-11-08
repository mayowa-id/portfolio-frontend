export const SEED = {
  profile: {
    name: 'IDOWU MAYOWA JOSHUA',
    roles: ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FRONTEND DEVELOPER'],
    avatar: '/profile.jpg'
  },

  experience: [
    {
      role: 'FULL STACK DEVELOPER INTERN',
      company: 'TIPSONA, LAGOS',
      period: '2024',
      description: `Worked as a full-stack development intern at a tech startup, building and integrating RESTful APIs,
      implementing authentication and database operations, and developing responsive frontends with React.`
    },
    {
      role: 'Personal Projects',
      company: 'Self-Driven',
      period: 'Ongoing',
      description: `Building full-stack systems including authentication services, chat applications, and automation tools.`
    }
  ],

  about: `I am a full-stack developer focused on building scalable, efficient, and user-driven systems. I enjoy designing clean backend architectures and pairing them with well-structured, responsive frontends. I am actively in search of the right problems to solve  problems that challenge infrastructure, experience, and performance at the same time.

My skill set spans both frontend and backend development, allowing me to take products from idea to deployment:\n
- Backend Development : Node.js, Express, GraphQL, RESTful APIs, Authentication & Authorization
- Frontend Development : React, Next.js, TypeScript, Tailwind CSS
-Databases : MongoDB, PostgreSQL, MySQL, Firebase, Supabase
- Languages : JavaScript, TypeScript, Python, HTML, CSS`,

  // certifications: `- AWS Certified Solutions Architect (2024)\n- Oracle Certified Professional, Java SE 11 Developer`,

  projects: [  

{
  title: 'Inventory Management System',
  description: `A full-stack inventory management system that automates product restocking and warehouse capacity management for businesses. The application monitors stock levels across multiple warehouses and automatically generates purchase orders when inventory falls below defined thresholds, while respecting warehouse capacity constraints.`,
   github: 'https://github.com/mayowa-id/inventory-management-system',
    liveDemo: "https://inventory-management-system-six-alpha.vercel.app/",
  images: [
    { src: '/inv1.png', alt: 'Overview', caption: 'Dashboard' },
     { src: '/inv2.png', alt: 'Overview', caption: 'Dashboard' },
     { src: '/inv3.png', alt: 'Overview', caption: 'Dashboard' },
    { src: '/inv4.png', alt: 'Diagram', caption: 'Dashboard' },
   { src: '/inv5.png', alt: 'Overview', caption: 'Dashboard' }
  ]
},

    {
  title: 'graph bank fin-api',
  description: `A simple Spring Boot API demonstrating inheritance in Java for modeling financial instruments 
  (e.g., Asset → Bond, Stock). Highlights OOP principles like polymorphism, Liskov Substitution, 
  and Template Method in a fintech context`,
   github: ' https://github.com/mayowa-id/fin-api',
  images: [
    { src: '/fin1.png', alt: 'Overview', caption: 'Code' },
     { src: '/fin2.png', alt: 'Overview', caption: 'Local Client' },
     { src: '/fin3.png', alt: 'Overview', caption: 'Terminal' },
    { src: '/fin4.png', alt: 'Overview', caption: 'Code' }
  ]
},
      {
  title: 'The Office - Dunder Mifflin Paper Co. ',
  description: `A landing page dedicated to my favorite sitcom`,
   github: 'https://github.com/mayowa-id/dunder-mifflin-landing-page',
    liveDemo: "https://dunder-mifflin-landing-page.vercel.app/",
  images: [
    { src: '/dmf1.png', alt: 'Overview', caption: 'Dashboard' },
     { src: '/dmf2.png', alt: 'Overview', caption: 'Dashboard' },
     { src: '/dmf3.png', alt: 'Overview', caption: 'Dashboard' }
  ]
},
     {
  title: 'Idempodency in Financial Systems - bank api demo',
  description: `A clean, lightweight, production-grade Spring Boot demo that shows how to safely handle retries in payment systems using idempotency`,
   github: 'https://github.com/mayowa-id/graphbank-api-demo',
  images: [
    { src: '/idemp1.png', alt: 'Overview', caption: 'Code' },
     { src: '/idemp2.png', alt: 'Overview', caption: 'Postman' },
     { src: '/idemp3.png', alt: 'Overview', caption: 'Terminal' }
  ]
}
    ,
    {
      title: 'Auth Service',
      description: 'Authentication & Authorization service with JWT, OAuth2 logins, and MongoDB integration.',
      image: '/auth.png',
      github: 'https://github.com/yourusername/auth-service'
    },
    {
      title: 'Health Reminder',
      description: 'Smart Daily Task Reminder built with Spring Boot, featuring email and Telegram reminders.',
      image: '/smart-reminder.png',
      github: 'https://github.com/mayowa-id/smart-daily-task-reminder'
    }
  ],

  skills: [
    {
      title: 'Core Skills',
      body: '',
      image: '/skill.png',
        images: [
    { src: '/skill.png', alt: 'Overview', caption: 'Skill Overview' }
          ]
    }
  ],

  contacts: {
    email: "yourmail@example.com",
    phone: "+234-XXX-XXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername"
  }
}



//for situations where i have multiple images and i want to show them as a slideshow 
// const imgs = [
//   { src: '/proj1-1.png', alt: 'proj1-1', caption: 'Diagram overview' },
//   { src: '/proj1-2.png', alt: 'proj1-2', caption: 'Sequence diagram' },
// ]

// <GalleryImageGroup images={imgs} thumbClassName="frame-image" />


















