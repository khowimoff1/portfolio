"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>Bootstrap5</li>
        <li>Redux/Toolkit</li>
        <li>Material UI</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          Tashkent University of Information Technologies named after Muhammad
          al-Khorazmi | FACULTY OF ECONOMICS AND MANAGEMENT IN THE FIELD OF IT
          (2nd course(external)), 2022-present.
        </li>
        <li>Najot Ta’lim, Tashkent – Bootcamp Foundation, 2022-2023</li>
        <li>Najot Ta’lim, Tashkent – Frontend development, 2023-2024</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
       <li>Najot Ta’lim, Tashkent – Frontend development, 2024 - May</li>
       </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a passionate web developer specializing in creating interactive
            and responsive web applications. With a strong background in various
            web technologies and frameworks, I strive to build user-friendly and
            efficient digital experiences
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
