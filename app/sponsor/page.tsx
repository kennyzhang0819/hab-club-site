import Image from 'next/image'
import { SponsorHero } from '@/components/SponsorHero'
import { SponsorStats } from '@/components/SponsorStats'
import { SponsorTestimonials } from '@/components/SponsorTestimonials'
import { SponsorPast } from '@/components/SponsorPast'
import { SponsorContact } from '@/components/SponsorContact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsor - Hackathons at Berkeley',
  description: 'Help support Cal Hacks, the largest collegiate hackathon, and make Cal Hacks your event.',
  openGraph: {
    title: 'Sponsor - Hackathons at Berkeley',
    description: 'Help support Cal Hacks, the largest collegiate hackathon, and make Cal Hacks your event.',
    images: ['https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@calhacks',
    creator: '@calhacks',
    images: ['https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/og-image.jpg'],
  },
}

export default function SponsorPage() {
  return (
    <main className="min-h-screen">
      <SponsorHero />
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <SponsorStats />
        <SponsorTestimonials />
        <SponsorPast />
        <SponsorContact />
      </div>
    </main>
  )
} 