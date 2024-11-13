import React from "react";
import profilePic from "../assets/himesh_pic.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import resume from "../assets/himesh_resume.pdf";  

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={profilePic} alt="meri-Photo" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            {/* Download Resume Button */}
            <a
              href={resume}
              download="Himesh_Dhaka_Resume.pdf"
              className="bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-900 transition duration-300"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutme;
