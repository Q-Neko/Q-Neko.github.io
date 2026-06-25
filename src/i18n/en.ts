import type { Translations } from "./types";

export const en: Translations = {
  nav: {
    home: "Home",
    mission: "Mission",
    events: "Events",
    media: "Media",
    results: "Results",
    newsletter: "Newsletter",
    contact: "Contact",
    news: "News",
    search: "Search",
    logoAlt: "Q-Neko",
    menuLabel: "Menu",
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
    logoAlt: "Q-Neko Logo",
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
    heading: "Co-Funded, Jointly Governed.",
    body: "Q-Neko is co-funded under Horizon Europe and the EuroHPC Joint Undertaking on the European side, and Japan's Cross-ministerial Strategic Innovation Promotion Program (SIP). It is the first concrete outcome of the EU-Japan Letter of Intent on Quantum Science and Technology, signed in May 2025.",
    pills: ["Horizon Europe", "EuroHPC JU", "Japan SIP"],
  },
  partners: {
    sectionLabel: "Partners",
    heading: "16 Partners.\nTwo Continents.\nOne Vision.",
  },
  footer: {
    tagline:
      "The Nippon-Europe Quantum Koraborēshon - advancing quantum-accelerated computing for a better society through trusted EU-Japan collaboration.",
    columns: [
      {
        heading: "Project",
        links: [
          { label: "Mission", href: "/#mission" },
          { label: "Consortium", href: "/#consortium" },
          { label: "News", href: "/news" },
          { label: "Results", href: "/results" },
          { label: "Events", href: "/events" },
        ],
      },
      {
        heading: "Funding",
        links: [
          { label: "Horizon Europe", href: "https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en" },
          { label: "EuroHPC JU", href: "https://www.eurohpc-ju.europa.eu/index_en" },
          { label: "Japan SIP", href: "https://www.jst.go.jp/sip/en/index.html" },
        ],
      },
      {
        heading: "Contact",
        links: [
          { label: "Contacts", href: "/contact" },
          { label: "Media Corner", href: "/media" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/q-neko/" },
        ],
      },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
    copyright: "© 2026 Q-Neko Consortium · Nippon-Europe Quantum Koraborēshon",
    coordinatedBy: "Coordinated by CSC - IT Center for Science, Finland",
    fundingStatement:
      "The project is supported by the EuroHPC Joint Undertaking (Grant Agreement No. 101241875.) and its members including top-up funding by the Government of Japan.",
    disclaimer:
      "Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or EuroHPC JU. Neither the European Union nor the granting authority can be held responsible for them.",
    developedBy: "Developed By Q-Neko",
    developedCopyright: "Copyright © Q-Neko 2026",
    logoAlt: "Q-Neko",
    funderLogos: [
      { src: "/logos/funders/co_funded_by_eu.png", alt: "Funded by the European Union" },
      { src: "/logos/funders/eurohpc.png", alt: "EuroHPC" },
      { src: "/logos/funders/sip.png", alt: "Japan SIP" },
    ],
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
    codeOfConduct: "Code of Conduct",
    privacyPolicy: "Privacy Policy",
    cookies: "Cookies & Visitor Statistics",
    newsletter: "Newsletter",
    contact: "Contact",
    events: "Events",
  },
  privacyPolicy: {
    intro: [
      "Q-Neko is committed to respecting your privacy. This policy explains how we collect, use, and protect your personal data when you interact with our website and services.",
      "Edited on 8th of June 2026.",
    ],
    sections: [
      {
        id: "controller-information",
        heading: "Controller Information",
        body: [
          "The data controller for the Q-Neko project is CSC – IT Center for Science, Finland.",
        ],
        items: [
          "CSC - IT Center for Science Ltd",
          "P.O. Box 405 (Keilaranta 14)",
          "02101 Espoo, Finland",
          "Tel. +358 (0)9 457 2821 (operator)",
          { text: "servicedesk(at)csc.fi", href: "mailto:servicedesk@csc.fi" },
          "Business ID: 0920632-0",
          { text: "www.csc.fi", href: "https://www.csc.fi" },
        ],
        postBody: '(Hereinafter referred to as "we" or "CSC")',
      },
      {
        id: "contact-person",
        heading: "Contact person for register-related matters",
        body: ["For any questions regarding this privacy policy or our data processing practices, please contact our Data Protection Officer."],
        items: [
          ["Data asset owner: ", { text: "comms.qneko(at)postit.csc.fi", href: "mailto:comms.qneko@postit.csc.fi" }],
          ["Data Protection Officer: ", { text: "privacy(at)csc.fi", href: "mailto:privacy@csc.fi" }],
        ],
      },
      {
        id: "legal-basis",
        heading: "Legal basis for processing",
        body: [
          "The data subjects whose personal data is processed are newsletter subscribers and recipients.",
          "The processing of personal data is based on your consent when you subscribe to the newsletter.",
          "You can always withdraw your consent or remove yourself from the mailing list.",
        ],
      },
      {
        id: "purposes",
        heading: "Purposes of processing",
        body: ["The purpose of processing personal data is to enable project communications and dissemination, as well as to share updates on Q-Neko project’s current topics."],
      },
      {
        id: "automated-decision-making",
        heading: "Automated decision-making and profiling",
        body: ["Data is not used for profiling purposes or automated decision-making."],
      },
      {
        id: "processed-data",
        heading: "Processed data",
        body: ["We are processing the following personal data:"],
        items: [
          "Email address",
          "Given consents",
          "Name",
          "Subscriber newsletter reading activity",
        ],
      },
      {
        id: "data-source",
        heading: "Where do we get your data from?",
        body: ["When you subscribe to the newsletter, we collect the information directly from you."],
      },
      {
        id: "data-sharing",
        heading: "Data sharing and transfers",
        body: [
          "We can hand over your personal data to others to the extent required by law and as necessary for the provision of services and compliance with agreements.",
          "CSC uses a service provided by Liana Technologies Oy to manage newsletter subscriptions and to send newsletters. In addition, access to the personal data of registered individuals is restricted to designated CSC employees according to their work duties.",
          "In these cases, the service providers process personal data only in accordance with the instructions of CSC and on behalf of CSC. CSC has ensured that the processing of personal data is then agreed upon as required by data protection legislation.",
        ],
      },
      {
        id: "data-transfers-outside-eu",
        heading: "Data transfers outside the EU/EEA",
        body: ["Personal data is not transferred outside the European Union (EU) or the European Economic Area (EEA)."],
      },
      {
        id: "data-retention",
        heading: "Data retention",
        body: [
          "The data is stored only as long as it is necessary for this processing of personal data as defined in this privacy notice or according to the statutory retention periods.",
          "Personal data is stored for the duration of the Q-Neko project. The project ends in December 2028. In addition, for the reporting reasons some data can be stored until February 2029.",
          "Once the retention period for personal data has expired and there are no longer grounds for processing them within the limits permitted by data protection legislation, the personal data will be deleted.",
        ],
      },
      {
        id: "data-protection",
        heading: "How do we protect your data?",
        body: [
          "Only persons who have the right to process the personal data on behalf of CSC can access the data files in accordance with their job descriptions. Access to personal data is restricted and users are identified by a username and password.",
          "With outsourced service providers, CSC has agreed on the necessary data protection obligations in accordance with the General Data Protection Regulation.",
        ],
      },
      {
        id: "your-rights",
        heading: "Your rights",
        body: [
          "Data subjects have the rights under the General Data Protection Regulation to, among other things, inspect their own data, access personal data and demand the correction of incorrect data concerning them. The right of inspection or access to data is carried out according to resources without undue delay, but always within the time limit required by the General Data Protection Regulation at the latest. The identity of the data subject is checked before providing the information. On request, the information is provided in written form.",
          "The controller must, independently or at the request of the data subject, correct or supplement the incorrect or deficient information. The controller shall, independently or at the request of the data subject, remove unnecessary or outdated data, unless the law or the contract entitles or obligates the controller to retain data.",
          "The data subject has the right to withdraw the consent he has given, if the processing is based on consent. Withdrawal of consent does not affect the processing that took place before the withdrawal.",
          "The data subject has the right to request restriction of processing or to object to processing within the limits and in accordance with applicable data protection legislation.",
          "Data subjects have the right to transfer data from one system to another, i.e., to receive the personal data concerning them in a structured and commonly used format, and to transfer it to another controller within the limits and in accordance with applicable data protection legislation.",
          ["You can send the above requests and questions regarding this privacy policy and CSC's processing of personal data to ", { text: "privacy(at)csc.fi", href: "mailto:privacy@csc.fi" }, "."],
          ["You also have the right to lodge a complaint with the Data Protection Ombudsman. The contact details of the Data Protection Ombudsman can be found on the Data Protection Ombudsman's website at ", { text: "tietosuoja.fi", href: "https://tietosuoja.fi" }, "."],
        ],
      },
      {
        id: "who-to-contact",
        heading: "Who to contact?",
        body: [
          ["All communications and requests regarding this policy should be made in writing or in person to the contact person named in ", { text: "section two (2)", href: "#contact-person" }, "."],
        ],
      },
      {
        id: "changes",
        heading: "Changes to this privacy policy",
        body: ["Changes to this policy will be dated. We may inform you of any significant changes by email or notice on our website."],
      },
    ],
  },
  codeOfConduct: {
    intro:
      "The primary goal of Q-Neko is to enhance collaboration between Europe and Japan. This Code of Conduct sets out the values and principles that guide our work and the way we treat one another, our partners, and the wider community.",
    sections: [
      {
        heading: "Our commitment",
        body: "Q-Neko is committed to transparency, honesty, and responsibility. We strive to keep our promises and to act ethically and sustainably in everything we do, translating our shared values into practical guidelines for scientific practice and for our interactions with all stakeholders.",
      },
      {
        heading: "Our values",
        body: "Our decisions are guided by a set of core values that underpin every collaboration:",
        items: [
          "Responsible action in how we conduct research and manage resources",
          "Care and respect for the people we work with and the communities we serve",
          "Collaboration across institutions, disciplines, and cultures",
          "Expertise, applied with rigour and intellectual honesty",
        ],
      },
      {
        heading: "Rights and laws",
        body: "We respect human rights as set out in the UN Universal Declaration of Human Rights and uphold international labour standards, including the principles of the International Labour Organization and the UN Global Compact. Discrimination, harassment, and intimidation in any form are not tolerated.",
      },
      {
        heading: "Ethics and conduct",
        body: "Members are expected to maintain relationships based on mutual respect and trust. No member will face retaliation for raising an ethical concern in good faith or for refusing to take part in an unethical act. A confidential mechanism is available for reporting threats to the public interest or the common good.",
      },
      {
        heading: "Scientific integrity",
        body: "Beyond organisational conduct, we are committed to the genuineness and rigour of our research. Scientific integrity rests on honesty, reliability, transparency, and responsibility — to one another, to future generations of scientists, and to society as a whole.",
      },
    ],
  },
  cookies: {
    banner: {
      title: "We respect your privacy",
      body: "This site uses a few necessary cookies to work, and, only with your consent, anonymous Matomo analytics to help us understand how the site is used. We never use your data for advertising.",
      learnMore: "Read more about cookies and visitor statistics",
      necessaryTitle: "Necessary",
      necessaryDesc: "Required for the site to function, such as remembering your language and consent choice.",
      alwaysOn: "Always on",
      analyticsTitle: "Anonymous analytics",
      analyticsDesc: "Anonymised usage statistics via Matomo, hosted within the EU. Helps us improve the site.",
      acceptAll: "Accept all",
      rejectAll: "Reject",
      save: "Save choices",
      settingsLabel: "Cookie settings",
    },
    page: {
      intro:
        "This page explains how the Q-Neko website uses cookies and collects anonymous visitor statistics. We keep tracking to a minimum: the only optional processing is privacy-friendly, anonymised analytics, and we never use your data for advertising or share it with third parties.",
      sections: [
        {
          heading: "Necessary cookies",
          body: "The website uses a small number of necessary cookies and local storage entries required for basic functionality, such as remembering your language selection and your cookie consent choice. These cannot be switched off, and they do not track you across other sites.",
        },
        {
          heading: "Visitor statistics",
          body: "With your consent, we collect anonymised usage data to understand how the site is used and to improve it. This data is processed exclusively in Matomo, a privacy-friendly analytics tool hosted within the EU. No data is transferred or stored outside the EU region at any stage. We do not use the data for advertising and we do not share it with third parties.",
        },
        {
          heading: "What is collected",
          items: [
            "Pages visited (URLs and titles)",
            "Device type, brand, and screen resolution",
            "Browser type and selected language",
            "An anonymous visit identifier",
            "Referring website and search terms",
            "Interactions such as clicked links",
            "Visit timestamps and an anonymised IP address (final blocks removed)",
            "Approximate, country-level location",
          ],
        },
        {
          heading: "Stored in your browser",
          items: [
            "consentAnalytics: your cookie consent choice, stored locally so we can remember it on your next visit (necessary).",
            "tracking: a cookie set only after you accept analytics. It marks that anonymous analytics are enabled. Declining or withdrawing consent deletes it.",
          ],
        },
      ],
      manageHeading: "Managing your consent",
      manageBody:
        "You can change or withdraw your consent at any time. Withdrawing analytics consent immediately deletes the analytics cookie from your browser.",
      manageCta: "Open cookie settings",
    },
  },
  recentActivity: {
    sectionLabel: "Latest",
    heading: "What's New",
    intro: "Recent news, upcoming events, and latest results from the Q-Neko consortium.",
    viewAll: "View all",
  },
  langSwitch: {
    label: "日本語",
    ariaLabel: "Switch language",
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
      pressEmail: "comms.qneko@postit.csc.fi", 
      tabs: {
        communicationMaterials: "Communication materials",
        pressReleases: "Press releases",
        clipping: "Media coverage",
      },
      comingSoonCommunicationMaterials: "Communication materials will appear here as they become available.",
      comingSoonPressReleases: "Press releases will appear here as they become available.",
      comingSoonClipping: "Media coverage will appear here as it becomes available.",
      readArticle: "Read the article",
      logos: {
        heading: "Logos & brand assets",
        intro: "Download the Q-Neko logo in colour, monochrome, and symbol-only variants. Please keep the logo's proportions and colours intact when using it.",
        downloadAll: "Download all logos (ZIP)",
        download: "Download",
      },
    },
    newsletter: {
      sectionLabel: "Newsletter",
      heading: "Stay in the Loop",
      intro: "Subscribe to the Q-Neko newsletter to receive updates on our research progress, upcoming events, and consortium news directly in your inbox.",
      subscribeCta: "Subscribe",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      submitSuccess: "Subscription successful!",
      submitError: "Subscription failed. Please try again later.",
      alreadySubscribed: "This email is already subscribed.",
      emailRequired: "Email is required",
      emailInvalid: "Email is invalid",
      previousHeading: "Previous Newsletters",
      previousComingSoon: "Previous newsletters will appear here as they become available.",
    },
    contact: {
      sectionLabel: "Contact",
      heading: "Get in Touch",
      intro: "For general inquiries about the Q-Neko project, partnerships, or collaboration opportunities, please reach out to us through these channels.",
      coordinatorLabel: "Project Coordinator",
      coordinator: "CSC – IT Center for Science, Finland",
      emailLabel: "Email",
      email: "mikael.johansson@csc.fi",
      pmoLabel: "Project Management Office",
      pmo: "PMO Contact", 
      pmoEmail: "pmo.qneko@postit.csc.fi",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        submitCta: "Send Message",
        privacyPolicyLabel: "Privacy Policy",
        privacyPolicyLink: "/privacy-policy",
        privacyPolicyLinkText: "Privacy policy",
        privacyPolicyText: "I accept the",
        submitSuccess: "Message sent successfully!",
        errors: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is invalid",
          messageRequired: "Message is required",
          privacyRequired: "You must accept the privacy policy",
        },
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
