import { Hero } from '@/components/Hero'
import { Initiatives } from '@/components/Initiatives'
import { PhotoGallery } from '@/components/PhotoGallery'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Initiatives />
      <PhotoGallery />
    </main>
  )
}
