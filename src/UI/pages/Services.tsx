import { WobbleCard } from '@/UI/aceternity/wobble-card'
import { services } from '@/constants/services'

export function Services() {
  return (
    <div className="container grid gap-4">
      <div>
        <h1 className="text-5xl font-bold pt-12">
          Our Services <span className="text-primary">.</span>
        </h1>
      </div>
      <div className=" py-12 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[300px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {services.webDevelopement.icon}
              {services.webDevelopement.name}
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              {services.webDevelopement.description}
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className=" max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {services.uiuxDesign.icon}
            {services.uiuxDesign.name}
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            {services.uiuxDesign.description}
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-1 bg-blue-900 min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {services.maintenanceSupport.icon}
              {services.maintenanceSupport.name}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              {services.maintenanceSupport.description}
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-yellow-900 min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className=" max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              {services.mobileApplicationDevelopement.icon}
              {services.mobileApplicationDevelopement.name}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              {services.mobileApplicationDevelopement.description}
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  )
}
