import { IconType } from "react-icons";

export interface Service {
  title: string;
  desc: string;
}

export interface Skill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface UserInfo {
  email: string;
  first_name: string;
  last_name: string;
  occupancy: string;
  location: string;
  avatar: string;
  socials: {
    linkedin_url: string;
    github_url: string;
  };
}

export interface AboutInfo {
  desc: string;
  skills: [
    {
      desc: string;
      title: string;
      id: string;
    }
  ];
}
