import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  figma,
  github2,
  vite,
  bootstrap,
  php,
  npm,
  pinterest,
  shadcn,
  mathwork,
  eduskill,

  niyoghub,
  cps,
  filheim,
  sycip,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Clean Code", description: "I write clean, maintainable code that’s built to last—combining efficiency with readability for scalable, collaborative solutions.", icon: c },
  { title: "Responsive Design", description: "I build responsive designs that adapt flawlessly across all devices, ensuring seamless user experiences from desktop to mobile.", icon: cpp },
  { title: "User-centered", description: "I design with empathy, crafting intuitive digital experiences that prioritize real user needs—because great design solves problems.", icon: python },
  { title: "Performance", description: "I design and develop user-centered experiences—where performance meets intuition, and enhances usability.", icon: java },
];

export const technologies = [
  // { name: "HTML 5", icon: html },
  // { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
  { name: "Figma", icon: figma },
  { name: "GitHub", icon: github2 },
  { name: "Vite", icon: vite }, 
  { name: "Bootstrap", icon: bootstrap },
  // { name: "Visual Studio Code", icon: vs },
  { name: "PHP", icon: php },
  { name: "NPM", icon: npm },
  { name: "Pinterest", icon: pinterest },
  { name: "Shadcn", icon: shadcn },
];

export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "NiyogHub",
    description:
      "A web and mobile application designed to connect coconut farmers in Quezon Province with the Philippine Coconut Authority (PCA), leveraging AI to enhance communication, support, and promote sustainable growth in the coconut agriculture sector",
    tags: [
      { name: "React & React Native", color: "blue-text-gradient" },
      { name: "Roboflow", color: "green-text-gradient" },
      { name: "GPT-4 & Whisper", color: "pink-text-gradient" },
      { name: "Google Maps & Leaflet", color: "pink-text-gradient" },
      { name: "MERN", color: "yellow-text-gradient" },
    ],
    image: niyoghub,
    source_code_link: "https://github.com/nikkibernardo/niyoghub-webuser-frontend/tree/main",
  },
  {
    name: "Corporate Planning System (CPS)",
    description:
      "A web application designed to streamline the corporate planning process, enabling efficient management of projects, resources, and timelines.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "C# .NET", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    image: cps,
    source_code_link: "https://github.com/nikkibernardo/filheim-frontend",
  },
  {
    name: "Filheim",
    description:
      "A web application designed to showcase luxurious cabinetry, providing a minimalist and elegant user interface for browsing and purchasing high-end cabinetry products.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwing CSS", color: "green-text-gradient" },
      { name: "Strapi", color: "pink-text-gradient" },
      { name: "Google Workspace", color: "green-text-gradient" },
      { name: "NameCheap", color: "pink-text-gradient" },
    ],
    image: filheim,
    source_code_link:
      "https://github.com/nikkibernardo/filheim-frontend",
  },
  {
    name: "SyCip Builders",
    description:
      "A website designed to showcase the portfolio of SyCip Builders, a construction company, providing an elegant and user-friendly interface for potential clients.",
    tags: [
      { name: "webflow", color: "blue-text-gradient" },
    ],
    image: sycip,
    source_code_link: "https://www.sycipbuilders.com/",
  },
];
