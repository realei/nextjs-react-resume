import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  // UniversityItem,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Meet Lei Wang',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lei Wang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Athens based <strong className="text-stone-100">Full Stack AI Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Toorbee</strong> helping build a modern, LLM based travel assistant chatbot.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy working out, walking my <strong className="text-stone-100">dog</strong>, shopping for
        fresh products at the <strong className="text-stone-100">Laiki Street Market</strong> in Greece, and cooking. I
        also love exploring the beauty of the <strong className="text-stone-100">Aegean Sea</strong> during my weekends.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm an Athens-based Full Stack AI Engineer, with a keen interest in LLM, LangChain, 
  backend development, coding, Kubernetes, and machine learning. While I find comfort in backend technologies 
  and AI frameworks, I'm also intrigued by React on the frontend and I am actively learning to expand my skills. 
  With the ability to navigate both backend and frontend development, I'm equipped as an indie hacker to
  conceptualize and build products from scratch`,
  aboutItems: [
    {label: 'Location', text: 'Athens, GR', Icon: MapIcon},
    {label: 'Gender', text: 'he/him', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese / EU Resident', Icon: FlagIcon},
    {label: 'Interests', text: 'Fitness, Healthy Eating, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Macau', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Toorbee(A Greek Startup)', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'Greek',
        level: 1,
      },
    ],
  },
  {
    name: 'Frontend/Backend development',
    skills: [
      {
        name: 'Django',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'React',
        level: 4,
      },
    ],
  },
  {
    name: 'LLM/Machine Learning',
    skills: [
      {
        name: 'LangChain',
        level: 8,
      },
      {
        name: 'Pytorch',
        level: 8,
      },
      {
        name: 'Airflow',
        level: 4,
      },
    ],
  },
  {
    name: 'Cloud Native Skills',
    skills: [
      {
        name: 'Kubernetes',
        level: 9,
      },
      {
        name: 'CI/CD',
        level: 7,
      },
      {
        name: 'Microservices',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Macau S.A.R',
    location: 'University of Macau',
    title: 'Master',
    content: (
      <p>
        During my master's program(Electrical and Electronics Engineering), I was awarded a full scholarship and served
        as a teaching assistant. My research focused on implementing algorithms parallel acceleration using FPGA
        technology.
      </p>
    ),
  },
  {
    date: 'Lisbon, Portugal',
    location: 'Instituto Superior Técnico',
    title: 'AI Research Assistant',
    content: (
      <p>
        Research and implement computer vision algorithms using GPU acceleration to enhance the cognitive abilities of
        robots.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2019 - Present',
    location: 'Toorbee @ Athens, Greece',
    title: 'Senior Machine Learning Engineer | Full Stack AI Engineer',
    content: (
      <ul>
        <li style={{marginBottom: '10px'}}>
          Designed and developed "TourLIngo AI ChatBot" utilizing LangChain, Django, Websockets, LLM, Next.js, and React
          to build the MVP product.
        </li>
        <li style={{marginBottom: '10px'}}>
          Designed and developed the Image Search product primarily using PyTorch, Flask, Kubernetes, Faiss, and Airflow
          for data flow.
        </li>
        <li style={{marginBottom: '10px'}}>
          Assisted the company in integrating backend services for WeChat Payment, Alipay, UnionPay, and other payment
          methods catering to Asian tourists.
        </li>
      </ul>
    ),
  },
  {
    date: 'Nov 2017 - Apr 2019',
    location: 'Anastassiadis Group @ Athens, Greece',
    title: 'Real Estate Investment Consultant',
    content: (
      <p>
        Worked as a real estate consultant for a local company, involved in the Greek Golden Visa program, facilitating
        property investments of €250,000 or more for residency purposes.
      </p>
    ),
  },
  {
    date: 'Feb 2016 - Jul 2017',
    location: 'IBM @ Beijing, China',
    title: 'Cloud Technical Lead',
    content: (
      <ul>
        <li style={{marginBottom: '10px'}}>
          Led DevOps team in delivery of OpenStack datacenter project requiring close cooperation among stakeholders to
          share information and develop solutions to meet broad array of deliverables
        </li>
        <li style={{marginBottom: '10px'}}>
          Designed and deployed three Private Cloud in OpenStack open source solutions with HA, Load Balancer,
          distributed backend
        </li>
        <li style={{marginBottom: '10px'}}>
          Designed and implemented customized OpenStack Dedicated Datacenter as DevOps Platform for large scale images
          (500+), with security automation and storage optimization
        </li>
        <li style={{marginBottom: '10px'}}>
          Architected and implemented security management platform to provide smooth IBM internal Cloud security
          compliance service for OpenStack Cloud
        </li>
      </ul>
    ),
  },
  {
    date: 'Jun 2011 - Feb 2016',
    location: 'Infinera @ Beijing, China',
    title: 'Software Engineer',
    content: (
      <ul>
        <li style={{marginBottom: '10px'}}>
          Developed lightweight IAAS in Python with ESXi Platform for Infinera's Network product which virtualizes real
          HW for Dev and QA team
        </li>
        <li style={{marginBottom: '10px'}}>
          Developed orchestration service for IAAS automation deployment and configuration in Python and XML
        </li>
        <li style={{marginBottom: '10px'}}>
          Designed and verified Openstack and KVM's open source solutions for replacement of Vmware ESXi for IAAS DevOps
          platform
        </li>
        <li style={{marginBottom: '10px'}}>Developed Infinera's HW diagnostic system in C/C++ language</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'If you are interested in my work experience and personal projects, please feel free to contact me through LinkedIn.',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'reachout@timbaker.me',
    //   href: 'mailto:reachout@timbaker.me',
    // },
    {
      type: ContactType.Location,
      text: 'Athens, Greece',
      href: 'https://www.google.com/maps/place/Athens/@37.9908692,23.7177398,14z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd1f067043f1:0x2736354576668ddd!8m2!3d37.9838096!4d23.7275388!16zL20vMG4yeg?entry=ttu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Lei Wang',
      href: 'https://www.linkedin.com/in/lei-wang-54866926/',
    },
    {
      type: ContactType.Github,
      text: '@realei',
      href: 'https://github.com/realei',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/realei'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/lei-wang-54866926/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/leigge'},
];
