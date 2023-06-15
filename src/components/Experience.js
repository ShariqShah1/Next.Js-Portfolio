import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companylink, time, address, work }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0  w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companylink}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium  w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%]  md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-14 xs:ml-10">
          <Details
            position="Web Developer"
            company="Digifoxer"
            companylink="www.digifoxer.com"
            time="June-2022 to Octuber-2022"
            address="Nacon House, Digifoxer - Mezzanine floor, strechen road, near karachi press club, Karachi, 74200"
            work="Worked on a team responsible for developing new features for Websites
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization."
          />
          <Details
            position="GSSOC Contributer"
            company="GirlScript Summer of Code"
            companylink="https://gssoc.girlscript.tech/"
            time="June-2023 to August 2023"
            address="Nacon House, Digifoxer - Mezzanine floor, strechen road, near karachi press club, Karachi, 74200"
            work="I am proud to have been a contributor to the GirlScript Summer of Code, I had
             the opportunity to work on a challenging and impactful project. I collaborated
              with a diverse team of talented individuals, all working towards a common
               goal. Through this collaboration, I developed excellent teamwork and 
               communication skills, as we worked together to overcome obstacles and
                deliver high-quality results."
          />
          <Details
            position="Web Developer Intern"
            company="LetsGrowMore"
            companylink="https://letsgrowmore.in/"
            time="June-2023"
            address="Remote"
            work="I had the opportunity to work as an intern at LetsGrowMore, and it was an incredibly valuable experience for my professional growth. As an intern at LetsGrowMore, I had the chance to contribute to a dynamic and innovative organization, gaining hands-on experience and expanding my skill set in various ways."
          />
          <Details
            position="SSOC Contributer "
            company="Social Summer Of Code"
            companylink="https://hack2skill.com/hack/ssoc"
            time="June-2023 to August-2023"
            address="Remote"
            work="I am thrilled to have been a contributor to the Social Summer of Code,As a contributor to the Social Summer of Code, I had the privilege of working on a project that aimed to create positive change in society. I collaborated with a diverse team of like-minded individuals, pooling our skills and expertise to develop innovative solutions. Through this collaboration, I gained a deep understanding of the power of technology to bring about social transformation."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
