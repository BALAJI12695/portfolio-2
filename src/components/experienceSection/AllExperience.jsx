import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "English Teacher",
    company: "Pallotti Hr Sec School",
    date: "2021 - 2023",
    responsibilities: [
      "Prepared lesson plans, assignments, and learning materials.",
      "Guided students in improving LSRW communication skills.",
      "Evaluated student performance through tests and exams.",
    ],
  },
  {
    job: "Front-End Developer",
    company: "Self Learned",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Technical Mentor",
    company: "Ezio Skill Academy",
    date: "2024 - 2025",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className=" flex md:flex-row sm:flex-col items-center justify-between">
      {experiences?.map((experience, index) => (
        <>
          <SingleExperience key={index} experience={experience} />
          {index < 2 ? (
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          ) : (
            ""
          )}
        </>
      ))}
    </div>
  );
};

export default AllExperience;
