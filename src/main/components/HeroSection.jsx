import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 px-8 text-center">
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typewriter
          options={{
            strings: ['Your Health, Our Priority', 'Get Smart Health Advice Instantly', 'Live Better Every Day'],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        A modern way to analyze your health without doctors.
      </motion.p>
    </section>
  )
}

export default HeroSection


