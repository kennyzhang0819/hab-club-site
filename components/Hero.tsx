'use client'

import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { toast } from "sonner"



export function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const supabase = createClient()
      const { data, error } = await supabase.from('club-site-interest-form').insert({ email })
      if (error) {
        console.error('Error submitting form:', error)
        toast.error('Error submitting form')
      }

      toast.success('Successfully signed up for updates!')
      setEmail('')

    } catch (error) {
      console.error('Error submitting form:', error)
      // Could add an error toast here
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side - Image */}
        <div className="relative w-full md:w-1/2">
          <Image
            src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/hackathonsatberkeley/coding-ddoski.png"
            alt="Coding Ddoski"
            width={500}
            height={500}
            className="w-full h-auto dark:brightness-110 dark:contrast-105"
          />
          <div className="absolute top-0 left-0 w-full h-full">
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/splash_icon_1"
              alt="Splash Icon 1"
              width={50}
              height={50}
              className="absolute top-1/4 left-1/4 animate-float dark:brightness-110"
            />
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/splash_icon_2"
              alt="Splash Icon 2"
              width={50}
              height={50}
              className="absolute top-1/2 right-1/4 animate-float delay-200 dark:brightness-110"
            />
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/splash_icon_3"
              alt="Splash Icon 3"
              width={50}
              height={50}
              className="absolute bottom-1/4 left-1/3 animate-float delay-400 dark:brightness-110"
            />
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/splash_icon_4"
              alt="Splash Icon 4"
              width={50}
              height={50}
              className="absolute top-1/3 right-1/3 animate-float delay-600 dark:brightness-110"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Hackathons @ Berkeley
          </h1>
          <p className="text-lg mb-8 leading-6 text-gray-600 dark:text-gray-300">
            Hackathons @ Berkeley is a team of students cultivating a platform where people can build, learn, and experiment
            without boundaries. We host Cal Hacks, our flagship hackathon, alongside other hackathons every year!
            <br /><br />
            Fill out our <b className="text-gray-900 dark:text-white">early interest form</b> and be the first to hear about our next event! It'll be <b className="text-gray-900 dark:text-white">October 18th-20th</b> in downtown SF.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ddoski@berkeley.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary/90 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary dark:bg-primary/90 text-white rounded-lg hover:bg-primary/80 dark:hover:bg-primary/70 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 