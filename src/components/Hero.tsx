'use client'

import { Button } from './Button'
import { Container } from './Container'
import { motion } from 'framer-motion'

export function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container className="relative pb-16 pt-20 text-center lg:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="relative"
        >
          <motion.h1 
            className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
            variants={itemVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block"
            >
              AI-Powered{' '}
            </motion.span>
            <span className="relative whitespace-nowrap">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-purple-300/70"
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
              <motion.span 
                className="relative bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 text-transparent bg-clip-text"
                variants={itemVariants}
              >
                Legal Assistant
              </motion.span>
            </span>{' '}
            <motion.span
              variants={itemVariants}
              className="inline-block"
            >
              for the Digital Age
            </motion.span>
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
            variants={itemVariants}
          >
            Leveraging cutting-edge AI technology to revolutionize legal services. Experience the future of legal consultation with our advanced machine learning algorithms and natural language processing.
          </motion.p>
          <motion.div 
            className="mt-10 flex justify-center gap-x-6"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button href="/register" className="bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                Start Free Trial
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                href="/learn-more"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              >
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 flex-none fill-purple-600 group-active:fill-current"
                >
                  <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
                </svg>
                <span className="ml-3">Learn more</span>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-36 lg:mt-44"
            variants={itemVariants}
          >
            <motion.p 
              className="font-display text-base text-slate-900"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Powered by Advanced AI Technology
            </motion.p>
            <motion.ul
              role="list"
              className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
              variants={itemVariants}
            >
              {[
                "Neural Networks",
                "Machine Learning",
                "Natural Language Processing"
              ].map((tech, index) => (
                <motion.li 
                  key={tech}
                  className="flex"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ 
                    scale: 1.1,
                    color: "#6366f1",
                    transition: { duration: 0.2 }
                  }}
                >
                  <p className="text-sm text-slate-500">{tech}</p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}
