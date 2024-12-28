import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: "How accurate is your AI legal advisor?",
      answer:
        "Our AI system is trained on millions of legal cases and documents, achieving over 95% accuracy in legal analysis. All critical recommendations are reviewed by our expert legal team to ensure reliability.",
    },
    {
      question: "How do you protect my data and privacy?",
      answer: "We employ bank-level encryption and strict security protocols. All data is encrypted both in transit and at rest. We comply with GDPR, CCPA, and other privacy regulations.",
    },
    {
      question: "Is the service available 24/7?",
      answer:
        "Yes, our AI system is available round-the-clock. Enterprise clients get 24/7 human support, while Professional and Starter plans have access to human support during business hours.",
    },
  ],
  [
    {
      question: "How does your AI technology work?",
      answer:
        "We use advanced machine learning models, including natural language processing and deep learning, to analyze legal documents, predict outcomes, and generate recommendations based on vast legal databases.",
    },
    {
      question: "Can I upgrade or change my plan?",
      answer:
        "Absolutely! You can upgrade your plan at any time with immediate effect. Downgrades take effect at the end of your billing cycle. Unused credits are prorated and transferred.",
    },
    {
      question: "Are AI-generated legal documents legally binding?",
      answer:
        "Our AI generates legally compliant documents following current regulations. While they are designed to be legally sound, we recommend professional review for critical documents, which is included in our Enterprise plan.",
    },
  ],
  [
    {
      question: "What types of legal matters can your AI handle?",
      answer:
        "Our AI specializes in corporate law, intellectual property, employment law, contracts, and regulatory compliance. For specialized areas, we provide expert human oversight and guidance.",
    },
    {
      question: "How do you keep up with changing laws?",
      answer: "Our AI models are continuously updated with the latest legal changes and precedents. We monitor global legal developments and update our knowledge base daily.",
    },
    {
      question: "What makes your AI different from traditional legal services?",
      answer:
        "Our AI provides instant, 24/7 access to legal insights, processes thousands of documents in seconds, and learns from millions of cases to offer data-driven recommendations at a fraction of traditional legal costs.",
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gradient-to-r from-purple-600/10 via-violet-500/10 to-indigo-600/10 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%] opacity-50"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you cannot find what you are looking for, reach out to our AI support team for instant assistance.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
