import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";

const ProjectCard = ({ project: { img_url, project_name } }) => {
  console.log(project_name);
  return (
    <div>
      <Image
        src={img_url}
        alt='name'
        layout='responsive'
        height='150'
        width='300'
      />
      <p className='my-2 text-center'>{project_name}</p>

      {/* <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100'>
        <div>
          <Image
            src='/project.jpeg'
            alt='name'
            layout='responsive'
            height='150'
            width='300'
          />
          <div className='flex justify-center my-4 space-x-3'>
            <a
              href='#'
              className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
            >
              <AiFillGithub /> <span>Github</span>
            </a>
            <a
              href='#'
              className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200'
            >
              <AiFillProject /> <span>Project</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className='mb-3 text-xl font-medium md:text-2xl'>name</h2>
          <h3 className='mb-3 font-medium'>description</h3>

          <div className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
            {/* {key_techs.map((tech) => (
              <span
                key={tech}
                className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm'
              >
                {tech}
              </span>
            ))} 
          </div>
        </div>

        <button
          onClick={() => {}}
          className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
        ></button>
      </div> */}
    </div>
  );
};

export default ProjectCard;
