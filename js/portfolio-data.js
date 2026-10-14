/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * All content, personal details, education records, project cards, and links
 * are easily editable here in one single place.
 * 
 * Edit this file to customize your name, links, descriptions, and achievements!
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // Personal & Brand Info
  personal: {
    fullName: "Janmajay Kalyanwat",
    initials: "JK",
    roleBadge: "ECE Undergrad & Semiconductor Enthusiast",
    tagline: "Electronics & Communication Engineering Student | Semiconductor Technology Enthusiast | AI Explorer",
    shortBio: "I am an engineering student at JECRC University, passionate about electronics, semiconductor technology, artificial intelligence, and emerging innovations. I enjoy exploring new technologies, developing my technical skills, and learning how engineering can solve real-world problems.",
    location: "Jaipur, Rajasthan, India",
    email: "janmajay.kalyanwat@example.com", // Replace with your primary email
    linkedin: "https://www.linkedin.com/in/", // Add your LinkedIn profile URL
    github: "https://github.com/",             // Add your GitHub profile URL
    resumeUrl: "#contact",                     // Replace with direct link or path to your resume PDF
    availability: "Open to Research, Internships & Tech Collaborations"
  },

  // About Me Section
  about: {
    heading: "Bridging Silicon, Signals, and Intelligent Systems",
    paragraphs: [
      "I am currently pursuing Electronics and Communication Engineering (ECE) with a focus on Semiconductor Technology at JECRC University. I am interested in understanding how electronic systems, semiconductor devices, and emerging technologies shape the modern world.",
      "Alongside my engineering studies, I am exploring artificial intelligence and expanding my knowledge through workshops and technology-related learning experiences.",
      "My goal is to continuously learn, build practical skills, work on innovative projects, and grow into an engineer who contributes to the future of technology."
    ],
    // 5 Interest Cards specified in prompt
    interests: [
      {
        id: "semiconductor",
        title: "Semiconductor Technology",
        icon: "cpu",
        color: "from-cyan-500 to-blue-600",
        description: "Fascinated by VLSI architecture, silicon fabrication, solid-state physics, and the micro-scale marvels driving modern computing."
      },
      {
        id: "ece",
        title: "Electronics & Communication Engineering",
        icon: "radio",
        color: "from-blue-500 to-indigo-600",
        description: "Studying analog & digital systems, circuit design, high-frequency signal processing, and communication protocols."
      },
      {
        id: "ai",
        title: "Artificial Intelligence",
        icon: "sparkles",
        color: "from-purple-500 to-fuchsia-600",
        description: "Exploring machine learning paradigms, neural network structures, and how intelligent algorithms interface with embedded hardware."
      },
      {
        id: "emerging-tech",
        title: "Emerging Technologies",
        icon: "orbit",
        color: "from-emerald-400 to-teal-600",
        description: "Investigating next-generation computing architectures, IoT telemetry, energy-efficient chips, and quantum technology concepts."
      },
      {
        id: "learning-innovation",
        title: "Technical Learning & Innovation",
        icon: "lightbulb",
        color: "from-amber-400 to-orange-500",
        description: "Engaging in hands-on workshops, prototyping experiments, technical literature reviews, and iterative problem-solving."
      }
    ]
  },

  // Education Timeline (Chronological: Class 10 -> Class 12 -> JECRC University)
  education: [
    {
      institution: "The Visionaries Secondary School",
      qualification: "Class 10",
      period: "Secondary School Education",
      yearBadge: "[Year: e.g. 2021]", // Editable placeholder
      isCurrent: false,
      score: "[Score / Percentage - Add Later]", // Editable placeholder
      description: "Completed my secondary school education and developed a foundation for further academic learning.",
      highlights: [
        "Foundational STEM & Mathematics groundwork",
        "Curiosity for physical sciences & technology",
        "Active participation in school science activities"
      ],
      icon: "graduation-cap"
    },
    {
      institution: "Radha Children Academy",
      qualification: "Class 12",
      period: "Senior Secondary Education",
      yearBadge: "[Year: e.g. 2023]", // Editable placeholder
      isCurrent: false,
      score: "[Stream: Science / PCM - Add Later]", // Editable placeholder
      description: "Completed my senior secondary education before beginning my engineering journey.",
      highlights: [
        "Physics, Chemistry & Advanced Mathematics curriculum",
        "Analytical reasoning & laboratory experimental methods",
        "Preparation for competitive technical engineering education"
      ],
      icon: "award"
    },
    {
      institution: "JECRC University",
      qualification: "Bachelor of Technology - B.Tech",
      program: "Electronics and Communication Engineering (ECE)",
      specialization: "Semiconductor Technology",
      status: "Currently Pursuing",
      period: "Undergraduate Engineering",
      yearBadge: "Present",
      isCurrent: true,
      score: "[CGPA - Currently In Progress]", // Editable placeholder
      description: "Learning about electronics, semiconductor devices, communication systems, and emerging engineering technologies.",
      highlights: [
        "Specialization track focusing on Semiconductor Technology & Device Physics",
        "Laboratory hands-on practice in analog/digital electronics and communication systems",
        "Engaged in technical seminars, coding challenges, and AI exploration workshops"
      ],
      icon: "microchip"
    }
  ],

  // Dedicated College Section: JECRC University
  college: {
    heading: "My Engineering Journey at JECRC University",
    subheading: "Nurturing Innovation, Hardware Foundations & Technological Exploration",
    officialWebsite: "https://jecrcuniversity.edu.in/",
    description: "At JECRC University, I am pursuing Electronics and Communication Engineering with a focus on Semiconductor Technology. My academic journey is helping me explore the fundamentals of electronic systems, semiconductor devices, and the technologies that power modern electronics.\n\nI look forward to strengthening my engineering knowledge, developing practical skills, participating in technical activities, and exploring opportunities in semiconductor technology and artificial intelligence.",
    features: [
      {
        title: "ECE & Semiconductor Focus",
        desc: "Dedicated curriculum exploring semiconductor physics, circuit design, and hardware-software synergy."
      },
      {
        title: "Modern Technical Labs",
        desc: "Practical exposure to digital instrumentation, circuit synthesis, and communication test benches."
      },
      {
        title: "Active Learning Culture",
        desc: "Encouragement for hackathons, research seminars, technology workshops, and multidisciplinary projects."
      }
    ],
    stats: [
      { label: "Department", value: "ECE" },
      { label: "Core Focus", value: "Semiconductor" },
      { label: "Location", value: "Jaipur, India" }
    ]
  },

  // Dedicated Google AI Workshop Section
  googleAiWorkshop: {
    heading: "Exploring Artificial Intelligence",
    subheading: "Empowering Next-Gen Engineering with Machine Intelligence",
    description: "Participating in a Google AI Workshop has been part of my technology-learning journey. It represents my interest in understanding artificial intelligence, exploring its applications, and learning about the role of AI in solving real-world problems.",
    highlights: [
      {
        icon: "brain-circuit",
        title: "AI & ML Foundations",
        description: "Understanding machine learning pipelines, feature representations, and algorithm classification."
      },
      {
        icon: "network",
        title: "Neural Networks & Deep Learning",
        description: "Exploring basic artificial neural structures, weights, activation functions, and training paradigms."
      },
      {
        icon: "binary",
        title: "Hardware-AI Intersection",
        description: "Investigating how silicon accelerators and edge AI hardware optimize computational inference."
      },
      {
        icon: "shield-check",
        title: "Real-World Problem Solving",
        description: "Analyzing case studies where AI models solve real-world industrial, environmental, and healthcare challenges."
      }
    ],
    certificate: {
      title: "Google AI Workshop Participant",
      issuer: "Google AI Learning Initiative",
      status: "Workshop Participated",
      datePlaceholder: "[Workshop Date - Add Later]",
      credentialNote: "Certificate link / verification document can be linked directly here.",
      verificationUrl: "#" // Set to your certificate URL or PDF
    }
  },

  // Skills and Technical Interests
  skills: [
    {
      category: "Semiconductor Technology",
      icon: "cpu",
      color: "cyan",
      tag: "Specialization Track",
      items: [
        { name: "Semiconductor Device Physics", level: "Core Learning" },
        { name: "VLSI Architecture Concepts", level: "Foundational" },
        { name: "Silicon Fabrication & Lithography", level: "Exploratory" },
        { name: "Solid-State Electronics & PN Junctions", level: "Active Study" },
        { name: "Microprocessor & Chip Interfacing", level: "Hands-on Basics" }
      ]
    },
    {
      category: "Electronics Fundamentals",
      icon: "circuit-board",
      color: "blue",
      tag: "Core Engineering",
      items: [
        { name: "Analog & Digital Circuit Design", level: "Core Learning" },
        { name: "Signals & Linear Systems", level: "Active Study" },
        { name: "Microcontrollers & Embedded Hardware", level: "Prototyping" },
        { name: "Electronic Instrumentation & Multimeters", level: "Practical Lab" },
        { name: "Logic Gates & Sequential Logic", level: "Strong Foundation" }
      ]
    },
    {
      category: "Artificial Intelligence Fundamentals",
      icon: "sparkles",
      color: "purple",
      tag: "Tech Exploration",
      items: [
        { name: "Machine Learning Concepts & Workflow", level: "Workshop Guided" },
        { name: "Neural Network Architectures", level: "Active Learning" },
        { name: "Python for Scientific Computing", level: "Learning Track" },
        { name: "Data Exploration & Visualization", level: "Applied Practice" },
        { name: "AI Application in Hardware", level: "Emerging Focus" }
      ]
    },
    {
      category: "Communication Engineering",
      icon: "radio",
      color: "indigo",
      tag: "ECE Domain",
      items: [
        { name: "Analog & Digital Modulation Schemes", level: "Core Study" },
        { name: "Electromagnetic Theory & Waveguides", level: "Theory Fundamentals" },
        { name: "RF & Wireless Communication Basics", level: "Introductory" },
        { name: "Signal Sampling & Fourier Transforms", level: "Active Study" }
      ]
    },
    {
      category: "Technology Research",
      icon: "search",
      color: "emerald",
      tag: "Academic Inquiry",
      items: [
        { name: "Scientific Literature Survey & Review", level: "Research Method" },
        { name: "Semiconductor Industry Roadmap Analysis", level: "Industry Study" },
        { name: "Emerging Nanotech & 2D Materials", level: "Reading Track" },
        { name: "Technical Documentation & Reporting", level: "Active Practice" }
      ]
    },
    {
      category: "Problem-Solving & Continuous Learning",
      icon: "wrench",
      color: "amber",
      tag: "Growth Mindset",
      items: [
        { name: "Analytical Problem Decomposition", level: "Engineering Approach" },
        { name: "Hands-on Hardware Breadboarding", level: "Lab Tested" },
        { name: "Self-Directed Workshop Learning", level: "Continuous Habit" },
        { name: "Collaborative Team Engineering", level: "Active Engagement" }
      ]
    }
  ],

  // Dedicated Projects Section (3 editable placeholders as requested)
  projects: [
    {
      id: "project-semiconductor",
      category: "Semiconductor & Electronics",
      title: "Semiconductor and Electronics Project",
      isPlaceholder: true,
      badge: "Upcoming Project • Placeholder",
      shortDesc: "Dedicated project placeholder for semiconductor device analysis, CMOS logic simulation, or integrated circuit design prototyping.",
      longDesc: "This slot is prepared for an upcoming electronics and semiconductor engineering project. Planned to cover circuit schematic modeling, semiconductor behavior analysis, and functional hardware validation.",
      technologies: ["Semiconductor Physics", "Circuit Simulation", "CMOS Logic", "Breadboard Prototyping"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
      features: [
        "Semiconductor characteristics verification",
        "Schematic design and waveform analysis",
        "Component parameter optimization"
      ]
    },
    {
      id: "project-ai",
      category: "Artificial Intelligence",
      title: "Artificial Intelligence Project",
      isPlaceholder: true,
      badge: "Upcoming Project • Placeholder",
      shortDesc: "Dedicated project placeholder for exploring machine learning algorithms, computer vision, or AI-assisted data modeling.",
      longDesc: "This slot is prepared for an artificial intelligence initiative exploring predictive models, neural classification, or intelligent algorithmic problem solving.",
      technologies: ["Python", "Machine Learning", "Neural Networks", "Data Modeling"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
      features: [
        "Data preprocessing & model training pipeline",
        "Pattern recognition and inference testing",
        "Evaluation metrics and visual benchmarking"
      ]
    },
    {
      id: "project-innovation",
      category: "Engineering Innovation",
      title: "Engineering Innovation Project",
      isPlaceholder: true,
      badge: "Upcoming Project • Placeholder",
      shortDesc: "Dedicated project placeholder for smart embedded systems, IoT sensors, or interdisciplinary hardware-software integration.",
      longDesc: "This slot is reserved for a future engineering innovation project combining sensor telemetry, microcontroller intelligence, and real-world system automation.",
      technologies: ["Microcontrollers", "IoT Sensors", "Embedded C/C++", "Signal Telemetry"],
      githubUrl: "https://github.com/",
      demoUrl: "#",
      features: [
        "Sensor data acquisition & signal filtering",
        "Microcontroller firmware implementation",
        "Real-world telemetry & alert triggers"
      ]
    }
  ],

  // Achievements & Learning
  achievements: [
    {
      id: "achieve-google-ai",
      title: "Google AI Workshop",
      badge: "Technology Workshop",
      issuer: "Google AI Learning Initiative",
      datePlaceholder: "[Workshop Date - Add Later]",
      certificateImage: "assets/certificate-placeholder.svg",
      skillsLearned: [
        "Foundational Artificial Intelligence & ML concepts",
        "Understanding deep learning architectures",
        "Real-world use cases & algorithmic ethics",
        "Emerging trends in artificial intelligence"
      ],
      certificateUrl: "#certificate-modal",
      actionText: "View Certificate Details",
      isEditable: true,
      description: "Active participation in Google's AI workshop series, exploring modern AI paradigms, intelligent system design, and practical industry problem-solving."
    },
    {
      id: "achieve-ece-symposium",
      title: "Technical Seminars & ECE Events",
      badge: "Academic Engagement",
      issuer: "JECRC University & Technical Chapters",
      datePlaceholder: "[Academic Sessions / Ongoing]",
      certificateImage: "assets/certificate-placeholder.svg",
      skillsLearned: [
        "Semiconductor industry trends",
        "Electronics hardware innovation",
        "Academic peer collaboration"
      ],
      certificateUrl: "#",
      actionText: "Update Event Details",
      isEditable: true,
      description: "Participation in departmental engineering seminars, technology exhibitions, and guest lectures on semiconductor advancements."
    },
    {
      id: "achieve-future-slot",
      title: "Future Milestone / Hackathon",
      badge: "Upcoming Slot",
      issuer: "[Add Issuer / Organization]",
      datePlaceholder: "[Upcoming / Add Date]",
      certificateImage: "assets/certificate-placeholder.svg",
      skillsLearned: [
        "Hands-on project development",
        "Technical paper publication / presentation",
        "Engineering competition participation"
      ],
      certificateUrl: "#",
      actionText: "Add New Milestone",
      isEditable: true,
      description: "This flexible slot is ready for your next hackathon award, published research poster, or specialized industry certification."
    }
  ],

  // Contact Details
  contact: {
    heading: "Let's Connect and Build Something Innovative.",
    message: "I am always interested in learning about new technologies, connecting with like-minded people, and exploring opportunities in engineering, semiconductors, and artificial intelligence.",
    email: "janmajay.kalyanwat@example.com", // Replace with your actual email
    phonePlaceholder: "+91 [Your Phone Number - Optional]",
    location: "Jaipur, Rajasthan, India (JECRC University)",
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    formEndpointNote: "This form has active client-side validation. Connect a service like Formspree, EmailJS, or your backend to receive submissions directly in your mailbox."
  }
};

// Make accessible globally
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
