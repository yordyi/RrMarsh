import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600/5 via-violet-500/5 to-indigo-600/5">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
        </div>
        <div className="border-t border-slate-400/10 py-10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-center text-sm text-slate-500 space-y-2">
              <p>Rr Marsh LLC</p>
              <p>144801 W Buena Vista Rd</p>
              <p>Prosser, WA, 99350-7255, United States</p>
              <p>phone: (412) 301-7426</p>
              <p>Email: founder@marsxplus.com</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <div className="flex gap-x-6">
              <Link
                href="https://twitter.com/MarsXAI"
                className="group"
                aria-label="MarsX on X"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-purple-600 transition-colors"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com/company/marsx-ai"
                className="group"
                aria-label="MarsX on LinkedIn"
                target="_blank"
              >
                <svg
                  className="h-6 w-6 fill-slate-500 group-hover:fill-purple-600 transition-colors"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} Rr Marsh LLC. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
