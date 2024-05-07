'use client';

import { SparklesCore } from './ui/sparkles';

const Hero = () => {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
      <div className="absolute inset-0 h-screen w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-t from-black"></div>
      <div className="flex">
        <div>
          <h1 className="d:text-7xl relative z-20 text-center text-3xl font-bold lg:text-6xl">
            Kateřina Baierová
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut
            beatae, corporis cumque eaque enim esse est hic illum, libero molestiae optio
            possimus quae rem repudiandae sunt, tempora temporibus veritatis!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
