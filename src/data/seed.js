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
- Backend Development : Node.js, Nest.js,Express, GraphQL, RESTful APIs, Authentication & Authorization
- Frontend Development : React, Next.js, TypeScript, Tailwind CSS
-Databases : MongoDB, PostgreSQL, MySQL, Firebase, Supabase
- Languages : Java, JavaScript, TypeScript, Python, HTML, CSS`,

  // certifications: `- AWS Certified Solutions Architect (2024)\n- Oracle Certified Professional, Java SE 11 Developer`,

  projects: [  
 {
  title: 'Idempodency in Financial Systems - bank api demo',
  description: `A clean, lightweight, production-grade Spring Boot demo that shows how to safely handle retries in payment systems using idempotency
  Scenario  
Imagine a  user initiates a N10,000 transfer to pay for Malt.  
Their app times out. They tap "Retry".  
Without proper safeguards, the system processes the same payment twice.  

Result: double charge, angry customer, compliance issues.

This demo demonstrates the solution using a minimal, production-grade Spring Boot API that shows exactly how to prevent this.

How it works  
 When user uses the client to send POST /api/payments req with an Idempotency-Key header , 
 the first request is processed and cached in Redis  so when user retries with same key,
 api returns identical response, no re-processing.
  `,
   github: 'https://github.com/mayowa-id/graphbank-api-demo',
  images: [
    { src: '/idemp1.png', alt: 'Overview', caption: 'Code' },
     { src: '/idemp2.png', alt: 'Overview', caption: 'Postman' },
     { src: '/idemp3.png', alt: 'Overview', caption: 'Terminal' }
  ]
}

 ,{
  title: 'Crypto Wallet Demo',
  description: `Full-stack application built with NestJS and React, featuring secure wallet management, fund transfers, and transaction tracking. Backend implements database-level ACID transactions, idempotency protection, and comprehensive error handling. Frontend offers an intuitive dashboard with dark mode, copy-to-clipboard functionality, and responsive design. Deployed as serverless functions on Vercel with PostgreSQL database.
Tech Stack: NestJS, React, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Vercel`,
   github: 'https://github.com/mayowa-id/nova-wallet',
    liveDemo: "https://nova-wallet-pro.vercel.app/",
  images: [
    { src: '/nova1.png', alt: 'Overview', caption: 'Wallet dash' },
     { src: '/nova2.png', alt: 'Overview', caption: 'Transactions' },
      { src: '/nova3.png', alt: 'Overview', caption: 'Overview' }
  ]
}

    ,{
  title: 'Live Stock Tracker',
  description: `This project is a lightweight, real-time stock price tracking application built to demonstrate edge-optimized backend development with Hono. The backend is a fast, serverless API that fetches and processes stock data from Yahoo Finance, delivering low-latency responses for global users.Backend Highlights (Hono-Powered)Architecture: Hono, a ultra-fast web framework, handles routing, middleware, and WebSockets with minimal overhead. It's runtime-agnostic, running seamlessly on Node.js, Bun, Deno, or edge platforms like Vercel or Cloudflare Workers for sub-10ms cold starts.
E
ndpoints:/quotes/:symbol: Retrieves latest bid/ask prices (mapped to StockQuote type).
/historical/:symbol: Fetches OHLC bars for custom ranges (e.g., 30 days daily), formatted as AggregatesResponse for easy charting.
/analytics/:symbol: Computes 50-day SMA from historical closes, with validation via Zod.
/ws/:symbol: Real-time updates via WebSocket proxy (broadcasts trades as quotes).

Data Handling: Uses yahoo-finance2 library for free, keyless API calls. TypeScript for type safety, with debug logging and error handling. No external dependencies for WS—native implementation with symbol subscription management.
Strengths: Plays to Hono's edge capabilities—lightweight bundle (<200KB), fast routing, and easy deployment. Handles CRUD-like operations with middleware for CORS and validation, ideal for serverless scales.
`,
   github: 'https://github.com/mayowa-id/stock-tracker',
    liveDemo: "https://stock-tracker-gk0owfzej-mayowas-projects-7b3044f1.vercel.app/",
  images: [
    { src: '/stock1.png', alt: 'Overview', caption: 'Overview' },
     { src: '/stock2.png', alt: 'Overview', caption: 'Overview' }
  ]
},

{
  title: 'Payment Processing API Tester',
  description: `For a backend dev job application, I was asked to build a RESTful API that processes natural language payment instructions (e.g., "DEBIT 500 USD FROM ACCOUNT A FOR CREDIT TO ACCOUNT B"), validates business rules like currency matching and sufficient funds, and executes or schedules transactions accordingly. And then I decided to build a frontend to test the endpoints easily, touch and go. 
This interactive frontend testing interface demonstrates the API's functionality through 12 test cases covering both valid and invalid scenarios. Users can run tests individually or as a batch. The interface provides real-time visual feedback, making it easy to verify correct handling of edge cases and validation errors.`,
   github: 'https://github.com/mayowa-id/payment-instructions-api-tester',
    liveDemo: "https://payment-instructions-api-tester-c52.vercel.app/",
  images: [
    { src: '/tester1.png', alt: 'Overview', caption: 'Overview' },
     { src: '/tester2.png', alt: 'Overview', caption: 'Overview' }
  ]
},
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
  title: 'Flex Delivery Marketplace',
  description: `Landing page demo for a delivery service`,
   github: 'https://github.com/mayowa-id/flexdelivery',
    liveDemo: "https://flexdelivery.vercel.app/",
  images: [
    { src: '/flex.png', alt: 'Overview', caption: 'Marketplace & Package details' }
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



















