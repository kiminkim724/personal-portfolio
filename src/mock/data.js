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
    title: 'Marino Tracker',
    info:
      'This project is a website that allows users to view how many people are in the gyms at Northeastern at different times of the day on average. I created this because I was frustrated not knowing when the gyms would be crowded or not.',
    info2:
      "I first scraped the head count from the school's website and then uploaded the data to a MongoDB database, then used a Flask server to be able to get the data from the database and then calculate the averages and send it to the Next.js frontend",
    url: '',
    repo: 'https://github.com/kiminkim724/marino-counts', // if no repo, the button will not show up
  },
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
  {
    id: nanoid(),
    img: 'excellence.png',
    title: 'Excellence Animator',
    info:
      'This is a simple animator that was created using MVC(model view controller). It takes in a text file that contains scenes at various ticks, which then animates them into shapes.',
    info2:
      'The code is made private at the request of the instructors. You may view the source code if asked for permission.',
    url: 'https://imgur.com/9INgRIi',
    repo: '', // if no repo, the button will not show up
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kimin-kim/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kiminkim724',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
