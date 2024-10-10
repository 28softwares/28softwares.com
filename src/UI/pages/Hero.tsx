import { FeaturesSection } from '@/components/aceternity/feature-section'
import { Button } from '@/components/shadcn/ui/button'

export const Hero = () => {
  return (
    <>
      <div className="mt-12 p-8 md:mt-0 md:h-screen flex flex-col md:items-center justify-center gap-16">
        <h1 className="md:text-center font-bold text-4xl md:text-5xl lg:text-6xl">
          <span className="">28Softwares</span>, Building tomorrows <br />
          Digital Experience Today.
        </h1>
        <div>
          <Button>Get Started</Button>
        </div>
        <div>
          <FeaturesSection />
        </div>
      </div>
    </>
  )
}
