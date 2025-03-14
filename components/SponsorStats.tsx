import Image from 'next/image'

export function SponsorStats() {
  return (
    <section id="sponsor-content" className="py-16">
      
        <h2 className="text-4xl font-bold font-heading text-center mb-16 text-gray-900 dark:text-white">
          Be a part of...
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          <div className="flex flex-col items-center">
            <Image 
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/metrics_shape_1.svg"
              alt="Metric visualization"
              width={150}
              height={150}
              className="mb-4"
            />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2,000+</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Hackers</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/metrics_shape_2.svg"
              alt="Metric visualization"
              width={150}
              height={150}
              className="mb-4"
            />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">36</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Hours</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/metrics_shape_3.svg"
              alt="Metric visualization"
              width={150}
              height={150}
              className="mb-4"
            />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">300+</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Projects</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <Image 
              src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/9.0/metrics_shape_4.svg"
              alt="Metric visualization"
              width={150}
              height={150}
              className="mb-4"
            />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-lg text-gray-600 dark:text-gray-300">Schools</p>
            </div>
          </div>
        </div>
    </section>
  )
} 