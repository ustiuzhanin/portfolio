import { skills } from "../data";

import Skill from "../components/Skill";

const resume = () => {
  return (
    <section className='px-6 py-2'>
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Lorem</h5>
          <p className='my-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veritatis rerum unde numquam, nihil magni voluptatibus quibusdam aut
            recusandae eveniet adipisci mollitia consectetur tempore. Rem
            ducimus voluptatem ut optio autem?
          </p>
        </div>
        <div>
          <h5 className='my-3 text-2xl font-bold'>Skills</h5>
          <p className='my-3'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veritatis rerum unde numquam, nihil magni voluptatibus quibusdam aut
            recusandae eveniet adipisci mollitia consectetur tempore. Rem
            ducimus voluptatem ut optio autem?
          </p>
        </div>
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
    </section>
  );
};

export default resume;
