"use client"

import Image from 'next/image'
import { directors } from '@/data/directors'
import { useTheme } from 'next-themes';

export default function AboutPage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/team.jpg" 
                alt="Hackathons at Berkeley Team" 
                width={800} 
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                About Us
              </h1>
              <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                We're a nonprofit organization composed of students passionate about
                fostering a culture of hacking, entrepreneurship, and social good
                via the empowerment of technology.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our mission is to empower others with technology to create solutions
                to better the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Team
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {directors.sort((a, b) => a.firstName.localeCompare(b.firstName)).map((director, index) => {
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-full aspect-square relative rounded-full overflow-hidden mb-3 border-2 border-primary/20">
                    <Image src={director.image} alt={`${director.firstName} ${director.lastName}`} fill className="object-cover" />
                  </div>
                  <a 
                    href={director.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`font-bold text-center text-gray-900 dark:text-white ${director.linkedin !== '#' ? 'hover:text-primary dark:hover:text-primary/90' : ''} transition-colors`}
                  >
                    {director.firstName} {director.lastName}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg ">
              Have a question for us? Email{' '}
              <a href="mailto:team@calhacks.io">team@calhacks.io</a>
            </p>
          </div>
        </div>
      </section>

      {/* Beyond Cal Hacks Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Beyond Hackathons at Berkeley
          </h2>
          <p className="text-lg text-center mb-12">
            Our members and alumni have continued their success through
            internships and full-time employment across a variety of industries.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="w-full max-w-[120px] bg-white p-2 rounded-md">
              <Image src="https://iili.io/HY6ZF8g.png" alt="google" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>

            <div className="w-full max-w-[120px] scale-75 mt-5 bg-white p-2 rounded-md">
              <Image src="https://iili.io/HY6pdv9.png" alt="amazon-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>

            <div className="w-full max-w-[120px]">
              <Image src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/sponsors/citadel.png" alt="citadel" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>

            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HY6ZucX.png" alt="twitch" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px] scale-75">
              {theme === "light" ? 
              <Image src="https://iili.io/HY6ZwDx.png" alt="apple-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              :
              <Image src="https://www.clker.com/cliparts/i/s/H/f/4/T/apple-logo-white-md.png" alt="amazon-dark" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              }
            </div>
            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HY6DXZx.png" alt="hrt" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HY6m7gS.png" alt="meta" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px] scale-75">
              {theme === "light" ? 
              <Image src="https://iili.io/HY6yOxa.png" alt="figma-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              :
              <Image src="https://media.licdn.com/dms/image/v2/C5612AQFgggqsWPjx4w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1539986347735?e=2147483647&v=beta&t=nC2fm-ttjIsRXzSBn5IgX0XIaW39pT-0t8Th4Z4Ll_o" alt="figma-dark" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              }
            </div>
            <div className="w-full max-w-[120px] scale-75">
              {theme === "light" ? 
              <Image src="https://iili.io/HYPF51s.png" alt="plaid-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              :
              <Image src="https://prideglobal.com/images/client-successes/plaid.png" alt="figma-dark" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              }
            </div>
            <div className="w-full max-w-[120px]">
              {theme === "light" ? 
              <Image src="https://iili.io/HYPKCGe.png" alt="github-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              :
              <Image src="https://www.pngmart.com/files/23/Github-Logo-PNG-Clipart.png" alt="figma-dark" width={120} height={60} className="w-full h-auto dark:brightness-110" />
              }
            </div>
            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HYP9ep9.png" alt="waymo" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px]">
              <Image src="https://iili.io/HY6ypJS.png" alt="roblox-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HYP9oe1.png" alt="uber-light" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px] scale-75">
              <Image src="https://iili.io/HYPHbA7.png" alt="salesforce" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
            <div className="w-full max-w-[120px]">
              <Image src="https://iili.io/HYP2CGa.png" alt="imc" width={120} height={60} className="w-full h-auto dark:brightness-110" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 