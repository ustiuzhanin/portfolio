import Head from "next/head";
import { motion } from "framer-motion";
import { stagger, fadeInUp, routeFadeIn } from "../animations";
import { gql } from "@apollo/client";

import { client } from "../api";
import ProjectCard from "../components/ProjectCard";

const projects = ({ projects }) => {
  return (
    <motion.section
      variants={routeFadeIn}
      initial='initial'
      animate='animate'
      exit='exit'
      className='px-5 py-2 overflow-x-scroll'
      style={{ height: "65vh" }}
    >
      <Head>
        <title>Front-End developer | Projects</title>
      </Head>
      <motion.div
        variants={stagger}
        initial='initial'
        animate='animate'
        className='relative grid grid-cols-12 gap-4 my-3'
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            className='col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 dark:bg-black-200 sm:col-span-6 lg:col-span-4'
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query getProjects {
        projects {
          img_url
          id
          project_name
        }
      }
    `,
  });

  return {
    props: { projects: data.projects },
  };
};

export default projects;
