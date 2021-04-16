import Head from "next/head";

// import { skills } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeFadeIn, stagger } from "../animations";
import { gql } from "@apollo/client";
import { FunctionComponent } from "react";

import { client } from "../api";
import { AboutInfo } from "../type";
import ServiceCard from "../components/ServiceCard";

const index: FunctionComponent<{ data: AboutInfo }> = ({
  data: { desc, skills },
}) => {
  console.log(desc);
  return (
    <motion.section
      variants={routeFadeIn}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-col flex-grow px-6 pt-1'
    >
      <Head>
        <title>Front-End Developer | Portfolio</title>
      </Head>
      <h5 className='my-3 font-medium'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
        placeat optio reiciendis perferendis in saepe nostrum? Sint ducimus
        autem illum esse praesentium quis, accusamus rem impedit distinctio eum
        aperiam laudantium?
      </h5>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 skills-wrapper'>
        <h5 className='my-3 text-xl font-bold tracking-wide'>Skills</h5>
        <motion.div
          variants={stagger}
          initial='initial'
          animate='animate'
          className='grid gap-6 lg:grid-cols-2'
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={fadeInUp}
              className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
            >
              <ServiceCard service={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query getAboutInfo {
        aboutPage {
          desc
          skills
        }
      }
    `,
  });

  return {
    props: { data: data.aboutPage },
  };
};

export default index;
