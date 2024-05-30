import profilePics from "../assets/logo2.svg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible" 
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Augusto
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-green-400 via-slate-500 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible" 
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi est mollitia, fugiat nisi aut suscipit, odio necessitatibus aliquam vel similique error libero incidunt animi expedita modi architecto, eum optio ex!
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              initial={{x: 100, opacity: 0 }}
              animate={{ x:0, opacity: 1}}
              transition={{ duration: 1, delay: 1.2}}
              className="size-80 rounded-full" 
              src={profilePics} 
              alt="Augusto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero