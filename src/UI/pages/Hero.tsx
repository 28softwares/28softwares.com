import { BackgroundBeams } from '@/UI/aceternity/background-beams'
import { FeaturesSection } from '@/UI/aceternity/feature-section'
import { Button } from '@/UI/shadcn/ui/button'

export const Hero = () => {
  return (
    <>
      <div className="mt-12 p-8 md:mt-0 md:h-screen flex flex-col md:items-center justify-center gap-16 landscape:md:max-lg:mb-64">
        <h1 className="md:text-center font-bold text-4xl md:text-5xl lg:text-6xl">
          <span className="">Building</span>, 28 Softwares for <br />
          28 Solutions.
        </h1>
        <div>
          <Button>Get Started</Button>
        </div>
        <div>
          <FeaturesSection />
        </div>
        <BackgroundBeams className="-z-50" />
      </div>
    </>
  )
}
