import { FunctionComponent } from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

import { UserInfo } from "../type";

const Sidebar: FunctionComponent<{ data: UserInfo }> = ({
  data: { email, first_name, last_name, occupancy, location, avatar, socials },
}) => {
  const { theme, setTheme } = useTheme();

  const handleBtnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        className='w-32 h-32 mx-auto rounded-full'
        src={avatar ? avatar : "#"}
        alt={`${first_name}\`a avatar`}
        height={128}
        width={128}
      />
      <h2 className='my-4 text-3xl font-medium tracking-wider'>
        <span className='text-green'>{first_name}</span> {last_name}
      </h2>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        {occupancy}
      </p>
      <a
        href='/assets/resume.pdf'
        download='resume.pdf'
        className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'
      >
        <GiTie className='w-6 h-6' /> Download Resume
      </a>
      {/* Social links */}
      <div className='flex justify-around mx-auto my-5 text-green w9/12 md:w-full'>
        <a href={socials.linkedin_url}>
          <AiFillLinkedin className='w-8 h-8' />
        </a>
        <a href={socials.github_url}>
          <AiFillGithub className='w-8 h-8' />
        </a>
      </div>
      {/* address */}
      <div className='py-5 my-5 bg-gray-200 dark:bg-dark-200 mx--1 location--wrapper'>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation className='w-6 h-6' />
          <span>{location}</span>
        </div>
        <a href={`mailto: ${email}`} className='block my-2'>
          {email}
        </a>
      </div>
      <a
        href={`mailto: ${email}`}
        className='inline-block w-8/12 px-5 py-5 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400'
      >
        Email Me!
      </a>
      <button
        onClick={handleBtnClick}
        className='w-8/12 px-5 py-5 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400'
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
