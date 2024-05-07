import { Linkedin, Github, History, Mail } from 'lucide-react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';

const Socials = () => {
  const socials = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kateřina-baierová-1a18b1263/',
      icon: <Linkedin size={35} />,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/Katussska',
      icon: <Github size={35} />,
    },
    {
      title: 'WakaTime',
      href: 'https://wakatime.com/@Katussska',
      icon: <History size={35} />,
    },
    {
      title: 'Email',
      href: 'mailto:katkabaier@gmail.com',
      icon: <Mail size={35} />,
    },
  ];
  return (
    <div className="flex flex-row flex-wrap gap-8">
      {socials.map(({ title, href, icon }, key) => (
        <TooltipProvider key={key}>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={href} title={title}>
                {icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

export default Socials;
