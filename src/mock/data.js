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
    img: 'final_poster.png',
    title: 'Karaoke Area in Covey.town',
    info: 'This project was developed in my Software Engineering class, where we work on a time in sprints to create an additional feature to an existing project called Covey.Town. ',
    info2: 'Our group chose to implement a Spotify Player using the Web Playback SDK and the Web API to create a listening room where multiple people can listen at the same time.',
    url: 'https://covey-town-karaoke.netlify.app/',
    img_url: 'https://docs.google.com/presentation/d/1YLv8neVqy6ZhPmiqstw1go5Cjx5yIRSByvsPUEg1O9k/edit#slide=id.p',
    repo: 'https://github.com/kiminkim724/cs4530-final', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'searchneu.png',
    title: 'SearchNEU',
    info:
      'SearchNEU lets you easily search for classes, professors, and subjects at Northeastern. All the data on the site is scraped from different parts of Northeastern\'s websites and updated daily. The scrapers themselves run on the Course Catalog API, which is hosted on Amazon Web Services.',
    info2:
      '',
    url: 'https://searchneu.com/NEU',
    repo: 'https://github.com/sandboxnu/searchneu', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'marinograph.png',
    title: 'Marino Tracker',
    info:
      'This project is a website that allows users to view how many people are in the gyms at Northeastern at different times of the day on average. I created this because I was frustrated not knowing when the gyms would be crowded or not.',
    info2:
      "I first scraped the head count from the school's website and then uploaded the data to a MongoDB database, then used a Flask server to be able to get the data from the database and then calculate the averages and send it to the Next.js frontend",
    url: 'https://marino-graph.vercel.app/',
    repo: 'https://github.com/kiminkim724/marino-graph', // if no repo, the button will not show up
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
