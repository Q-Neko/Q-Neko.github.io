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
    postsCta: "News",
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
      mission: "Mission",
      applications: "Applications",
      consortium: "Consortium",
      timeline: "Timeline",
      horizonEurope: "Horizon Europe",
      euroHPC: "EuroHPC JU",
      japanSIP: "Japan SIP",
      partnership: "EU-Japan Partnership",
      csc: "CSC Finland",
      media: "Media Inquiries",
      joinNetwork: "Join the Network",
      newsletter: "Newsletter",
    },
  },
  news: {
    sectionLabel: "News",
    heading: "News & Updates",
    pageIntro:
      "Updates on our research, insights into quantum computing, and news from the Q-Neko consortium. Stay tuned for the latest developments.",
    comingSoon: "News will appear here as the project advances.",
    pagination: {
      first: "First",
      previous: "Previous",
      next: "Next",
      last: "Last",
    },
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
      intro: "Scientific publications, project deliverables, software, and open datasets produced by the Q-Neko consortium will be listed here as the project progresses.",
      comingSoon: "Results will be published here as the project advances.",
    },
    media: {
      sectionLabel: "Media",
      heading: "News & Press",
      intro: "Press releases, news articles, and media coverage related to Q-Neko. For media inquiries, please contact our communications team.",
      pressLabel: "Press contact",
      pressEmail: "communications@q-neko.eu", //TODO: replace with actual email address
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
      intro: "For general inquiries about the Q-Neko project, partnerships, or collaboration opportunities, please reach out to the project coordination office.",
      coordinatorLabel: "Project Coordinator",
      coordinator: "CSC – IT Center for Science, Finland",
      emailLabel: "Email",
      email: "info@q-neko.eu", //TODO: replace with actual email address
    },
    events: {
      sectionLabel: "Events",
      heading: "Workshops & Conferences",
      intro: "Q-Neko organises and participates in workshops, conferences, and community events to foster collaboration between European and Japanese quantum communities. Upcoming and past events will be listed here.",
      comingSoon: "Upcoming events will appear here.",
    },
  },
};
