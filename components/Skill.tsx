import { FunctionComponent } from "react";
import { motion } from "framer-motion";

import { Skill as SkillType } from "../type";

const Skill: FunctionComponent<{
  data: SkillType;
}> = ({ data: { level, name, Icon } }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: level,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffnes: 100,
      },
    },
  };

  return (
    <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-200'>
      <motion.div
        style={{ width: level }}
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600'
        variants={variants}
        initial='initial'
        animate='animate'
      >
        <Icon className='mr-3' />
        {name}
      </motion.div>
    </div>
  );
};

export default Skill;
