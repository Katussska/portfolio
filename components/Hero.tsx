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
        <div className="container z-20 flex flex-col-reverse items-center justify-between md:flex-row">
          <div className="w-11/12 md:w-7/12">
            <div className="mx-8">
              <h1 className="relative mb-8 text-center text-4xl font-bold md:ml-8 md:text-left md:text-6xl lg:text-7xl">
                Katuš Baierová
              </h1>
              <p className="text-justify md:ml-8">
                Hi, I'm Katussska, currently in my second year of undergraduate studies,
                pursuing a Bachelor's degree in Computer Science at VŠB - Technical
                University of Ostrava. Although I started my programming journey in
                college, I've developed a strong interest in web development and aspire to
                specialize in this field in the future.
              </p>
            </div>
          </div>
          <div className="mb-10 w-1/4 md:mb-0 md:mr-10">
            <img className="rounded-full" src="/avatar.jpg" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="container flex w-full flex-col items-center text-center md:flex-row md:items-start md:justify-around md:text-left">
        <HeroList
          title="Skills"
          items={['React', 'Typescript', 'Tailwind', 'Spring Boot', 'C++']}
        />
        <HeroList
          className="mt-10 md:mt-0"
          title="Tools"
          items={['GitHub', 'Linux', 'JetBrains']}
        />
        <HeroList
          className="mt-10 md:mt-0"
          title="Experience"
          items={['VSB-TUO Computer Science', 'Nothing else', 'Yet']}
        />
      </div>
    </>
  );
};

export default Hero;
