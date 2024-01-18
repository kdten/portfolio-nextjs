"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "CouponCatch",
    description: "Firebase, Node, REST API, Ionic React, Document AI. Login with demo@demo.com // Demodemo12!",
    // image: "/",
    tag: ["All", "Fullstack", "React"],
    gitUrl: "/",
    previewUrl: "https://app.couponcatchapp.com",
    video: "/images/projects/ccapppreview",
  },
  {
    id: 2,
    title: "CouponCatch Landing Page",
    description: "Next.js",
    image: "/",
    tag: ["All", "NextJS"],
    gitUrl: "/",
    previewUrl: "https://www.couponcatchapp.com",
    video: "/images/projects/cclandingpreview",
  },
  {
    id: 3,
    title: "CarHub Rental Showcase",
    description: "Next.js, Tailwind CSS",
    image: "/",
    tag: ["All", "NextJS", "React"],
    gitUrl: "/",
    previewUrl: "https://nextjscar-rental.vercel.app/",
    video: "/images/projects/PreviewCarHub",
  },
  {
    id: 4,
    title: "MusicPlayer App",
    description: "React, Redux, Tailwind CSS",
    image: "/",
    tag: ["All", "React"],
    gitUrl: "/",
    previewUrl: "https://koltenedward.com/music-app/index.html",
    video: "/images/projects/previewmusic",
  },
  {
    id: 5,
    title: "Fitness Coach Muilt-page Landing",
    description: "HTML/CSS/JavaScript",
    // image: "/images/projects/5.png",
    tag: ["All", "JavaScript"],
    gitUrl: "/",
    previewUrl: "https://koltenedward.com/halves/index.html",
    video: "/images/projects/previewalves",
  },
  {
    id: 6,
    title: "Barbershop Single Landing Page",
    description: "HTML/CSS/JavaScript",
    // image: "/images/projects/6.png",
    tag: ["All", "JavaScript"],
    gitUrl: "/",
    previewUrl: "https://koltenedward.com/barbershop/index.html",
    video: "/images/projects/barberpreview",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-black dark:text-white flex flex-row justify-center items-center flex-wrap gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="NextJS"
          isSelected={tag === "NextJS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="JavaScript"
          isSelected={tag === "JavaScript"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              videoURL={project.video}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
