'use client';

import { BackgroundGradient } from '@/components/ui';
import { Project } from '@/lib/types';
import BadgeList from '@/components/BadgeList';
import { useState } from 'react';

const ProjectCard = ({
  title,
  description,
  badges,
  screenshots,
  liveUrl,
  codeUrl,
}: Project) => {
  const [backdropToggle, setBackdropToggle] = useState(false);

  return (
    <>
      {/*<div*/}
      {/*  className={cn(*/}
      {/*    'absolute bottom-0 top-0 z-30 hidden h-full w-full bg-black',*/}
      {/*    backdropToggle ? 'block' : '',*/}
      {/*  )}*/}
      {/*></div>*/}
      <div className="mb-24 max-w-6xl">
        <BackgroundGradient
          animate
          className="flex flex-row justify-between gap-6 rounded-[18px] bg-zinc-900 p-4 sm:p-10"
        >
          <div className="w-4/12">
            <h3 className="mb-4">{title}</h3>
            <BadgeList badges={badges} />
            <p className="mb-8 text-justify">{description}</p>
            <div className="flex flex-row gap-6 font-body">
              <a href={liveUrl}>
                <button className="bg-text-gradient transform rounded-lg border border-white bg-white px-6 py-2 font-bold text-black transition duration-300 ease-in-out hover:-translate-y-1">
                  Live
                </button>
              </a>
              <a href={codeUrl}>
                <button className="duration-400 transform rounded-lg border border-white bg-transparent px-6 py-2 text-white transition hover:-translate-y-1">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="w-8/12">
            {/*todo: picture for different device sizes*/}
            <picture>
              <img
                className="z-50 rounded-xl duration-300 ease-in-out hover:scale-140"
                src={screenshots.desktop}
                alt="MovieHub 2.0"
                onMouseEnter={() => setBackdropToggle(true)}
                onMouseLeave={() => setBackdropToggle(false)}
              />
            </picture>
          </div>
        </BackgroundGradient>
      </div>
    </>
  );
};

const Projects = () => {
  const projects: Array<Project> = [
    {
      title: 'MovieHub 2.0',
      description:
        'Very good very good project, very nice code, good quality code not like shit c# written from india or pakistan. Written using react.js the best frontend framework the world has ever witnessed.',
      badges: ['Ionic', 'React', 'Typescript', 'CSS', 'Spring', 'PostgreSQL', 'Docker'],
      screenshots: {
        mobile: '/projects/moviehub20mobile.png',
        desktop: '/projects/moviehub20.png',
      },
      liveUrl: 'https://moviehub.katussska.dev/',
      codeUrl: 'https://github.com/Katussska/MovieHub-2.0',
    },
    {
      title: 'MovieHub',
      description:
        'Has small bug. For start click on MovieHub logo.\n' +
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Pellentesque ipsum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Vivamus luctus egestas leo.',
      badges: ['Javascript', 'CSS', 'HTML'],
      screenshots: {
        mobile: '',
        desktop: '/projects/moviehub.png',
      },
      liveUrl: 'https://katussska.github.io/MovieHub/',
      codeUrl: 'https://github.com/Katussska/MovieHub',
    },
  ];

  return (
    <div>
      <h2 className="py-16 text-center">Projects</h2>
      <div className="flex flex-col">
        {projects.map((project, key) => (
          <ProjectCard {...project} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
