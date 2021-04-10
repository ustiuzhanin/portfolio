import { skills } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn } from "../animations";

import Skill from "../components/Skill";

const resume = () => {
  return (
    <motion.section
      variants={routeFadeIn}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-6 py-2'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Lorem</h5>
          <p className='my-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veritatis rerum unde numquam, nihil magni voluptatibus quibusdam aut
            recusandae eveniet adipisci mollitia consectetur tempore. Rem
            ducimus voluptatem ut optio autem?
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} initial='initial' animate='animate'>
          <h5 className='my-3 text-2xl font-bold'>Skills</h5>
          <p className='my-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veritatis rerum unde numquam, nihil magni voluptatibus quibusdam aut
            recusandae eveniet adipisci mollitia consectetur tempore. Rem
            ducimus voluptatem ut optio autem?
          </p>
        </motion.div>
      </div>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Languages and Frameworks</h5>
          <div className='my-2'>
            {skills.map((skill) => (
              <Skill data={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default resume;
