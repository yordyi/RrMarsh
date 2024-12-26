import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import Link from 'next/link'

export default function LearnMore() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/legal-background.jpg"
          alt="Legal background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      {/* Hero section */}
      <div className="relative pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <Container>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Explore the New Era of AI-Powered Legal Services
            </h1>
            <div className="mt-6 text-lg leading-8 text-gray-600">
              Through cutting-edge AI technology, we are redefining how legal services are delivered. From document analysis to legal research, from contract review to legal consultation, our AI assistant is always by your side.
            </div>
          </div>
        </Container>
      </div>

      {/* Features section */}
      <Container className="mt-24 sm:mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Feature images */}
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="/images/ai-analysis.jpg"
                alt="AI Analysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="/images/24-7-service.jpg"
                alt="24/7 Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg mb-6">
              <Image
                src="/images/continuous-learning.jpg"
                alt="Continuous Learning"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Intelligent Analysis</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powered by Deep Learning</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Using the latest natural language processing technology, our system can understand complex legal texts and provide accurate analysis and advice.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">24/7 Service</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Always Available</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Anytime, anywhere, our AI assistant can provide immediate legal support and advice, ensuring you get help when you need it.
              </p>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Continuous Learning</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Constantly Evolving</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Our system stays up-to-date with the latest laws and regulations through continuous learning and updates, ensuring timely and accurate advice.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Use cases section */}
      <Container className="mt-24 sm:mt-32">
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full bg-gradient-to-tr from-indigo-50 to-blue-50 opacity-90" />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Use Cases
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                From personal legal consultation to corporate legal support, our AI assistant can adapt to various legal service scenarios.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Contract Review',
                    description:
                      'Automatically analyze contract terms, identify potential risks, and provide modification suggestions to ensure your rights are protected.',
                    image: '/images/contract-review.jpg'
                  },
                  {
                    name: 'Legal Research',
                    description:
                      'Quickly retrieve relevant laws, regulations, and cases, providing in-depth legal analysis and insights.',
                    image: '/images/legal-research.jpg'
                  },
                  {
                    name: 'Legal Consultation',
                    description:
                      'Provide immediate legal advice, answer legal questions, and help you make informed decisions.',
                    image: '/images/legal-consultation.jpg'
                  },
                ].map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <div className="relative h-48 overflow-hidden rounded-lg shadow-lg mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA section */}
      <Container className="mt-24 sm:mt-32">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Using AI Legal Assistant
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Experience AI-powered legal services now, making legal work more efficient, accurate, and convenient.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/register">
              <Button color="white">Start Free Trial</Button>
            </Link>
          </div>
          <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
            <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25" />
          </div>
        </div>
      </Container>
    </div>
  )
}
