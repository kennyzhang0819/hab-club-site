'use client'

export function SponsorHero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById('sponsor-content')
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 md:pt-32 md:pb-12 relative z-0">
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

        <div className="p-6 flex flex-col gap-2">
          <h4 className="flex flex-row gap-2 text-xl font-bold text-primary">
            Our next event is in
            <div className="text-blue-600 dark:text-blue-400 hover:underline">
            October 2025!
            </div>
            
          </h4>

          <h4 className="text-xl font-bold text-primary">
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
    </div>
  )
} 