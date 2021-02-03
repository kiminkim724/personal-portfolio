import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kimin Kim | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Kimin Kim',
  subtitle: 'Software Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello! I'm Kimin Kim, a computer science student at Northeastern University.",
  paragraphTwo:
    "I'm currently interested in learning full-stack development and I've been trying to create projects to practice these skills.",
  paragraphThree:
    "Apart from coding, I like to play badminton and volleyball. But because of COVID, I've spent a lot of time playing video games.",
  resume: './Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'memories.png',
    title: 'Memories',
    info:
      'This project is a website that allows users to create memories with a title, message, tag(s), and an image. Each memory can be updated/deleted and also liked.',
    info2:
      'This project was created using the MERN Stack, MongoDB was used to store the posts for each memory, Express for the backend to handle requests to create/update the posts, React for the front-end to display the posts.',
    url: 'https://memories-project-kimki.netlify.app',
    repo: 'https://github.com/kiminkim724/memories_project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'personal-portfolio.png',
    title: 'Personal Portfolio',
    info: 'This is my personal website that was created using Gatsby.',
    info2: '',
    url: '',
    repo: 'https://github.com/kiminkim724/personal-portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to hire me? Awesome!',
  btn: "Let's connect!",
  email: 'kim.ki@northeastern.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
