import Image from 'next/image'

export function SponsorPast() {
  return (
    <section className="py-16">
        <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
          Past Sponsors
        </h2>
        
        <div className="flex justify-center">
          <Image 
            src="/vectors/sponsors.svg"
            alt="Past sponsors grid"
            width={1000}
            height={600}
            className="w-full max-w-4xl"
          />
        </div>
    </section>
  )
} 