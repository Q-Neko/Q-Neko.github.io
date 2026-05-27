import type { Translations } from "./types";

// TODO: verify content
export const en: Translations = {
  nav: {
    mission: "Mission",
    events: "Events",
    media: "Media",
    results: "Results",
    newsletter: "Newsletter",
    contact: "Contact",
    news: "News",
    search: "Search",
  },
  hero: {
    label: "Q-Neko",
    headline1: "Quantum",
    headline2: "Acceleration",
    headline3: "Across Continents",
    jpLine1: "ニッポン・ヨーロッパ 量子コラボレーション",
    jpLine2: "Nippon-Europe Quantum Koraborēshon",
    description:
      "Q-Neko unites Europe and Japan's leading research and industry partners to develop the next generation of quantum-enhanced computing solutions - bridging supercomputing with quantum acceleration for real societal impact.",
    exploreCta: "Explore the Project",
    partnersCta: "Our Partners",
    postsCta: "Recents",
  },
  mission: {
    sectionLabel: "Our Mission",
    heading: "Bridging Classical & Quantum Worlds",
    body: "Funded by Horizon Europe and the EuroHPC Joint Undertaking alongside Japan's Strategic Innovation Promotion Program (SIP), Q-Neko advances five closely connected ambitions in hybrid HPC+AI+QC - from algorithm development to industrial-grade deployment.",
    quote:
      "Q-Neko will drive the emerging promise of combining traditional supercomputing with quantum acceleration towards concrete societal impact.",
    quoteAuthor: "- Mikael Johansson, Project Coordinator, CSC",
    pillars: [
      {
        title: "Researcher Exchange",
        desc: "Intensifying scientific networking between European and Japanese quantum communities through active researcher and engineer exchange programs.",
      },
      {
        title: "Technology Roadmap",
        desc: "Producing a forward-looking roadmap to strengthen secure supply chains and guide long-term strategic collaboration across both regions.",
      },
      {
        title: "Quantum Solution Library",
        desc: "Assembling a high-impact library of quantum-enabled solutions targeting pressing scientific and industrial challenges.",
      },
      {
        title: "Benchmarks & Standards",
        desc: "Contributing to robust benchmarks and pre-standardization efforts in the emerging field of HPC–quantum integration.",
      },
      {
        title: "HPC+AI+QC Software Stack",
        desc: "Advancing the unified software stack required for seamless integration of classical supercomputing, AI, and quantum computing.",
      },
    ],
  },
  funding: {
    sectionLabel: "Funding & Governance",
    heading: "Open by Design.",
    body: "Q-Neko is co-funded under Horizon Europe and the EuroHPC Joint Undertaking on the European side, and Japan's Cross-ministerial Strategic Innovation Promotion Program (SIP). It is the first concrete outcome of the EU-Japan Letter of Intent on Quantum Science and Technology, signed in May 2025.",
    pill1: "Horizon Europe",
    pill2: "EuroHPC JU",
    pill3: "Japan SIP",
  },
  partners: {
    sectionLabel: "Partners",
    heading: "16 Partners.\nTwo Continents.\nOne Vision.",
  },
  footer: {
    tagline:
      "The Nippon-Europe Quantum Koraborēshon - advancing quantum-accelerated computing for a better society through trusted EU-Japan collaboration.",
    projectCol: "Project",
    fundingCol: "Funding",
    contactCol: "Contact",
    copyright: "© 2026 Q-Neko Consortium · Nippon-Europe Quantum Koraborēshon",
    coordinatedBy: "Coordinated by CSC - IT Center for Science, Finland",
    links: {
      mission: {
        label: "Mission",
        href: "/#mission",
      },
      consortium: {
        label: "Consortium",
        href: "/#consortium",
      },
      news: {
        label: "News",
        href: "/news",
      },
      results: {
        label: "Results",
        href: "/results",
      },
      events: {
        label: "Events",
        href: "/events",
      },
      horizonEurope: {
        label: "Horizon Europe",
        href: "https://ec.europa.eu/horizonEurope/",
      },
      euroHPC: {
        label: "EuroHPC JU",
        href: "https://www.eurohpc-ju.eu/",
      },
      japanSIP: {
        label: "Japan SIP",
        href: "https://www.mext.go.jp/en/a_top/strategic_innovation.htm",
      },
      partnership: {
        label: "EU-Japan Partnership",
        href: "https://www.eujapan.org/",
      },
      contacts: {
        label: "Contacts",
        href: "/contact",
      },
      media: {
        label: "Media Corner",
        href: "/media",
      },
      newsletter: {
        label: "Newsletter",
        href: "/newsletter",
      },
      linkedIn: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/q-neko/",
      },
      privacyPolicy: {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      codeOfConduct: {
        label: "Code of Conduct",
        href: "/code-of-conduct",
      },
    },
  },
  news: {
    sectionLabel: "News",
    heading: "News & Updates",
    pageIntro:
      "Updates on our research, insights into quantum computing, and news from the Q-Neko consortium. Stay tuned for the latest developments.",
    comingSoon: "News will appear here as the project advances.",
  },
  pagination: {
    first: "First",
    previous: "Previous",
    next: "Next",
    last: "Last",
    pageOf: "Page {current} of {last}",
  },
  pages: {
    quantumComputers: "Quantum Computers",
    search: "Search",
    notFound: "404 Page Not Found",
    news: "News",
    consortium: "Consortium",
    results: "Results",
    media: "Media",
    newsletter: "Newsletter",
    contact: "Contact",
    events: "Events",
  },
  recentActivity: {
    sectionLabel: "Latest",
    heading: "What's New",
    intro: "Recent news, upcoming events, and latest results from the Q-Neko consortium.",
    viewAll: "View all",
  },
  langSwitch: {
    label: "日本語",
  },
  pageContent: {
    consortium: {
      sectionLabel: "Consortium",
      heading: "16 Partners.\nTwo Continents.\nOne Vision.",
      intro: "Q-Neko brings together leading research institutes, universities, and industry partners from across Europe and Japan. Together, we form a unique consortium dedicated to advancing quantum-accelerated computing and fostering deep scientific collaboration across continents.",
    },
    results: {
      sectionLabel: "Results",
      heading: "Publications & Deliverables",
      intro: "Here you can find project deliverables, publications, reports, presentations, and other public materials produced throughout the project lifecycle.",
      comingSoon: "Results will be published here as the project advances.",
      filterLabel: "Filter by type",
      filters: {
        all: "All",
        deliverable: "Deliverable",
        milestone: "Milestone",
        publication: "Publication",
        software: "Software",
        presentation: "Presentation",
        poster: "Poster",
      },
    },
    media: {
      sectionLabel: "Media Corner",
      heading: "Media Corner",
      intro: "Welcome to the Q-Neko Media Corner. Here you can find official communication materials, press releases, and media coverage related to the Q-Neko project",
      pressLabel: "Press contact",
      pressEmail: "communications@q-neko.eu", //TODO: replace with actual email address
      tabs: {
        communicationMaterials: "Communication materials",
        pressReleases: "Press releases",
        clipping: "Media coverage",
      },
      comingSoonCommunicationMaterials: "Communication materials will appear here as they become available.",
      comingSoonPressReleases: "Press releases will appear here as they become available.",
      comingSoonClipping: "Media coverage will appear here as it becomes available.",
    },
    newsletter: {
      sectionLabel: "Newsletter",
      heading: "Stay in the Loop",
      intro: "Subscribe to the Q-Neko newsletter to receive updates on our research progress, upcoming events, and consortium news directly in your inbox.",
      subscribeCta: "Subscribe",
    },
    contact: {
      sectionLabel: "Contact",
      heading: "Get in Touch",
      intro: "For general inquiries about the Q-Neko project, partnerships, or collaboration opportunities, please reach out to us through these channels.",
      coordinatorLabel: "Project Coordinator",
      coordinator: "CSC – IT Center for Science, Finland", //TODO: replace with coordinator's name
      emailLabel: "Email",
      email: "info@q-neko.eu", //TODO: replace with actual email address
      pmoLabel: "Project Management Office",
      pmo: "PMO Contact", //TODO: replace with PMO contact's name
      pmoEmail: "pmo@q-neko.eu", //TODO: replace with actual PMO email address
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        submitCta: "Send Message",
        privacyPolicyLabel: "Privacy Policy",
        privacyPolicyLink: "/privacy-policy",
        privacyPolicyLinkText: "Privacy policy",
        privacyPolicyText: "I accept the",
      },
    },
    events: {
      sectionLabel: "Events",
      heading: "Workshops & Conferences",
      intro: "Q-Neko organises and participates in workshops, conferences, and community events to foster collaboration between European and Japanese quantum communities.",
      comingSoonUpcoming: "Upcoming events will appear here.",
      comingSoonPast: "Past events will appear here.",
      tabs: {
        upcoming: "Upcoming",
        past: "Past",
      },
    },
  },
};
