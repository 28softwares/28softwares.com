import { BackgroundBeams } from '@/UI/aceternity/background-beams'
import { FeaturesSection } from '@/UI/aceternity/feature-section'

export const Hero = () => {
  return (
    <>
      <div className="mt-12 md:mt-0 md:h-screen flex flex-col md:items-center justify-center mb-0 ">
        <h1 className="md:text-center font-bold text-4xl md:text-5xl lg:text-6xl">
          <span className="">Building</span>, 28 Softwares for <br />
          28 Solutions <span className="text-primary">.</span>
        </h1>
        <FeaturesSection />
        <BackgroundBeams className="-z-50" />
      </div>
    </>
  )
}
