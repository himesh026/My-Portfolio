import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiMongodb,
  SiPostgresql,
  SiRender,
  SiHeroku,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";
import { FcCollaboration, FcIdea, FcMindMap } from "react-icons/fc";
import { GiAchievement } from "react-icons/gi";
import { motion } from "framer-motion";

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function SkillIcons() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap gap-4"
    >
      {/* Programming Languages */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <FaPython className="text-7xl text-yellow-300" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiCplusplus className="text-7xl text-blue-500" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiJavascript className="text-7xl text-yellow-400" />
      </motion.div>

      {/* Web Development */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <FaBootstrap className="text-7xl text-purple-600" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <FaReact className="text-7xl text-cyan-400" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <FaNodeJs className="text-7xl text-green-500" />
      </motion.div>

      {/* Machine Learning */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiTensorflow className="text-7xl text-orange-500" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform4"
      >
        <SiKeras className="text-7xl text-red-500" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiScikitlearn className="text-7xl text-blue-500" />
      </motion.div>

      {/* Data Analysis */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiNumpy className="text-7xl text-blue-300" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiPandas className="text-7xl text-blue-600" />
      </motion.div>

      {/* Databases */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiPostgresql className="text-7xl text-blue-400" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiMongodb className="text-7xl text-green-600" />
      </motion.div>

      {/* Cloud Platforms */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiRender className="text-7xl text-blue-500" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiHeroku className="text-7xl text-purple-600" />
      </motion.div>

      {/* Tools */}
      {/* <div className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform">
        <FaGit className="text-7xl text-orange-500" />
      </div> */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <FaGithub className="text-7xl text-white" />
      </motion.div>

      {/* Competitive Programming */}
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiCodechef className="text-7xl  text-brown-500" />
      </motion.div>
      <motion.div
        variants={iconVariant(getRandomNumber())}
        initial="initial"
        animate="animate"
        className="flex justify-center items-center  border-4 border-neutral-800 p-4  rounded-lg hover:scale-105 transition-transform"
      >
        <SiCodeforces className="text-7xl  text-blue-400" />
      </motion.div>
    </motion.div>
  );
}

export default SkillIcons;
