import type { Translations } from "./types";

//TODO: Translate content to Japanese and verify correctness
export const ja: Translations = {
  nav: {
    mission: "Mission",
    events: "Events",
    media: "Media",
    results: "Results",
    newsletter: "Newsletter",
    contact: "Contact",
    news: "News",
    search: "Search",
    logoAlt: "Q-Neko",
  },
  hero: {
    label: "Q-Neko",
    headline1: "Quantum",
    headline2: "Acceleration",
    headline3: "Across Continents",
    jpLine1: "Nippon-Europe Quantum Koraborēshon",
    jpLine2: "ニッポン・ヨーロッパ 量子コラボレーション",
    description:
      "Q-Neko unites Europe and Japan's leading research and industry partners to develop the next generation of quantum-enhanced computing solutions - bridging supercomputing with quantum acceleration for real societal impact.",
    exploreCta: "Explore the Project",
    partnersCta: "Our Partners",
    postsCta: "Recents",
    logoAlt: "Q-Neko ロゴ",
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
    fundingStatement:
      "This project received funding from the European High Performance Computing Joint Undertaking (EuroHPC JU) under the European Union's Horizon Europe framework program for research and innovation and Grant Agreement No. TODO.",
    disclaimer:
      "Views and opinions expressed are, however, those of the author(s) only and do not necessarily reflect those of the European Union or EuroHPC Joint Undertaking. Neither the European Union nor the granting authority can be held responsible for them.",
    developedBy: "Developed By Q-Neko",
    developedCopyright: "Copyright © Q-Neko 2026",
    logoAlt: "Q-Neko",
    fundedByEuAlt: "欧州連合により資金提供",
    eurohpcAlt: "EuroHPC",
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
      cookies: {
        label: "Cookie",
        href: "/cookies",
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
    codeOfConduct: "Code of Conduct",
    privacyPolicy: "Privacy Policy",
    cookies: "Cookieと訪問者統計",
    newsletter: "Newsletter",
    contact: "Contact",
    events: "Events",
  },
  privacyPolicy: {
    content: "Privacy Policy content will be displayed here." //TODO replace with actual content
  },
  codeOfConduct: {
    content: "Code of Conduct content will be displayed here." //TODO replace with actual content
  },
  cookies: {
    banner: {
      title: "プライバシーを尊重します",
      body: "本サイトでは、サイトの動作に必要な少数のCookieを使用します。また、ご同意いただいた場合に限り、サイトの利用状況を把握するため匿名のMatomoアナリティクスを使用します。お客様のデータを広告に利用することはありません。",
      learnMore: "Cookieと訪問者統計について詳しく見る",
      necessaryTitle: "必須",
      necessaryDesc: "言語設定や同意の選択を記憶するなど、サイトの動作に必要なものです。",
      alwaysOn: "常に有効",
      analyticsTitle: "匿名アナリティクス",
      analyticsDesc: "EU内でホストされるMatomoによる匿名の利用統計です。サイトの改善に役立てます。",
      acceptAll: "すべて許可",
      rejectAll: "拒否",
      save: "選択を保存",
      settingsLabel: "Cookie設定",
    },
    page: {
      intro:
        "このページでは、Q-NekoのウェブサイトがどのようにCookieを使用し、匿名の訪問者統計を収集するかについて説明します。トラッキングは最小限に抑えており、任意の処理はプライバシーに配慮した匿名のアナリティクスのみです。お客様のデータを広告に利用したり、第三者と共有することはありません。",
      sections: [
        {
          heading: "必須Cookie",
          body: "本サイトでは、言語設定やCookie同意の選択を記憶するなど、基本的な機能のために必要な少数のCookieおよびローカルストレージを使用します。これらは無効にすることはできず、他のサイトを横断してお客様を追跡することはありません。",
        },
        {
          heading: "訪問者統計",
          body: "ご同意いただいた場合、サイトの利用状況を把握し改善するために匿名の利用データを収集します。このデータは、EU内でホストされるプライバシーに配慮したアナリティクスツールMatomoでのみ処理されます。いかなる段階でもデータがEU域外へ転送・保存されることはありません。データを広告に利用したり、第三者と共有することはありません。",
        },
        {
          heading: "収集する情報",
          items: [
            "閲覧したページ（URLおよびタイトル）",
            "デバイスの種類・ブランド・画面解像度",
            "ブラウザの種類と選択された言語",
            "匿名の訪問識別子",
            "参照元サイトおよび検索語",
            "クリックされたリンクなどの操作",
            "訪問日時および匿名化されたIPアドレス（末尾のブロックを削除）",
            "おおよその国レベルの位置情報",
          ],
        },
        {
          heading: "ブラウザに保存されるもの",
          items: [
            "consentAnalytics: Cookie同意の選択。次回の訪問時に記憶できるようローカルに保存されます（必須）。",
            "tracking: アナリティクスを許可した場合にのみ設定されるCookieで、匿名アナリティクスが有効であることを示します。拒否または同意の撤回により削除されます。",
          ],
        },
      ],
      manageHeading: "同意の管理",
      manageBody:
        "同意はいつでも変更・撤回できます。アナリティクスの同意を撤回すると、アナリティクスCookieはブラウザから直ちに削除されます。",
      manageCta: "Cookie設定を開く",
    },
  },
  recentActivity: {
    sectionLabel: "Latest",
    heading: "What's New",
    intro: "Recent news, upcoming events, and latest results from the Q-Neko consortium.",
    viewAll: "View all",
  },
  langSwitch: {
    label: "English",
    ariaLabel: "言語を切り替える",
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
      intro: "Welcome to the Q-Neko Media Corner. Here you can find official communication materials, press releases, and media coverage related to the Q-Neko project.",
      pressLabel: "Press contact",
      pressEmail: "communications@q-neko.eu", //TODO: replace with actual email address
      tabs: {
        communicationMaterials: "広報資料",
        pressReleases: "プレスリリース",
        clipping: "メディア掲載",
      },
      comingSoonCommunicationMaterials: "広報資料は準備が整い次第こちらに掲載されます。",
      comingSoonPressReleases: "プレスリリースは準備が整い次第こちらに掲載されます。",
      comingSoonClipping: "メディア掲載は準備が整い次第こちらに掲載されます。",
    },
    newsletter: {
      sectionLabel: "Newsletter",
      heading: "Stay in the Loop",
      intro: "Subscribe to the Q-Neko newsletter to receive updates on our research progress, upcoming events, and consortium news directly in your inbox.",
      subscribeCta: "Subscribe",
      emailLabel: "メールアドレス",
      emailPlaceholder: "your@email.com",
      submitSuccess: "メッセージを送信しました。",
      emailRequired: "メールアドレスは必須です",
      emailInvalid: "メールアドレスが正しくありません",
      previousHeading: "過去のニュースレター",
      previousComingSoon: "過去のニュースレターは準備が整い次第こちらに掲載されます。",
    },
    contact: {
      sectionLabel: "Contact",
      heading: "Get in Touch",
      intro: "For general inquiries about the Q-Neko project, partnerships, or collaboration opportunities, please reach out to the project coordination office.",
      coordinatorLabel: "Project Coordinator",
      coordinator: "CSC – IT Center for Science, Finland", //TODO: replace with coordinator's name
      emailLabel: "Email",
      email: "info@q-neko.eu", //TODO: replace with actual email address
      pmoLabel: "Project Management Office",
      pmo: "PMO Contact", //TODO: replace with PMO contact's name
      pmoEmail: "pmo@q-neko.eu", //TODO: replace with actual PMO email address
      form: {
        nameLabel: "名前",
        emailLabel: "メールアドレス",
        messageLabel: "メッセージ",
        submitCta: "メッセージを送信",
        privacyPolicyLabel: "プライバシーポリシー",
        privacyPolicyLink: "/privacy-policy",
        privacyPolicyText: "私は同意します",
        privacyPolicyLinkText: "プライバシーポリシー",
        submitSuccess: "メッセージを送信しました。",
        errors: {
          nameRequired: "名前は必須です",
          emailRequired: "メールアドレスは必須です",
          emailInvalid: "メールアドレスが正しくありません",
          messageRequired: "メッセージは必須です",
          privacyRequired: "プライバシーポリシーに同意してください",
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
