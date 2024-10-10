import { FeaturesSection } from '@/components/aceternity/feature-section'
import { Button } from '@/components/ui/button'

export const LandingPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-center font-bold text-6xl">
          <span className="">28Softwares</span>, Building tomorrows <br />
          Digital Experience Today.
        </h1>
        <Button>Get Started</Button>
        <div>
          <FeaturesSection />
        </div>
      </div>
    </>
  )
}
