import logo from "../assets/bg1.png";
import { GithubLogo, InstagramLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="size-24" src={logo} alt="logo" />
      </div>
      {/* <div className="flex  gap-4">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right:100 }}
          class="text-sm py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Sobre
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right:100 }}
          class="text-sm py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Depoimento
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right:100 }}
          class="text-sm py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75">
          Projetos
        </motion.button>
      </div> */}
      <div className="m-8 flex items-center justify-center gap-4 tex text-2xl">
        <LinkedinLogo size={24} />
        <GithubLogo size={24} />
        <InstagramLogo size={24} />
        <XLogo size={24} />

      </div>
    </nav>
  )
}

export default navbar