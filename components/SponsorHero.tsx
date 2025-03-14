'use client'

import Image from 'next/image'
import Link from 'next/link'

export function SponsorHero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('sponsor-content')
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* MLH Badge */}
      <a 
        href="https://mlh.io/seasons/2024/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=gray"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 z-10 w-[10%] max-w-[100px] min-w-[60px]"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-gray.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          width={100}
          height={200}
          className="w-full h-auto"
        />
      </a>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative z-0">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-12 text-gray-900 dark:text-white">
            Make Cal Hacks your event.
          </h1>

          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-2">Establish your brand!</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Cal Hacks is the perfect way to establish your brand and build and
                grow awareness for your company among thousands of talented
                engineers.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-2">Connect with top candidates!</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We can provide you everything you need to find top talent in the
                tech and hacker community.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-2">Show off your tech!</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Cal Hacks is the largest collegiate hackathon, the best place to
                display your tech and see hackers use your APIs in creative and
                innovative ways.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-primary mb-2">
                Ready to jump onboard? Email{' '}
                <a 
                  href="mailto:team@calhacks.io" 
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  team@calhacks.io
                </a>
              </h4>
            </div>
          </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <Image
            src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/wave_2"
            alt="Wave decoration"
            width={1920}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Down indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
          aria-label="Scroll to content"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-gray-600 dark:text-gray-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
} 