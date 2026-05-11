export interface Translations {
  nav: {
    mission: string;
    events: string;
    media: string;
    results: string;
    newsletter: string;
    contact: string;
    news: string;
    search: string;
  };
  hero: {
    label: string;
    headline1: string;
    headline2: string;
    headline3: string;
    jpLine1: string;
    jpLine2: string;
    description: string;
    exploreCta: string;
    partnersCta: string;
    postsCta: string;
  };
  mission: {
    sectionLabel: string;
    heading: string;
    body: string;
    quote: string;
    quoteAuthor: string;
    pillars: Array<{ title: string; desc: string }>;
  };
  funding: {
    sectionLabel: string;
    heading: string;
    body: string;
    pill1: string;
    pill2: string;
    pill3: string;
  };
  partners: {
    sectionLabel: string;
    heading: string;
  };
  footer: {
    tagline: string;
    projectCol: string;
    fundingCol: string;
    contactCol: string;
    copyright: string;
    coordinatedBy: string;
    links: {
      mission: string;
      applications: string;
      consortium: string;
      timeline: string;
      horizonEurope: string;
      euroHPC: string;
      japanSIP: string;
      partnership: string;
      csc: string;
      media: string;
      joinNetwork: string;
      newsletter: string;
    };
  };
  news: {
    sectionLabel: string;
    heading: string;
    pageIntro: string;
    comingSoon: string;
    pagination: {
      first: string;
      previous: string;
      next: string;
      last: string;
    };
  };
  pages: {
    quantumComputers: string;
    search: string;
    notFound: string;
    news: string;
    consortium: string;
    results: string;
    media: string;
    newsletter: string;
    contact: string;
    events: string;
  };
  recentActivity: {
    sectionLabel: string;
    heading: string;
    intro: string;
    viewAll: string;
  };
  langSwitch: {
    label: string;
  };
  pageContent: {
    consortium: {
      sectionLabel: string;
      heading: string;
      intro: string;
    };
    results: {
      sectionLabel: string;
      heading: string;
      intro: string;
      comingSoon: string;
    };
    media: {
      sectionLabel: string;
      heading: string;
      intro: string;
      pressLabel: string;
      pressEmail: string;
    };
    newsletter: {
      sectionLabel: string;
      heading: string;
      intro: string;
      subscribeCta: string;
    };
    contact: {
      sectionLabel: string;
      heading: string;
      intro: string;
      coordinatorLabel: string;
      coordinator: string;
      emailLabel: string;
      email: string;
    };
    events: {
      sectionLabel: string;
      heading: string;
      intro: string;
      comingSoon: string;
    };
  };
}
