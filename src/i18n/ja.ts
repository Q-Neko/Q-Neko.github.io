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
          { label: "Japan SIP", href: "https://www.jst.go.jp/sip/index.html" },
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
      { label: "Cookie", href: "/cookies" },
    ],
    copyright: "© 2026 Q-Neko Consortium · Nippon-Europe Quantum Koraborēshon",
    coordinatedBy: "Coordinated by CSC - IT Center for Science, Finland",
    fundingStatement:
      "This project received funding from the European High Performance Computing Joint Undertaking (EuroHPC JU) under the European Union's Horizon Europe framework program for research and innovation and Grant Agreement No. TODO.",
    disclaimer:
      "Views and opinions expressed are, however, those of the author(s) only and do not necessarily reflect those of the European Union or EuroHPC Joint Undertaking. Neither the European Union nor the granting authority can be held responsible for them.",
    developedBy: "Developed By Q-Neko",
    developedCopyright: "Copyright © Q-Neko 2026",
    logoAlt: "Q-Neko",
    funderLogos: [
      { src: "/logos/funders/co_funded_by_eu.png", alt: "欧州連合により資金提供" },
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
    cookies: "Cookieと訪問者統計",
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
        body: ["The data controller for the Q-Neko project is CSC – IT Center for Science, Finland."],
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
        heading: "Contact person for data protection",
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
      "Q-Nekoの主たる目的は、欧州と日本の連携を強化することです。本行動規範は、私たちの活動を導く価値観と原則、そして互いに、またパートナーや広く社会と接する際の姿勢を定めるものです。",
    sections: [
      {
        heading: "私たちの約束",
        body: "Q-Nekoは、透明性、誠実さ、責任を重んじます。私たちは約束を守り、すべての活動において倫理的かつ持続可能な形で行動するよう努め、共有する価値観を、科学的実践やすべての関係者との関わりにおける実践的な指針へと落とし込みます。",
      },
      {
        heading: "私たちの価値観",
        body: "私たちの意思決定は、あらゆる連携の基盤となる中核的な価値観に導かれています。",
        items: [
          "研究の遂行と資源の管理における責任ある行動",
          "共に働く人々と、私たちが貢献する地域社会への配慮と尊重",
          "機関、分野、文化を越えた協働",
          "厳密さと知的誠実さをもって発揮される専門性",
        ],
      },
      {
        heading: "権利と法",
        body: "私たちは、世界人権宣言に定められた人権を尊重し、国際労働機関（ILO）の原則や国連グローバル・コンパクトを含む国際労働基準を遵守します。いかなる形態の差別、ハラスメント、威圧も容認されません。",
      },
      {
        heading: "倫理と行動",
        body: "メンバーには、相互の尊重と信頼に基づく関係を維持することが求められます。誠実な意図をもって倫理的懸念を提起したこと、または非倫理的な行為への関与を拒否したことを理由に、いかなるメンバーも報復を受けることはありません。公共の利益や公益への脅威を報告するための、秘密が守られる仕組みを用意しています。",
      },
      {
        heading: "科学的誠実性",
        body: "組織としての行動にとどまらず、私たちは研究の真正性と厳密さに尽力します。科学的誠実性は、誠実さ、信頼性、透明性、そして責任の上に成り立ちます。それは互いに対して、未来の科学者たちに対して、そして社会全体に対する責任です。",
      },
    ],
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
      pressEmail: "comms.qneko@postit.csc.fi", //TODO: replace with actual email address
      tabs: {
        communicationMaterials: "広報資料",
        pressReleases: "プレスリリース",
        clipping: "メディア掲載",
      },
      comingSoonCommunicationMaterials: "広報資料は準備が整い次第こちらに掲載されます。",
      comingSoonPressReleases: "プレスリリースは準備が整い次第こちらに掲載されます。",
      comingSoonClipping: "メディア掲載は準備が整い次第こちらに掲載されます。",
      readArticle: "記事を読む",
      logos: {
        heading: "ロゴ・ブランド素材",
        intro: "Q-Nekoのロゴをカラー、モノクロ、シンボルのみの各バリエーションでダウンロードできます。ご使用の際はロゴの比率と配色を変更しないでください。",
        downloadAll: "すべてのロゴをダウンロード（ZIP）",
        download: "ダウンロード",
      },
    },
    newsletter: {
      sectionLabel: "Newsletter - Coming Soon",
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
      email: "comms.qneko@postit.csc.fi", //TODO: replace with actual email address
      pmoLabel: "Project Management Office",
      pmo: "PMO Contact", //TODO: replace with PMO contact's name
      pmoEmail: "pmo.qneko@postit.csc.fi", //TODO: replace with actual PMO email address
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
