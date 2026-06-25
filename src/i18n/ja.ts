import type { Translations } from "./types";

//TODO: Translate content to Japanese and verify correctness
export const ja: Translations = {
  nav: {
    home: "Q-Nekoについて",
    mission: "ミッション",
    events: "イベント",
    media: "メディア",
    results: "結果",
    newsletter: "ニュースレター",
    contact: "お問い合わせ",
    news: "ニュース",
    search: "検索",
    logoAlt: "Q-Nekoロゴ",
  },
  hero: {
    label: "Q-Neko",
    headline1: "Quantum",
    headline2: "Acceleration",
    headline3: "Across Continents",
    jpLine1: "Nippon-Europe Quantum Koraborēshon",
    jpLine2: "日本・欧州 量子コラボレーション",
    description:
      "Q-Nekoプロジェクトは、日本と欧州の一流の研究機関および産業界のパートナーを結集し、次世代の量子強化型コンピューティングソリューションを開発しています。スーパーコンピューティングと量子加速を組み合わせ、社会に真のインパクトをもたらすことを目指しています。",
    exploreCta: "Q-Nekoを探索する",
    partnersCta: "パートナー",
    postsCta: "新着情報",
    logoAlt: "Q-Nekoロゴ",
  },
  mission: {
    sectionLabel: "ミッション",
    heading: "従来と量子の世界の架け橋",
    body: "Q-Nekoは、Horizon EuropeとEuroHPC JU (欧州ハイパフォーマンス・コンピューティング共同事業)、及び日本の戦略的イノベーション創造プログラム（SIP）の資金提供を受けており、アルゴリズム開発から産業用レベルの導入に至るまで、ハイブリッドHPC+AI+QC分野における5つの目標を推進しています。",
    quote:
      "Q-Nekoは、従来のスーパーコンピューティングと量子加速を組み合わせることで生まれる新たな可能性を推進し、社会に具体的な影響をもたらしていきます。",
    quoteAuthor: "- Mikael Johansson, プロジェクトコーディネーター, CSC",
    pillars: [
      {
        title: "研究者交流",
        desc: "研究者や技術者の積極的な交流プログラムを通じて、欧州と日本の量子科学コミュニティ間の学術的な連携を強化",
      },
      {
        title: "技術ロードマップ",
        desc: "安全なサプライチェーンを強化する、長期的に両地域の戦略的連携を促進する将来のロードマップを作成",
      },
      {
        title: "量子ソリューションライブラリ",
        desc: "科学と産業の重大な課題の解決を目指す、量子技術を活用したソリューションのライブラリを構築",
      },
      {
        title: "ベンチマークと技術基準",
        desc: "HPCと量子技術の融合という新興分野において、堅牢なベンチマークの構築および標準化に向けた取り組みに貢献",
      },
      {
        title: "HPC+AI+QC ソフトウェアスタック",
        desc: "従来のスーパーコンピューティング、AI、量子コンピューティングをシームレスに統合するために必要な統合ソフトウェアスタックの開発を推進",
      },
    ],
  },
  funding: {
    sectionLabel: "資金提供とガバナンス",
    heading: "共同出資・共同運営",
    body: "Q-Nekoは、欧州側ではHorizon EuropeとEuroHPC JUから、日本側では戦略的イノベーション創造プログラム（SIP）から共同資金提供を受けています。2025年5月に署名された「日EU間の量子科学技術に関する協力趣意書」に基づく最初の具体的な成果です。",
    pills: ["Horizon Europe", "EuroHPC JU", "SIP"],
  },
  partners: {
    sectionLabel: "パートナー",
    heading: "16つのパートナー。\n2つの大陸。\n1つのビジョン。",
  },
  footer: {
    tagline:
      "日本・欧州 量子コラボレーション　ー　信頼できる日欧連携を通じて、豊かな社会の実現に向けた量子加速コンピューティングを推進",
    columns: [
      {
        heading: "プロジェクト",
        links: [
          { label: "ミッション", href: "/#mission" },
          { label: "パートナー", href: "/#consortium" },
          { label: "ニュース", href: "/news" },
          { label: "結果", href: "/results" },
          { label: "イベント", href: "/events" },
        ],
      },
      {
        heading: "資金提供",
        links: [
          { label: "Horizon Europe", href: "https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en" },
          { label: "EuroHPC JU", href: "https://www.eurohpc-ju.europa.eu/index_en" },
          { label: "SIP", href: "https://www.jst.go.jp/sip/index.html" },
        ],
      },
      {
        heading: "お問い合わせ",
        links: [
          { label: "お問い合わせ", href: "/contact" },
          { label: "メディアコーナー", href: "/media" },
          { label: "ニュースレター", href: "/newsletter" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/q-neko/" },
        ],
      },
    ],
    legalLinks: [
      { label: "プライバシーポリシー", href: "/privacy-policy" },
      { label: "行動規範", href: "/code-of-conduct" },
      { label: "クッキー", href: "/cookies" },
    ],
    copyright: "© 2026 Q-Neko Consortium · Nippon-Europe Quantum Koraborēshon",
    coordinatedBy: "Coordinated by CSC - IT Center for Science, Finland",
    fundingStatement:
      "The project is supported by the EuroHPC Joint Undertaking (Grant Agreement No. 101241875.) and its members including top-up funding by the Government of Japan.",
    disclaimer:
      "本事業は欧州連合（EU）の共同資金提供を受けています。ただし、表明された見解や意見は著者個人のものであり、必ずしも欧州連合またはEuroHPC JUの見解を反映するものではありません。欧州連合および資金提供者は、これらについて一切の責任を負いません。",
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
    sectionLabel: "ニュース",
    heading: "お知らせ＆最新情報",
    pageIntro:
      "研究成果、量子コンピューティングに関する洞察、Q-Nekoコンソーシアムからのニュースの届。",
    comingSoon: "プロジェクトの進捗に伴い、こちらに最新情報をお知らせします。",
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
    search: "検索",
    notFound: "404 Page Not Found",
    news: "ニュース",
    consortium: "コンソーシアム",
    results: "結果",
    media: "メディア",
    codeOfConduct: "行動規範",
    privacyPolicy: "プライバシーポリシー",
    cookies: "Cookieと訪問者統計",
    newsletter: "ニュースレター",
    contact: "お問い合わせ",
    events: "イベント",
  },
  privacyPolicy: {
    intro: [
      "Q-Nekoはお客様のプライバシーを尊重することをお約束します。本ポリシーでは、お客様が本プロジェクトのウェブサイトやサービスをご利用になる際に、プロジェクトがお客様の個人データをどのように収集、利用、保護するかについて説明しています。",
      "2026年6月に編集",
    ],
    sections: [
      {
        id: "controller-information",
        heading: "データ管理情報",
        body: ["Q-Nekoプロジェクトのデータ管理者は、フィンランドのCSC – IT Center for Scienceです。"],
        items: [
          "CSC - IT Center for Science Ltd",
          "P.O. Box 405 (Keilaranta 14)",
          "02101 Espoo, Finland",
          "Tel. +358 (0)9 457 2821 (operator)",
          { text: "servicedesk(at)csc.fi", href: "mailto:servicedesk@csc.fi" },
          "Business ID: 0920632-0",
          { text: "www.csc.fi", href: "https://www.csc.fi" },
        ],
        postBody: '(これから「CSC・当社]という)',
      },
      {
        id: "contact-person",
        heading: "登録関連のお問い合わせ先",
        body: ["本プライバシーポリシーまたは当社のデータ処理に関するご質問がございましたら、当社のデータ保護責任者までお問い合わせください。"],
        items: [
          ["データ資産所有者: ", { text: "comms.qneko(at)postit.csc.fi", href: "mailto:comms.qneko@postit.csc.fi" }],
          ["データ保護責任者: ", { text: "privacy(at)csc.fi", href: "mailto:privacy@csc.fi" }],
        ],
      },
      {
        id: "legal-basis",
        heading: "処理の法的根拠",
        body: [
          "個人データの処理対象となるデータ主体は、ニュースレターの購読者および受信者です。",
          "ニュースレターへの登録時に、ご本人の同意を基に個人データの処理が行われます。",
          "いつでも同意を撤回することや、メーリングリストから退会することが可能です。",
        ],
      },
      {
        id: "purposes",
        heading: "個人データの処理の目的",
        body: ["個人データを処理する目的は、プロジェクトに関する情報発信を行うこと、およびQ-Nekoプロジェクトの最新トピックに関する情報を共有することです。"],
      },
      {
        id: "automated-decision-making",
        heading: "自動意思決定とプロファイリング",
        body: ["データは、プロファイリングや自動化された意思決定には使用されません。"],
      },
      {
        id: "processed-data",
        heading: "処理済みデータ",
        body: ["次の個人データが処理されています:"],
        items: [
          "メールアドレス",
          "同意",
          "お名前",
          "購読者のニュースレター閲覧動向",
        ],
      },
      {
        id: "data-source",
        heading: "お客様のデータはどこから取得しているのですか？",
        body: ["ニュースレターにご登録いただく際、当社はお客様から直接情報を収集いたします。"],
      },
      {
        id: "data-sharing",
        heading: "データの共有および転送",
        body: [
          "当社は、法律で定められている範囲内、およびサービスの提供や契約の履行に必要な範囲において、お客様の個人データを提供することが可能です。",
          "CSCは、ニュースレターの購読管理および配信のために、Liana Technologies Oyが提供するサービスを利用しています。また、登録者の個人データへのアクセスは、職務内容に応じて指定されたCSCの従業員に限定されています。",
          "このような場合、サービス提供者は、CSCの指示に従い、かつCSCに代わってのみ個人データを処理します。CSCは、データ保護法で定められた要件に従い、個人データの処理について合意が得られていることを確認しています。",
        ],
      },
      {
        id: "data-transfers-outside-eu",
        heading: "EU／EEA域外へのデータ転送",
        body: ["個人データは、欧州連合（EU）または欧州経済領域（EEA）の外へ転送されることはありません。"],
      },
      {
        id: "data-retention",
        heading: "データの保存期間",
        body: [
          "データは、本プライバシーポリシーに定義される個人データの処理に必要な期間、または法定の保存期間に従ってのみ保存されます。",
          "個人データは、Q-Nekoプロジェクトの期間中保存されます。本プロジェクトは2028年12月に終了します。また、報告の都合上、一部のデータは2029年2月まで保存される場合があります。",
          "個人データの保存期間が満了し、かつデータ保護法で認められた範囲内で当該データを処理する根拠がなくなった場合、当該個人データは削除されます。",
        ],
      },
      {
        id: "data-protection",
        heading: "お客様のデータはどのように保護されていますか？",
        body: [
          "CSCに代わって個人データを処理する権限を有する者のみが、職務内容に従ってデータファイルにアクセスすることができます。個人データへのアクセスは制限されており、ユーザーはユーザー名とパスワードによって認証されます。",
          "外部委託先については、CSCは一般データ保護規則（GDPR）に基づき、必要なデータ保護義務について取り決めています。",
        ],
      },
      {
        id: "your-rights",
        heading: "お客様の権利",
        body: [
          "データ主体は、一般データ保護規則（GDPR）に基づき、とりわけ、自身のデータを閲覧する権利、個人データにアクセスする権利、および自身に関する不正確なデータの訂正を請求する権利を有しています。データの閲覧またはアクセスに関する権利の行使は、リソースの範囲内で遅滞なく行われますが、いかなる場合も、遅くとも一般データ保護規則で定められた期限内に行われます。情報の提供に先立ち、データ主体の身元確認が行われます。要請があった場合、情報は書面にて提供されます。",
          "管理者は、自ら、またはデータ主体の請求に基づき、不正確または不十分な情報を訂正または補完すること。管理者は、法律または契約によりデータの保持が認められているか、または義務付けられている場合を除き、自ら、またはデータ主体の請求に基づき、不要または古くなったデータを削除すること。",
          "処理が同意に基づく場合、データ主体は、自身が与えた同意を撤回する権利を有します。同意の撤回は、撤回前に実施された処理には影響を及ぼしません。",
          "データ主体は、適用されるデータ保護法規の範囲内で、かつこれに従い、処理の制限を請求する権利、または処理に異議を申し立てる権利を有します。",
          "データ主体には、あるシステムから別のシステムへデータを移転する権利、すなわち、自身に関する個人データを構造化され、一般的に使用されている形式で受け取り、適用されるデータ保護法規の範囲内で、かつそれに従って、別の管理者へ移転する権利が認められています。",
          ["Y本プライバシーポリシーおよびCSCによる個人データの取り扱いに関する上記のリクエストやご質問は、以下の宛先までお送りください。 ", { text: "privacy(at)csc.fi", href: "mailto:privacy@csc.fi" }, "."],
          ["また、データ保護オンブズマンに苦情を申し立てる権利もあります。データ保護オンブズマンの連絡先は、データ保護オンブズマンのウェブサイト ", { text: "tietosuoja.fi", href: "https://tietosuoja.fi" }, "."],
        ],
      },
      {
        id: "who-to-contact",
        heading: "連絡先",
        body: [
          ["本ポリシーに関するすべての連絡およびご要望は、第2項に記載された担当者宛てに、書面または直接お申し出ください。", { text: "第2項", href: "#contact-person" }, "."],
        ],
      },
      {
        id: "changes",
        heading: "本プライバシーポリシーの変更",
        body: ["本ポリシーの変更には日付が記載されます。重要な変更については、電子メールまたは本プロジェクトウェブサイト上の告知によりお知らせします。"],
      },
    ],
  },
  codeOfConduct: {
    intro:
      "Q-Nekoの目的は、日本とヨーロッパ間の連携を強化することです。本行動規範は、Q-Nekoの活動や、互いへの接し方、パートナーやより広いコミュニティへの対応を導く価値観と原則を定めたものです。",
    sections: [
      {
        heading: "Q-Nekoの言質",
        body: "Q-Nekoは、透明性、誠実さ、そして責任感を重視しています。約束を確実に守り、あらゆる活動において倫理的かつ持続可能な行動をとるよう努めており、共有する価値観を、科学的な実践やすべてのステークホルダーとの関わりにおける実践的な指針へと反映させています。",
      },
      {
        heading: "Q-Nekoの価値観",
        body: "意思決定は、あらゆる連携の基盤となる中核的価値観に導かれています。",
        items: [
          "研究の遂行と資源の管理における責任ある行動",
          "共に働く人々と、私たちが貢献する地域社会への配慮と尊重",
          "機関、分野、文化を越えた協働",
          "厳密さと知的誠実さをもって発揮される専門性",
        ],
      },
      {
        heading: "権利と法",
        body: "Q-Nekoは、世界人権宣言に定められた人権を尊重し、国際労働機関（ILO）の原則や国連グローバル・コンパクトを含む国際労働基準を遵守します。いかなる形態の差別、ハラスメント、威圧も容認されません。",
      },
      {
        heading: "倫理と行動",
        body: "メンバーには、相互の尊重と信頼に基づく関係を維持することが求められています。誠実な意図をもって倫理的懸念を提起したこと、または非倫理的な行為への関与を拒否したことを理由に、いかなるメンバーも報復を受けることはありません。公共の利益や公益への脅威を報告するための、秘密が守られる仕組みを用意しています。",
      },
      {
        heading: "科学的誠実性",
        body: "組織としての行動にとどまらず、Q-Nekoは研究の真正性と厳密さに尽力します。科学的誠実性は、誠実さ、信頼性、透明性、そして責任の上に成り立ちます。それは互いに対して、未来の科学者たちに対して、そして社会全体に対する責任です。",
      },
    ],
  },
  cookies: {
    banner: {
      title: "プライバシーを尊重します",
      body: "本サイトでは、サイトの動作に必要な少数のCookieを使用します。また、ご同意いただいた場合に限り、サイトの利用状況を把握するため匿名のMatomoアナリティクスを使用します。お客様のデータを広告に利用することはありません。",
      learnMore: "Cookieと訪問者統計について詳しく見る",
      necessaryTitle: "必須",
      necessaryDesc: "言語設定や同意の選択を記憶するなど、サイトの動作に必要なもの。",
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
    sectionLabel: "最新",
    heading: "新着情報",
    intro: "Q-Nekoコンソーシアムからの最新ニュース、今後のイベント、最新の成果を提出",
    viewAll: "新着情報一覧",
  },
  langSwitch: {
    label: "English",
    ariaLabel: "言語を切り替える",
  },
  pageContent: {
    consortium: {
      sectionLabel: "コンソーシアム",
      heading: "16つのパートナー。\n2つの大陸。\n1つのビジョン。",
      intro: "Q-Nekoは欧州と日本各地の主要な研究機関、大学、産業界のパートナーを結集しています。この特殊のコンソーシアムは共に、量子加速コンピューティングの進展と大陸を越えた深い科学的連携の促進に専念しています。",
    },
    results: {
      sectionLabel: "結果",
      heading: "出版物・成果物・公開資料",
      intro: "プロジェクト間作成された成果物、出版物、報告書、プレゼンテーション資料、その他の公開資料をご覧いただけます。",
      comingSoon: "プロジェクトの進捗に伴い、結果を掲載されます。",
      filterLabel: "フィルター",
      filters: {
        all: "全て",
        deliverable: "成果物",
        milestone: "マイルストーン",
        publication: "出版",
        software: "ソフトウェア",
        presentation: "プレゼンテーション",
        poster: "ポスター",
      },
    },
    media: {
      sectionLabel: "メディアコーナー",
      heading: "メディアコーナー",
      intro: "Q-NekoメディアコーナーではQ-Nekoプロジェクトに関する広報資料、プレスリリース、メディア掲載をご覧いただけます。",
      pressLabel: "報道関係のお問い合わせ",
      pressEmail: "comms.qneko@postit.csc.fi", //TODO: replace with actual email address
      tabs: {
        communicationMaterials: "広報資料",
        pressReleases: "プレスリリース",
        clipping: "メディア掲載",
      },
      comingSoonCommunicationMaterials: "広報資料は公開され次第こちらに掲載。",
      comingSoonPressReleases: "プレスリリースは公開され次第こちらに掲載。",
      comingSoonClipping: "メディア掲載は公開され次第こちらに掲載。",
      readArticle: "記事を読む",
      logos: {
        heading: "ロゴ・ブランド資料",
        intro: "Q-Nekoのロゴをカラー版、モノクロ版、シンボルのみの各バージョンでダウンロードできます。ご使用の際はロゴの比率と配色を変更しないでください。",
        downloadAll: "すべてのロゴをダウンロード（ZIP）",
        download: "ダウンロード",
      },
    },
    newsletter: {
      sectionLabel: "ニュースレター",
      heading: "最新情報を入手",
      intro: "Q-Nekoのニュースレターにご登録いただくと、研究の進捗状況、今後のイベント、コンソーシアムからの最新情報をメールで直接お受け取りいただけます。",
      subscribeCta: "登録する",
      emailLabel: "メールアドレス",
      emailPlaceholder: "your@email.com",
      submitSuccess: "メッセージを送信しました。",
      submitError: "TODO 登録に失敗しました。後ほど再度お試しください。",
      alreadySubscribed: "TODOこのメールアドレスはすでに登録されています。",
      emailRequired: "メールアドレスは必須",
      emailInvalid: "メールアドレスが無効",
      previousHeading: "過去のニュースレター",
      previousComingSoon: "過去のニュースレターは公開され次第こちらに掲載。",
    },
    contact: {
      sectionLabel: "お問い合わせ",
      heading: "お問い合わせ",
      intro: "Q-Nekoプロジェクトに関する一般的なお問い合わせ、パートナーシップ、または協業の機会については、プロジェクト調整事務局までご連絡ください。",
      coordinatorLabel: "プロジェクトコーディネーター",
      coordinator: "CSC – IT Center for Science, Finland", //TODO: replace with coordinator's name
      emailLabel: "メール",
      email: "comms.qneko@postit.csc.fi", //TODO: replace with actual email address
      pmoLabel: "プロジェクト管理",
      pmo: "PMO Contact", //TODO: replace with PMO contact's name
      pmoEmail: "pmo.qneko@postit.csc.fi", //TODO: replace with actual PMO email address
      form: {
        nameLabel: "名前",
        emailLabel: "メールアドレス",
        messageLabel: "メッセージ",
        submitCta: "メッセージを送信",
        privacyPolicyLabel: "プライバシーポリシー",
        privacyPolicyLink: "/ja/privacy-policy",
        privacyPolicyLinkText: "プライバシーポリシー",
        privacyPolicyText: "に同意します",
        submitSuccess: "メッセージを送信しました。",
        errors: {
          nameRequired: "名前は必須",
          emailRequired: "メールアドレスは必須",
          emailInvalid: "メールアドレスが無効",
          messageRequired: "メッセージは必須",
          privacyRequired: "プライバシーポリシーに同意してください",
        },
      },
    },
    events: {
      sectionLabel: "イベント",
      heading: "ワークショップ・会議",
      intro: "Q-Nekoは欧州と日本の量子コミュニティ間の連携を促進するため、ワークショップ、会議、コミュニティイベントを開催しています。",
      comingSoonUpcoming: "今後のイベントはここに掲載。",
      comingSoonPast: "過去のイベントはここに表示されています。",
      tabs: {
        upcoming: "近日開催",
        past: "過去",
      },
    },
  },
};
