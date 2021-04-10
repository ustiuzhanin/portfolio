import { motion } from "framer-motion";
import { stagger, fadeInUp, routeFadeIn } from "../animations";

import ProjectCard from "../components/ProjectCard";

const projects = () => {
  return (
    <motion.section
      variants={routeFadeIn}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-5 py-2 overflow-x-scroll'
    >
      <motion.div
        variants={stagger}
        initial='initial'
        animate='animate'
        className='relative grid grid-cols-12 gap-4 my-3'
      >
        <motion.div
          variants={fadeInUp}
          className='col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4'
        >
          <ProjectCard />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default projects;
