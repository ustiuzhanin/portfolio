import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Router } from "next/router";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <section className='grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-32'>
        <aside className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl'>
          <Sidebar />
        </aside>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 '>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default MyApp;
