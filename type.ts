import { IconType } from "react-icons";

export interface Service {
  title: string;
  desc: string;
  Icon: IconType;
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
  avatar: string;
  socials: object;
}
