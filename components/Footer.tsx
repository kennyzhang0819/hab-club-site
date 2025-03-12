import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0A2457] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/hackathonsatberkeley/hackathons-at-berkeley-logo.png"
              alt="Hackathons at Berkeley Logo"
              width={200}
              height={50}
              className="h-12 w-auto invert"
            />
          </Link>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="hover:opacity-80">Home</Link>
              <a href="http://cubstart.com" className="hover:opacity-80">Cubstart</a>
              <a href="https://ai.calhacks.io/" className="hover:opacity-80">UC Berkeley AI Hackathon</a>
            </div>
            <div className="flex flex-col space-y-3">
              <Link href="/sponsor" className="hover:opacity-80">Sponsor Us</Link>
              <a href="/conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                Code of Conduct
              </a>
              <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                MLH Code of Conduct
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="https://www.facebook.com/CalHacks/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                    className="hover:opacity-80"
                  />
                </a>
                <a href="https://twitter.com/CalHacks" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/twitter.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="hover:opacity-80"
                  />
                </a>
                <a href="https://www.instagram.com/calhacks/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="https://calhacks-sierra.s3-us-west-2.amazonaws.com/assets/branding/instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="hover:opacity-80"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12">
          <p className="text-sm">Made with ♡, by Hackathons at Berkeley</p>
        </div>
      </div>
    </footer>
  )
} 