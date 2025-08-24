
export type IconNameType = 
  | 'devto' 
  | 'github' 
  | 'linkedin' 
  | 'codepen' 
  | 'twitter' 
  | 'email' 
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
    email: string;
  };
  icons: {
    github: IconNameType;
    linkedin: IconNameType;
    devTo: IconNameType;
    email: IconNameType;
  };
}

export type SiteMetaData = {
  title: string;
  metaTags: {
    description: string;
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