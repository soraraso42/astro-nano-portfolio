import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sora Zhang",
  EMAIL: "zhan0886@algonquinlive.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A lightweight and minimalist portfolio site for Sora the explorer web developer.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Collection and reflection on my journey as a developer, a learner, a person.",
};

export const WORK: Metadata = {
  TITLE: "Experience",
  DESCRIPTION: "My professional and educational experiences, as well as the skills I have honed along the way.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories. Be sure to checkout the README",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/soraraso42"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/sora-zhang-9a7b132b2/",
  }
];
