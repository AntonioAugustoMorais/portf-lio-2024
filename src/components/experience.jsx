import { motion } from "framer-motion"

const experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duratio: 2 }}
        className="my-20 text-center text-4xl">
        Experiencia
      </motion.h2>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duratio: 2 }}
          className="w-full lg:w-1/4">
          <p className="mb-2 text-sm text-neutral-400">2022 - 2024</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duratio: 2 }}
          className="w-full max-w-xl lg:w-3/4">
          <h6 className="mb-2 font-semibold">
            Desenvolvedor Web 
            <span className="mx-1 text-sm text-purple-100">
              - Freelancer
            </span>
          </h6>
          <p className="mb-4 text-neutral-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt. Libero molestiae, reiciendis, rerum minus veniam, optio tempore quis nesciunt modi nulla maxime accusantium doloribus exercitationem maiores quibusdam obcaecati voluptate.</p>
          <p className="mb-4 text-neutral-400">
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">html</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">css</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">javascript</span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">github</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default experience