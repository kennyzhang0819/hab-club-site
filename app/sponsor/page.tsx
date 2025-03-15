import Image from 'next/image'
import { SponsorHero } from '@/components/sponsor/SponsorHero'
import { SponsorStats } from '@/components/sponsor/SponsorStats'
import { SponsorTestimonials } from '@/components/sponsor/SponsorTestimonials'
import { SponsorPast } from '@/components/sponsor/SponsorPast'
import { SponsorContact } from '@/components/sponsor/SponsorContact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sponsor - Hackathons at Berkeley',
  description: 'Help support Cal Hacks, the largest collegiate hackathon, and make Cal Hacks your event.',
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