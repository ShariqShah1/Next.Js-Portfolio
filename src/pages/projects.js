import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project from "../../public/images/projects/crypto-screener-cover-image.jpg";
import previous from "../../public/images/projects/previous-Portfolio.jpeg";
import budget from "../../public/images/projects/budget-app.jpeg";
import Digital from "../../public/images/projects/Digital-Clock.jpeg";
import Quiz from "../../public/images/projects/Quiz-Applicaiton.jpeg";
import Ther from "../../public/images/projects/Thermometer-UI.jpeg";
import Temp from "../../public/images/projects/Temperature-Converter.jpeg";

import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-br-2xl 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs-rounded-2xl xs:rounded-br-3xl xs:p-4
     "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl 
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium  text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
              sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium  text-xl dark:text-primary
          lg:text-lg md:text-base
        "
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:bg-light dark:text-dark md:text-base "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Shariq Shah | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProjects
                title="Previous Portfolio"
                img={previous}
                summary="I have a strong portfolio of work from my previous roles. 
                I have developed and maintained large-scale distributed systems, developed new machine learning algorithms, and led teams of engineers in the development of new products.
                 I am confident that my skills and experience will be a valuable asset to your team.
              "
                link="https://solofoxer.netlify.app"
                github="https://github.com/ShariqShah1/Portfolio
              "
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Budget App"
                img={budget}
                //   summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                // It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                // local currency.

                link="https://shariqshah1.github.io/Budget-App-Js/"
                github="https://github.com/ShariqShah1/Budget-App-Js
              "
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Digital Clock"
                img={Digital}
                //   summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                // It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                // local currency.
                // "
                link="https://shariqshah1.github.io/JS-DigitalClock/"
                github="https://github.com/ShariqShah1/JS-DigitalClock
              "
                type="Featured Projects"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Quiz Application"
                img={Quiz}
                summary="My Quiz Application is a web-based application that allows users to create and take quizzes.
                 The application is easy to use and can be used by anyone, regardless of their technical skills.
                  The application is also highly customizable, allowing users to create quizzes on any topic. 
                  I am confident that my Quiz Application will be a valuable resource for users of all ages."
                link="https://shariqshah1.github.io/JS-QuizApplication/"
                github="https://github.com/ShariqShah1/JS-QuizApplication
              "
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Thermometer UI"
                img={Ther}
                //   summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                // It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                // local currency.
                // "
                link="https://shariqshah1.github.io/JS-ThermometerUI/"
                github="https://github.com/ShariqShah1/JS-ThermometerUI
              "
                type="Featured Projects"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Temperature Converter"
                img={Temp}
                //   summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts.
                // It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your
                // local currency.
                // "
                link="https://shariqshah1.github.io/JS-temperatureConverter/"
                github="https://github.com/ShariqShah1/JS-temperatureConverter
              "
                type="Featured Projects"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
