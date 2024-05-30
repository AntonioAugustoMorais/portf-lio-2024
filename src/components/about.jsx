import aboutImg from "../assets/logo1.jpg"
import { motion } from "framer-motion";

const about = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        So
        <span className="text-neutral-500">
          bre
        </span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl w-h-96 h-96" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Ola eu sou o Augusto formado em Analise e Desenvolvimento de Sistemas a mais de dois anos, trabalho atualmente de freelance, residente no estado do Rio de Janeiro
              venha conhecer um pouco do meu trabalho.              
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default about