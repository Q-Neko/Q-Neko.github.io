// A single inline run of text, optionally a link. `href` may be an internal
// anchor (e.g. "#contact-person" to link to another section), an external URL,
// or a mailto:. Used by rich-text bodies like the privacy policy.
export type RichInline = string | { text: string; href: string };

// A paragraph is either plain text, a single link, or a mix of text and links.
export type RichParagraph = RichInline | RichInline[];

export interface Translations {
  nav: {
    home: string;
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
    pills: string[];
  };
  partners: {
    sectionLabel: string;
    heading: string;
  };
  footer: {
    tagline: string;
    columns: Array<{
      heading: string;
      links: Array<{ label: string; href: string }>;
    }>;
    legalLinks: Array<{ label: string; href: string }>;
    copyright: string;
    coordinatedBy: string;
    fundingStatement: string;
    disclaimer: string;
    developedBy: string;
    developedCopyright: string;
    logoAlt: string;
    funderLogos: Array<{ src: string; alt: string }>;
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
    cookies: string;
    events: string;
  };
  privacyPolicy: {
    intro: RichParagraph[];
    sections: Array<{
      id: string;
      heading: string;
      body?: RichParagraph[];
      items?: RichParagraph[];
      postBody?: string;
    }>;
  },
  codeOfConduct: {
    intro: string;
    sections: Array<{ heading: string; body?: string; items?: string[] }>;
  },
  cookies: {
    banner: {
      title: string;
      body: string;
      learnMore: string;
      necessaryTitle: string;
      necessaryDesc: string;
      alwaysOn: string;
      analyticsTitle: string;
      analyticsDesc: string;
      acceptAll: string;
      rejectAll: string;
      save: string;
      settingsLabel: string;
    };
    page: {
      intro: string;
      sections: Array<{ heading: string; body?: string; items?: string[] }>;
      manageHeading: string;
      manageBody: string;
      manageCta: string;
    };
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
      readArticle: string;
      logos: {
        heading: string;
        intro: string;
        downloadAll: string;
        download: string;
      };
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
