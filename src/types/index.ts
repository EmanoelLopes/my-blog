
export type IconNameType = 
  | 'devto' 
  | 'github' 
  | 'linkedin' 
  | 'codepen' 
  | 'twitter' 
  | 'envelope' 
  | 'moon' 
  | 'sun';

export type IconsType = {
  [key in IconNameType]: string[];
};

export interface SocialPlatforms {
  links: {
    github: string;
    linkedin: string;
    devTo: string;
    twitter: string;
  };
  icons: {
    github: IconNameType;
    linkedin: IconNameType;
    devTo: IconNameType;
    twitter: IconNameType;
  };
}

export type SiteMetaData = {
  title: string;
  metaTags: {
    og: {
      title: string;
      type: string;
      url: string;
      description: string;
      image: string;
      imageAlt: string;
    },
  },
};