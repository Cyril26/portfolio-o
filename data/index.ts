export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Achievements", link: "#achievements" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a booking app.",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Algorithm Visualizer",
    des: "Visualize sorting and pathfinding algorithms",
    img: "/algo.png",
    iconLists: ["/re.svg"],
    link: "https://algorithm-visualizer-theta-opal.vercel.app/?vercelToolbarCode=aSzjZPu8kF6J28c",
  },
  {
    id: 2,
    title: "Complete Vision",
    des: "Booking app for apartments and car rentals.",
    img: "/cv.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://complete-vision-booking-app.vercel.app/",
  },
  {
    id: 3,
    title: "DockerWave",
    des: "Manage docker containers",
    img: "/p2.svg",
    iconLists: ["/re.svg", "py.svg"],
    link: "https://github.com/Cyril26/dockerwave",
  },
  {
    id: 4,
    title: "Spotify Clone",
    des: "Listen to good music",
    img: "/spotify.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://spotify-clone-six-eosin.vercel.app/",
  },
];

export const achievements = [
  {
    id: 1,
    description:
      "Successfully completed the ALX Africa software engineering course, gaining comprehensive skills in modern software development practices and technologies.",
    date: "October 2024",
  },
  {
    id: 2,
    description:
      "Developed an algorithm visualizer application showcasing pathfinding and sorting algorithms, demonstrating strong problem-solving and React development skills.",
    date: "September 2022",
  },
  {
    id: 3,
    description:
      "Implemented a USSD platform feature to integrate OTP functionality and provide balance inquiries, utilizing .NET and Redis caching effectively.",
    date: "September 2024",
  },
  {
    id: 4,
    description:
      "Designed and deployed a booking application for Complete Vision using React.js, with a seamless user experience and Vercel integration.",
    date: "November 2024",
  },
];

export const companies = [
  {
    id: 1,
    name: "Petra",
    img: "/pl.png",
    nameImg: "/pl.png",
  },
  {
    id: 2,
    name: "Complete Vision",
    img: "/logo.png",
    nameImg: "/logo.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer",
    desc: "Assisted in the development and management of a web-based platform using React.js, Typescript and Ruby on Rails, enhancing interactivity for 2+ years.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Graphic Designer",
    desc: "Designed flyers, cover arts, certificates, etc with photoshop for 5+ years.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
