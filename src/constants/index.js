export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experiences",
    title: "Experiences",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = {
  web: [
    {
      name: "ConnectStud",
      description: "Student freelancing platform with modern UI and comprehensive features",
      tags: ["React", "TailwindCSS", "Laravel", "PostgreSQL"],
      image: "/projects/connectstud.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Expense-Tracker",
      description: "Comprehensive expense management system with detailed analytics",
      tags: ["InertiaJS", "Laravel", "MySQL"],
      image: "/projects/expense-tracker.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Digit Food",
      description: "Interactive restaurant management platform with digital menus and payment integration",
      tags: ["React.js", "Node.js", "MySQL", "Chart.js"],
      image: "/projects/digit-food.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging capabilities",
      tags: ["React.js", "Node.js", "MySQL", "Socket.IO"],
      image: "/projects/chat-app.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Samuel SOGLOHOUN Portfolio",
      description: "Portfolio website developed with React.js, Three.js and Tailwind CSS",
      tags: ["React.js", "Tailwind CSS", "Three.js"],
      image: "/projects/portfolio.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
      role: "Frontend Developer",
    }
  ],
  mobile: [
    {
      name: "Medi Reminder",
      description: "Connected box and mobile app for medication tracking with push notifications",
      tags: ["Node.js", "MySQL", "Firebase Cloud Messaging"],
      image: "/projects/medi-reminder.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
      role: "Backend Developer",
    },
    {
      name: "To-do List Mobile",
      description: "Mobile application developed for ensuring project management with React Native and Tailwind CSS (without Expo) and Node.js",
      tags: ["React Native", "Tailwind CSS"],
      image: "/projects/todo-mobile.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "AREA",
      description: "Mobile application for tasks automatisation",
      tags: ["React Native, CSS, Node.js, MySQL"],
      image: "/projects/todo-mobile.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    }
  ],
  blockchain: [
    {
      name: "Decentralized Ticketing Platform",
      description: "Event management system with React, Node.js, MySQL and blockchain option (Solidity)",
      tags: ["React", "Node.js", "MySQL", "Solidity"],
      image: "/projects/ticketing-system.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Blockchain-based Customer Loyalty Platform",
      description: "Customer loyalty platform leveraging blockchain technology for secure and transparent rewards",
      tags: ["React", "Solidity", "Web3.js", "Node.js"],
      image: "/projects/loyalty-platform.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
  ],
  data: [
    {
      name: "Data Science Project",
      description: "CSV data cleaning, structuring, visualizations, predictive modeling, and dashboard development",
      tags: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Streamlit"],
      image: "/projects/data-science.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
    {
      name: "Data Analysis Program",
      description: "Multi-month training program with practical projects, exercises and real data manipulation",
      tags: ["Python", "SQL", "Data Visualization", "Statistical Analysis"],
      image: "/projects/data-analysis.png",
      source_code_link: "https://github.com/",
      live_link: "https://example.com",
    },
  ],
};

export const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "BESTIM",
    icon: "/companies/bestim.png",
    iconBg: "#383E56",
    date: "April 2025 - August 2025",
    points: [
      "Developed ConnectStud, an intuitive and interactive student freelancing platform",
      "Created modern and responsive user interfaces",
      "Integrated APIs and optimized performance",
      "Collaborated with backend team to ensure seamless integration",
    ],
  },
  {
    title: "Admissions Service Assistant",
    company_name: "EPITECH BENIN",
    icon: "/companies/epitech.png",
    iconBg: "#E6DEDD",
    date: "August 2024 - December 2024",
    points: [
      "Managed organization, installation of necessary tools and systems",
      "Oversaw entrance exam process for bachelor program",
      "Provided administrative support and coordinated admission processes",
      "Guided candidates throughout the selection process",
    ],
  },
  {
    title: "General Secretary",
    company_name: "EPITECH BLOCKCHAIN CLUB",
    icon: "/companies/blockchain-club.png",
    iconBg: "#383E56",
    date: "August 2024 - August 2025",
    points: [
      "Managed administrative affairs of the club",
      "Coordinated educational activities and club projects",
      "Organized events and blockchain workshops",
      "Handled internal and external club communication",
    ],
  },
  {
    title: "Trainer/Facilitator - Summer Camp",
    company_name: "DIGITAL VALLEY",
    icon: "/companies/digital-valley.png",
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Designed and delivered training programs for young participants aged 8 to 18",
      "Introduced digital fields: web programming and mobile app development",
      "Provided educational guidance and personalized follow-up",
      "Created educational content adapted to different levels",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Cabinet PHR",
    icon: "/companies/phr.png",
    iconBg: "#E6DEDD",
    date: "July 2023 - November 2023",
    points: [
      "Developed an interactive and user-friendly web application for restaurant service management",
      "Managed menu presentation and order processing",
      "Integrated payment features and inventory management",
      "Optimized user experience and application performance",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor in Software Engineering",
    school: "Epitech",
    date: "2022 - 2025",
    description: "Software development and computer engineering training - Obtained in 2025",
  },
  {
    degree: "Certified in Blockchain Development",
    school: "Africa Blockchain Institute",
    date: "2024",
    description: "Basics of Blockchain Foundations and Development"
  },
];

export const certifications = [
  {
    name: "Data Science with Python",
    issuer: "Lets Upgrade in Collaboration with GDG MAD",
    date: "7 Juin 2025",
    credential_id: "LUEDSJUN125326",
  },
  {
    name: "Tech for everyone",
    issuer: "SOLOLEARN",
    date: "8 Juin 2025",
    credential_id: "CC-1PKUDQZV",
  },
  {
    name: "Certified CodinGame in language C",
    issuer: "CodinGame",
    date: "2025",
    credential_id: "10446649",
  },
  {
    name: "Art Oratoire (Public Speaking)",
    issuer: "Club RFI Afrique",
    date: "Octobre - Décembre 2019",
    credential_id: "RFI-2019-CCSM",
    location: "Collège Catholique Saint Michel",
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    credential_id: "AZ-901234",
  },
];

export const skills = [
  {
    name: "C",
    type: "programming",
  },
  {
    name: "C++",
    type: "programming",
  },
  {
    name: "JavaScript",
    type: "frontend",
  },
  {
    name: "Vue.js",
    type: "frontend",
  },
  {
    name: "React.js",
    type: "frontend",
  },
  {
    name: "Inertia.js",
    type: "frontend",
  },
  {
    name: "Python",
    type: "data",
  },
  {
    name: "Node.js",
    type: "backend",
  },
  {
    name: "Solidity",
    type: "blockchain",
  },
  {
    name: "Smart Contracts",
    type: "blockchain",
  },
  {
    name: "MySQL",
    type: "database",
  },
  {
    name: "PostgreSQL",
    type: "database",
  },
  {
    name: "Docker",
    type: "devops",
  },
  {
    name: "Git",
    type: "devops",
  },
  {
    name: "GitHub",
    type: "devops",
  },
  {
    name: "GitHub Workflows",
    type: "devops",
  },
  {
    name: "CSS3",
    type: "frontend",
  },
  {
    name: "TailwindCSS",
    type: "frontend",
  },
  {
    name: "React Native",
    type: "mobile",
  },
  {
    name: "Laravel",
    type: "backend",
  },
  {
    name: "Microsoft Tools",
    type: "productivity",
  },
  {
    name: "Figma",
    type: "design",
  },
  {
    name: "UI/UX Design",
    type: "design",
  },
  {
    name: "Smart Contracts",
    type: "blockchain",
  },
  {
    name: "Creativity",
    type: "design",
  },
  {
    name: "Teamwork",
    type: "productivity",
  },
];

export const contactInfo = {
  email: "soglohounsamuel2@gmail.com",
  phone: "+229 66 01 53 87",
  location: "Cotonou, Benin",
  github: "https://github.com/SamuelSgn25",
  linkedin: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3B24SsR8m0SxmyFTtbMB86mQ%3D%3D",
  instagram: "https://www.instagram.com/sgnsamuel?igsh=MXdpODlwb2Z4dWhiOA==",
  whatsapp: "https://wa.me/22966015387",
};

export const heroData = {
  name: "SAMUEL SOGLOHOUN",
  title: "Full-Stack Developer | Data Analyst & Blockchain Enthusiast",
  subtitle: "Empowering African decision-makers through data-driven insights",
  description: "Passionate about leveraging data analysis and technology to help African leaders make informed decisions for the continent's future. Combining expertise in full-stack development, blockchain technology, and data science to create innovative solutions that drive sustainable growth across Africa.",
  professionalSummary: "Experienced software engineer with 3+ years of expertise in full-stack development, data analysis, and blockchain technology. Proven track record of delivering innovative solutions for African businesses and organizations. I have already finished a Bachelor's in Software Engineering at Epitech with hands-on experience in React, Node.js, Python, and Solidity.",
  keyAchievements: [
    "Developed ConnectStud, a comprehensive student freelancing platform",
    "Led blockchain initiatives as General Secretary of Epitech Blockchain Club",
    "Trained 50+ young participants in digital technologies at Digital Valley",
    "Certified in Data Science and Blockchain Development"
  ],
  currentFocus: "Building scalable web applications and exploring the intersection of blockchain technology with traditional business processes to create more transparent and efficient systems.",
};

export const hobbies = [
  {
    category: "Music",
    description: "Fan of modern and classical music",
    items: ["Dadju", "Gims", "Mozart", "Beethoven", "Aya Nakamura", "GG Vickey", "Ayra Starr", "Beyoncé"],
    icon: "🎵"
  },
  {
    category: "Mangas",
    description: "Passionate about mangas and Japanese animation",
    items: ["Bleach", "Fairy Tail", "Naruto", "Black Clover"],
    icon: "📚"
  },
  {
    category: "Reading & Writing",
    description: "Lover of reading and writing",
    items: ["Novels", "Poetry", "Creative Writing", "Blogging"],
    icon: "✍️"
  }
];
