type Project = {
  title: string;
  description: string;
  imageUrl: string;
  projectLink?: string;
  useSwiper?: boolean;
};
export const projectData: Project[] = [
  {
    title: "Wild Oasis App",
    description:
      "A web app for booking cabin rentals with real-time availability.",
    imageUrl: "/Tech/WO.png",
    projectLink: "https://github.com/AceOne4/wildoasis-app",
  },
  {
    title: "AceSchool Dashboard",
    description:
      "A school management system for grades, attendance, and communication.",
    imageUrl: "/Tech/AS.png",
    projectLink: "https://github.com/AceOne4/next-dashboard-ui",
  },
  {
    title: "CarePlus App",
    description:
      "A platform for managing healthcare appointments for patients and administrators.",
    imageUrl: "/Tech/CP.png",
    projectLink: "https://github.com/AceOne4/CarePlus",
  },
  {
    title: "E-commerce App",
    description:
      "An e-commerce platform for managing favorites, shopping carts, and orders.",
    imageUrl: "/Tech/EC.png",
    projectLink: "https://github.com/AceOne4/E-comarce",
  },
  {
    title: "Awward",
    description:
      "Awward is a gaming app with great visuals and smooth animations using GSAP. It offers a fun experience for all ages",
    imageUrl: "/Tech/AW.png",
    projectLink: "https://github.com/AceOne4/Awward",
  },
  {
    title: "New Giza Project",
    description: "A project showcasing the New Giza development.",
    imageUrl: "/NewGiza/1.png",
    useSwiper: true,
  },
];

export const images = [
  {
    src: "/NewGiza/1.png",
    title: "New Giza Overview",
    description: "An overview of the New Giza development.",
  },
  {
    src: "/NewGiza/2.png",
    title: "Park Villa",
    description: "A view of the Park Villa in New Giza.",
  },
  {
    src: "/NewGiza/3.png",
    title: "Standard Townhouse",
    description: "A standard townhouse in New Giza.",
  },
  {
    src: "/NewGiza/4.png",
    title: "Deluxe Townhouse",
    description: "A deluxe townhouse in New Giza.",
  },
  {
    src: "/NewGiza/5.png",
    title: "Goldcliff Villa",
    description: "The Goldcliff Villa in New Giza.",
  },
  {
    src: "/NewGiza/6.png",
    title: "Goldcliff Villa",
    description: "Another view of the Goldcliff Villa.",
  },
  {
    src: "/NewGiza/7.png",
    title: "Cliffside",
    description: "A view of the Cliffside area in New Giza.",
  },
  {
    src: "/NewGiza/8.png",
    title: "Cliffside",
    description: "Another view of the Cliffside area.",
  },
  {
    src: "/NewGiza/10.png",
    title: "TownHouse Loft",
    description: "A loft in the TownHouse area of New Giza.",
  },
  {
    src: "/NewGiza/11.png",
    title: "TownHouse Loft",
    description: "Another view of the TownHouse loft.",
  },
  {
    src: "/NewGiza/12.png",
    title: "RT-12",
    description: "A view of the RT-12 area in New Giza.",
  },
  {
    src: "/NewGiza/13.png",
    title: "RT-10",
    description: "A view of the RT-10 area in New Giza.",
  },
  {
    src: "/NewGiza/15.png",
    title: "RT-10",
    description: "Another view of the RT-10 area.",
  },
  {
    src: "/NewGiza/16.png",
    title: "RT-09",
    description: "A view of the RT-09 area in New Giza.",
  },
  {
    src: "/NewGiza/18.png",
    title: "RT-09",
    description: "Another view of the RT-09 area.",
  },
  {
    src: "/NewGiza/19.png",
    title: "RT-08",
    description: "A view of the RT-08 area in New Giza.",
  },
  {
    src: "/NewGiza/21.png",
    title: "RT-08",
    description: "Another view of the RT-08 area.",
  },
  {
    src: "/NewGiza/22.png",
    title: "Jade villa",
    description: "Type Two Jade villa in New Giza.",
  },
  {
    src: "/NewGiza/23.png",
    title: "Jade villa",
    description: "Type Three Jade villa in New Giza.",
  },
  {
    src: "/NewGiza/24.png",
    title: "Jade villa",
    description: "Type One Jade villa in New Giza.",
  },
];

export const skills = [
  // Tech skills
  { title: "React.js", level: 90 },
  { title: "Next.js", level: 85 },
  { title: "Tailwind CSS", level: 80 },
  { title: "GSAP", level: 70 },
  { title: "MongoDB", level: 75 },
  { title: "Mongoose", level: 70 },
  { title: "RESTful API", level: 85 },
  { title: "Node.js", level: 80 },
  // Civil skills
  { title: "AutoCAD", level: 75 },
  { title: "Revit", level: 80 },
  { title: "SAP2000", level: 70 },
  { title: "ETABS", level: 65 },
  // Soft skills
  { title: "Communication", level: 95 },
  { title: "Teamwork", level: 90 },
  { title: "Problem-solving", level: 85 },
  { title: "Time Management", level: 80 },
];
