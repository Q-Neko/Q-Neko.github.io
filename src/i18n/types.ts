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
    logoAlt: string;
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
    logoAlt: string;
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
    fundingStatement: string;
    disclaimer: string;
    developedBy: string;
    developedCopyright: string;
    logoAlt: string;
    fundedByEuAlt: string;
    eurohpcAlt: string;
    links: {
      mission: { label: string; href: string };
      news: { label: string; href: string };
      results: { label: string; href: string };
      events: { label: string; href: string };
      consortium: { label: string; href: string };
      horizonEurope: { label: string; href: string };
      euroHPC: { label: string; href: string };
      japanSIP: { label: string; href: string };
      partnership: { label: string; href: string };
      contacts: { label: string; href: string };
      media: { label: string; href: string };
      newsletter: { label: string; href: string };
      linkedIn: { label: string; href: string };
      privacyPolicy: { label: string; href: string };
      codeOfConduct: { label: string; href: string };
    };
  };
  news: {
    sectionLabel: string;
    heading: string;
    pageIntro: string;
    comingSoon: string;
  };
  pagination: {
    first: string;
    previous: string;
    next: string;
    last: string;
    pageOf: string;
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
    codeOfConduct: string;
    privacyPolicy: string;
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
    ariaLabel: string;
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
      filterLabel: string;
      filters: {
        all: string;
        deliverable: string;
        milestone: string;
        publication: string;
        software: string;
        presentation: string;
        poster: string;
      };
    };
    media: {
      sectionLabel: string;
      heading: string;
      intro: string;
      pressLabel: string;
      pressEmail: string;
      tabs: {
        communicationMaterials: string;
        pressReleases: string;
        clipping: string;
      };
      comingSoonCommunicationMaterials: string;
      comingSoonPressReleases: string;
      comingSoonClipping: string;
    };
    newsletter: {
      sectionLabel: string;
      heading: string;
      intro: string;
      subscribeCta: string;
      emailLabel: string;
      emailPlaceholder: string;
      submitSuccess: string;
      emailRequired: string;
      emailInvalid: string;
      previousHeading: string;
      previousComingSoon: string;
    };
    contact: {
      sectionLabel: string;
      heading: string;
      intro: string;
      coordinatorLabel: string;
      coordinator: string;
      emailLabel: string;
      email: string;
      pmoLabel: string;
      pmo: string;
      pmoEmail: string;
      form: {
        nameLabel: string;
        emailLabel: string;
        messageLabel: string;
        submitCta: string;
        privacyPolicyLabel: string;
        privacyPolicyLink: string;
        privacyPolicyLinkText: string;
        privacyPolicyText: string;
        submitSuccess: string;
        errors: {
          nameRequired: string;
          emailRequired: string;
          emailInvalid: string;
          messageRequired: string;
          privacyRequired: string;
        };
      };
    };
    events: {
      sectionLabel: string;
      heading: string;
      intro: string;
      comingSoonUpcoming: string;
      comingSoonPast: string;
      tabs: {
        upcoming: string;
        past: string;
      };
    };
  };
}
