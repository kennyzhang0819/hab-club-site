'use client'

export function SponsorHero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('sponsor-content')
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-[90vh] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24 relative z-0">
        <h1 className="text-5xl md:text-6xl font-bold font-heading mb-12 text-gray-900 dark:text-white">
          Make Cal Hacks your event.
        </h1>

        <div className="flex flex-row space-x-8">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-xl font-bold text-primary mb-2">Establish your brand!</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Cal Hacks is the perfect way to establish your brand and build and
              grow awareness for your company among thousands of talented
              engineers.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-xl font-bold text-primary mb-2">Connect with top candidates!</h4>
            <p className="text-gray-700 dark:text-gray-300">
              We can provide you everything you need to find top talent in the
              tech and hacker community.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-xl font-bold text-primary mb-2">Show off your tech!</h4>
            <p className="text-gray-700 dark:text-gray-300">
              Cal Hacks is the largest collegiate hackathon, the best place to
              display your tech and see hackers use your APIs in creative and
              innovative ways.
            </p>
          </div>


        </div>

        <div className="p-6 border-none rounded-xl">
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