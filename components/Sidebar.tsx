import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const handleBtnClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <img
        className='w-32 h-32 mx-auto rounded-full'
        src='https://images.unsplash.com/photo-1593462215105-0addc26b1a5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80'
        alt='Slava U.'
      />
      <h2 className='my-4 text-3xl font-medium tracking-wider'>
        <span className='text-green'>Slava</span> U.
      </h2>
      <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>
        Front-End Web Developer
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
        <a href='#'>
          <AiFillLinkedin className='w-8 h-8' />
        </a>
        <a href='#'>
          <AiFillGithub className='w-8 h-8' />
        </a>
      </div>
      {/* address */}
      <div className='py-5 my-5 bg-gray-200 dark:bg-dark-200 mx--1 location--wrapper'>
        <div className='flex items-center justify-center space-x-2'>
          <GoLocation className='w-6 h-6' />
          <span>Chicago, IL</span>
        </div>
        <a href='mailto: abc@example.com' className='block my-2'>
          Send Email
        </a>
      </div>
      <button className='w-8/12 px-5 py-5 my-2 text-white rounded-full focus:outline-none bg-gradient-to-r from-green to-blue-400'>
        Email Me!
      </button>
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
