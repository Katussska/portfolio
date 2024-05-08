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
            <div className="mx-8">
              <h1 className="d:text-7xl relative mb-8 ml-8 text-left text-4xl font-bold lg:text-6xl">
                Katuš Baierová
              </h1>
              <p className="ml-8 text-justify">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Hi, I'm Katussska, currently in my second year of undergraduate studies,
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                &nbsp;pursuing a Bachelor's degree in Computer Science at VŠB - Technical
                &nbsp;University of Ostrava. Although I started my programming journey in
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                &nbsp;college, I've developed a strong interest in web development and
                aspire to &nbsp;specialize in this field in the future.
              </p>
            </div>
          </div>
          <div className="mr-10 w-1/4">
            <img className="rounded-full" src="/avatar.jpg" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="container flex w-full flex-row justify-around">
        <HeroList
          title="Skills"
          items={['React', 'Typescript', 'Tailwind', 'C++', 'Spring']}
        />
        <HeroList title="Tools" items={['GitHub', 'Linux', 'JetBrains']} />
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
