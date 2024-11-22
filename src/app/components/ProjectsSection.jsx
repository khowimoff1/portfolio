"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Green Shop website",
    description: "To see what flowers are available in the store",
    image: "/green-shop.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/khowimoff1/greenshop.git",
    previewUrl: "https://bykhowimoffgreenshop.netlify.app/",
  },
  {
    id: 2,
    title: "Max Way website",
    description: "To see what foods are available in the store,Food delivery",
    image: "/maxway.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/khowimoff1/maxway.git",
    previewUrl: "https://sardorbekxoshimov.netlify.app/",
  },
  {
    id: 3,
    title: "Dezenfiksiya website",
    description: "disinfection service",
    image: "/d2.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/khowimoff1/dezenfiksya.git",
    previewUrl: "https://dezenfiksya.netlify.app/",
  },
  {
    id: 4,
    title: "Vibes Movie website",
    description: "you can watch movies in the buyer",
    image: "/vibes-movie.png",
    tag: ["All", "Web","Mobile"],
    gitUrl: "https://github.com/khowimoff1/vibesmovie.git",
    previewUrl: "https://vibes-movie.netlify.app/",
  },
  {
    id: 5,
    title: "Book Shelter website",
    description: "here you can read and buy books",
    image: "/book-shelter.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/khowimoff1/bookshelter.git",
    previewUrl: "https://books-shelter.netlify.app/",
  },
  {
    id: 6,
    title: "Crypto values website",
    description: "here you can see crypto values",
    image: "/crypto-value.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/khowimoff1/cryptoValues.git",
    previewUrl: "https://crypto-values.netlify.app/",
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
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
