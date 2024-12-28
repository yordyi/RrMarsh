'use client'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CallToAction } from '../../components/CallToAction'
import { motion } from 'framer-motion'
import Image from 'next/image'

const mainFeatures = [
  {
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI algorithms analyze complex legal documents with high accuracy, identifying key clauses and potential risks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: '24/7 Availability',
    description: 'Access legal assistance anytime, anywhere. Our AI system is always ready to help with your legal queries and document analysis.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Multilingual Support',
    description: 'Handle legal documents in multiple languages with our advanced natural language processing capabilities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  },
  {
    title: 'Secure & Confidential',
    description: 'Your legal documents and data are protected with enterprise-grade security and encryption.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

const additionalFeatures = [
  {
    title: 'Legal Research',
    description: 'Access comprehensive legal research tools powered by AI to find relevant cases and precedents.',
    image: '/images/legal-research.jpg',
  },
  {
    title: 'Contract Review',
    description: 'Automated contract review and analysis to identify potential risks and opportunities.',
    image: '/images/contract-review.jpg',
  },
  {
    title: 'Legal Consultation',
    description: 'Get instant answers to your legal questions through our AI-powered consultation system.',
    image: '/images/legal-consultation.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function LearnMore() {
  return (
    <>
      <Header />
      <main>
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Features
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how our AI-powered legal assistant can transform your legal workflow
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {mainFeatures.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-gray-200/50 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-purple-600 text-white">
                        {feature.icon}
                      </div>
                      {feature.title}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </Container>
      </div>

      {/* Additional Features Section */}
      <div className="relative py-16 sm:py-24 lg:py-32 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Legal Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our full suite of AI-powered legal tools and services
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {additionalFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="h-48 w-full relative">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <CallToAction />
      </main>
      <Footer />
    </>
  )
}
