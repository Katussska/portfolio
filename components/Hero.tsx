'use client';

import { SparklesCore } from './ui/sparkles';

const HeroList = ({
  title,
  items,
  className,
}: {
  title: string;
  items: Array<string>;
  className?: string;
}) => (
  <div className={className}>
    <h3 className="mb-2">{title}</h3>
    {items.map((item, key) => (
      <p key={key} className="mb-1">
        {item}
      </p>
    ))}
  </div>
);

const Hero = () => {
  return (
    <>
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
        <div className="container z-20 flex items-center justify-between">
          <div className="w-7/12">
            <div>
              <h1 className="d:text-7xl relative mb-8 text-left text-4xl font-bold lg:text-6xl">
                Kateřina Baierová
              </h1>
              <p className="mb-8 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut
                beatae, corporis cumque eaque enim esse est hic illum, libero molestiae
                optio possimus quae rem repudiandae sunt, tempora temporibus veritatis!
              </p>
            </div>
          </div>
          <div className="w-4/12">
            <img className="rounded-full" src="/avatar.jpg" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="container flex w-full flex-row justify-around">
        <HeroList
          title="Skills"
          items={['JavaScript', 'JavaScript', 'JavaScript', 'JavaScript']}
        />
        <HeroList
          title="Experience"
          items={[
            '3+ years as a full-stack developer',
            'Worked on various web applications',
            'Passionate about open-source projects',
          ]}
        />
      </div>
    </>
  );
};

export default Hero;
