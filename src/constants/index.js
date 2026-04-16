import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
} from "../assets";

import nat from "../assets/companies/nat.jpeg"
import eu from "../assets/companies/eu.jpg"
import dat from "../assets/companies/dat.jpg"
import instructor from "../assets/companies/instructor.png"
import space_copy from "../assets/companies/space_copy.png"
import facialRecognitionCnn from "../assets/projects/facialRecognitionCnn.png"
import transformerEncoder from "../assets/projects/transformerEncoder.png"
import raye from "../assets/projects/raye.gif"
import raye_backend from "../assets/projects/raye_backend.gif"
import eventease from "../assets/projects/eventease.gif"
import pr from "../assets/projects/pr.png"
import chatbot from "../assets/projects/chatbot.png"
import rnn from "../assets/projects/rnn.png"
import cnn from "../assets/projects/cnn.png"
import financeSystem from "../assets/projects/financeSystem.png"
import arbitrage from "../assets/projects/arbitrage.gif"
import svm from "../assets/projects/svm.png"
import heatmap from "../assets/projects/heatmap.png"

import sail from "../assets/leadership/sail.png"
import uais from "../assets/leadership/uais.jpeg"
import lgs from "../assets/leadership/lgs.jpeg"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Engineer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
    icon: creator,
  },
  {
    title: "Leader",
    icon: mobile,
  },
];

const technologiess = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const technologies = {
  typescript: {
    name: "TypeScript",
    textCol: "#FFFFFF",
    backCol: "#007ACC",
  },
  angular: {
    name: "Angular",
    textCol: "#FFFFFF",
    backCol: "#DD1B16",
  },
  githubActions: {
    name: "GitHub Actions",
    textCol: "#FFFFFF",
    backCol: "#171515",
  },
  nestjs: {
    name: "NestJS",
    textCol: "#FFFFFF",
    backCol: "#E0234E",
  },
  html: {
    name: "HTML",
    textCol: "#FFFFFF",
    backCol: "#f06529",
  },
  css: {
    name: "CSS",
    textCol: "#FFFFFF",
    backCol: "#264DE4",
  },
  javascript: {
    name: "JavaScript",
    textCol: "#FFFFFF",
    backCol: "#F0DB4F",
  },
  bootstrap: {
    name: "Bootstrap",
    textCol: "#FFFFFF",
    backCol: "#563D7C",
  },
  react: {
    name: "React",
    textCol: "#FFFFFF",
    backCol: "#61DBFB",
  },
  visualBasic: {
    name: "Visual Basic",
    textCol: "#FFFFFF",
    backCol: "#136099",
  },
  msSql: {
    name: "MS SQL",
    textCol: "#FFFFFF",
    backCol: "#A91D22",
  },
  aws: {
    name: "AWS",
    textCol: "#FFFFFF",
    backCol: "#FF9900",
  },
  python: {
    name: "Python",
    textCol: "#FFFFFF",
    backCol: "#FFD343",
  },
  matlab: {
    name: "MATLAB",
    textCol: "#FFFFFF",
    backCol: "#ED6B0F",
  },
  strapi: {
    name: "STRAPI",
    textCol: "#FFFFFF",
    backCol: "#563D7C",
  },
  git: {
    name: "GIT",
    textCol: "#FFFFFF",
    backCol: "black",
  },
  reactNative: {
    name: "React Native",
    textCol: "#FFFFFF",
    backCol: "darkblue",
  },
  sqlite: {
    name: "SQLite",
    textCol: "#FFFFFF",
    backCol: "orange",
  },
  mlKit: {
    name: "ML Kit",
    textCol: "Black",
    backCol: "Yellow",
  },
  cpp: {
    name: "C++",
    textCol: "White",
    backCol: "darkblue",
  },
  scikitlearn: {
    name: "Scikit-Learn",
    textCol: "White",
    backCol: "orange",
  },
  pandas: {
    name: "Pandas",
    textCol: "black",
    backCol: "white",
  },
  pyplot: {
    name: "Matplotlib",
    textCol: "white",
    backCol: "darkblue",
  },
  plotly: {
    name: "Plotly",
    textCol: "black",
    backCol: "lightblue",
  },
  jupyter: {
    name: "Jupyter Notebook",
    textCol: "black",
    backCol: "yellow",
  },
};

const experiences = [
  {
    title: "Machine Learning Research Intern",
    company_name: "Space Copy",
    company_link: "https://www.spacecopy.com/", // Replace with actual URL
    icon: space_copy, // Ensure this icon is imported or defined
    iconBg: "#040a14", // Adjust color as needed
    date: "June – September 2025",
    points: [
      "Worked on fault detection for Space Copy’s ISRU 3D printer, using AI to detect printing issues early and improve print quality.",
      "Researched techniques for automatic visual inspection of printed parts, and examined a method that can pin-point the exact location of defect on the printed object",
      "Studied strategies to analyze sensor data such as temperature readings, to predict nozzle over-heating and identify abnormal patterns, then wrote an internal report comparing approaches so the team could pick a direction."
    ],
    technologies: [
      // technologies.python
    ],
  },
  // {
  //   title: "Data Science Tutor",
  //   company_name: "Self-Employed",
  //   company_link: "https://m-affan-nazir.github.io/", // Replace with actual URL
  //   icon: instructor, // Ensure this icon is imported or defined
  //   iconBg: "white", // Adjust color as needed
  //   date: "January – April 2025",
  //   points: [
  //     "Taught 20+ hours of live Python, helping students move from basic syntax to using data structures and writing simple algorithms.",
  //     "Showed students how to clean and analyze data, make clear visualizations, and use beginner-friendly machine learning to solve prediction problems."
  //   ],
  //   technologies: [
  //     // technologies.python,
  //     // technologies.scikitlearn,
  //     // technologies.pandas,
  //     // technologies.pyplot,
  //     // technologies.plotly,
  //     // technologies.jupyter
  //   ],
  // },
  {
    title: "Software Engineer",
    company_name: "NAT",
    company_link: "https://networkforappliedtech.ca/", // Replace with actual URL
    icon: nat, // Ensure this icon is imported or defined
    iconBg: "#ff5caf", // Adjust color as needed
    date: "September – December 2024",
    points: [
      "Contributed to building the NatHacks 2024 website and portal, improving the UI design and streamlining the code for faster loading, while helping 100+ participants access event resources and registration smoothly."
    ],
    technologies: [
      // technologies.react,
      // technologies.typescript,
      // technologies.strapi,
      // technologies.git,
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Edmonton Unlimited",
    company_link: "https://www.edmontonunlimited.com/", // Replace with actual URL
    icon: eu, // Ensure this icon is imported or defined
    iconBg: "#8e4dff", // Adjust color as needed
    date: "May – August 2024",
    points: [
      "Won a $15,000 grant to build a software tool that helps busy adults and small local retailers track food and reduce waste",
      "Interviewed 40+ potential users to understand their biggest pain points, then built and launched a free Android app on the Play Store to help people cut organic waste and lower their carbon footprint.",
      ],
    technologies: [
      // technologies.typescript,
      // technologies.reactNative,
      // technologies.sqlite,
      // technologies.mlKit,
    ],
  },
  // {
  //   title: "LLM Quality Assurance Engineer",
  //   company_name: "Data Annotation Tech",
  //   company_link: "https://www.dataannotationtech.com/", // Replace with actual URL
  //   icon: dat, // Ensure this icon is imported or defined
  //   iconBg: "black", // Adjust color as needed
  //   date: "January 2024 – April 2024",
  //   points: [
  //     "Evaluated 500+ generative AI code outputs — dry-running Python, JavaScript, and C++ snippets and gave feedback that boosted model accuracy.",
  //     "Evaluated RAG models’ code completions — uploaded incomplete codebases, judged outputs against fine-grained criteria, benchmarked multiple models, and supplied corrected code for model learning."
  //   ],
  //   technologies: [
  //     // technologies.python,
  //     // technologies.javascript,
  //     // technologies.cpp
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
    {
    name: "Raye (Debates App)",
    description:
      "A full-stack mobile app where students join topic-based debate rooms and discuss ideas respectfully. Users can follow others, post opinions, and share posts — making it easy to explore different perspectives in one place. Built to support open, respectful conversations.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Cross Platform",
        color: "orange-text-gradient",
      },
    ],
    image: raye,
    source_code_link: "https://github.com/M-Affan-Nazir/raye-network",
  },
  {
    name: "Raye (Backend API)",
    description:
      "The server behind Raye. Developed to manage authentication, user profiles, debate rooms, posts, follows, and sharing. Allows real-time chat and live updates.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "purple-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "orange-text-gradient",
      },
       {
        name: "Express",
        color: "blue-text-gradient",
      }
    ],
    image: raye_backend,
    source_code_link: "https://github.com/M-Affan-Nazir/Raye-Server-Back-End",
  },
    {
    name: "EventEase (Lottery App)",
    description:
      "An Android App that helps organizers run fair event sign-ups. Organizers post events with details (location, photos, capacity), and users join the draw instead of racing for tickets. The app selects attendees at random, helping prevent ticket hoarding and reselling.",
    tags: [
      {
        name: "Java",
        color: "orange-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
       {
        name: "Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: eventease,
    source_code_link: "https://github.com/RISCVI-301/CMPUT301F25riscvi",
  },
  {
    name: "FX Arbitrage Engine",
    description:
      "A C++ software that watches real-time exchange rates across 27 currencies and flags potential arbitrage loops. Built for speed, it simulates trades and reports the estimated profit for each opportunity.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Graph",
        color: "orange-text-gradient",
      },
      {
        name: "Dijkstra",
        color: "blue-text-gradient",
      },
      {
        name: "Bellman-Ford",
        color: "green-text-gradient",
      }
    ],
    image: arbitrage,
    source_code_link: "https://github.com/M-Affan-Nazir/arbitrage-engine", //to be filled
  },
   {
    name: "EEG Excitement Detection",
    description:
      "A machine learning model that reads brainwave signals from a Muse headband and predicts whether someone is excited or neutral. Designed to support mental wellness by helping people notice when they’re getting emotionally activated, so they can pause and use calming techniques.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "orange-text-gradient",
      },
      {
        name: "SVM",
        color: "blue-text-gradient",
      },
      {
        name: "EEG Signals",
        color: "green-text-gradient",
      },
    ],
    image: svm,
    source_code_link: "https://github.com/M-Affan-Nazir/brain-wave-svm",
  },
  {
    name: "Edmonton Crash Analysis",
    description:
      "Analyzed Edmonton collision data (2010–2023) to understand where crashes happen most, how severe they are, and how weather and COVID affected crash rate. Trained a regression model to estimate expected collisions which can help understand risk patterns",
    tags: [
      { name: "Python", color: "yellow-text-gradient" },
      { name: "pandas", color: "blue-text-gradient" },
      { name: "regression", color: "orange-text-gradient" },
      { name: "Inference", color: "purple-text-gradient" }
    ],
    image: heatmap,
    source_code_link: "https://github.com/M-Affan-Nazir/edmonton-traffic-statistics",
  },
  // {
  //   name: "Facial Recognition CNN",
  //   description:
  //     "A deep learning model built with Python, Keras, and TensorFlow to identify 138 facial landmarks with ±3 pixels accuracy. Utilizes a 10-layer convolutional architecture, max pooling, batch normalization, and LSTM for pattern recognition.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "Keras",
  //       color: "purple-text-gradient",
  //     },
  //     {
  //       name: "TensorFlow",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "CNN",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: facialRecognitionCnn,
  //   source_code_link: "https://github.com/M-Affan-Nazir/facial-landmark-deep-cnn",
  // },
  // {
  //   name: "Transformer Encoder",
  //   description:
  //     "Implemented a Transformer Encoder using Python and PyTorch, featuring tokenization, multi-head attention, and positional encoding. Developed a classification model with improved accuracy over traditional RNNs.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "PyTorch",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Deep Learning",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: transformerEncoder,
  //   source_code_link: "https://github.com/M-Affan-Nazir/transformer-encoder",
  // },

  // {
  //   name: "Polynomial Regressor & Logistic Classifier",
  //   description:
  //     "Developed machine learning models using stochastic AdaGrad and mini-batch gradient descent to optimize MSE and CCE cost functions for regression and classification tasks.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "Optimization",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "Regression",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pr,
  //   source_code_link: "https://github.com/M-Affan-Nazir/polynomial-logistic-regression-classifier",
  // },
  // {
  //   name: "Human-Like Chatbot",
  //   description:
  //     "Built a Seq2Seq model with TensorFlow and Python using 400 LSTM units and a vector size of 50. Implemented an attention mechanism to generate coherent text responses, achieving 93% accuracy on the Cornell Movie Dataset.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "TensorFlow",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "LSTM",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "NLP",
  //       color: "purple-text-gradient",
  //     },
  //   ],
  //   image: chatbot,
  //   source_code_link: "https://github.com/M-Affan-Nazir/seq2seq-chatbot",
  // },
  // {
  //   name: "Advanced Stock Prediction",
  //   description:
  //     "Developed a Recurrent Neural Network using Python, TensorFlow, and Pandas for time series analysis. The model features 4 layers with 200 LSTM units, achieving 95% accuracy on the test dataset.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "TensorFlow",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "Pandas",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "RNN",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: rnn,
  //   source_code_link: "https://github.com/M-Affan-Nazir/time-series-prediction-deep-rnn",
  // },
  // {
  //   name: "Cancer Detection CNN",
  //   description:
  //     "Created a Convolutional Neural Network with Python and TensorFlow, featuring 2 convolutional layers and 2 max-pooling layers. The model achieved 98% accuracy on the test dataset for cancer detection.",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "yellow-text-gradient",
  //     },
  //     {
  //       name: "TensorFlow",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "CNN",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: cnn,
  //   source_code_link: "https://github.com/M-Affan-Nazir/binary-image-classifier-deep-cnn",
  // },
  // {
  //   name: "Finance Management System",
  //   description:
  //     "Developed a CLI application in C++ with CRUD operations and binary file management. Additionally, built a visual analytics tool using C# and the .NET framework to display line charts and bar graphs.",
  //   tags: [
  //     {
  //       name: "C++",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "C#",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: ".NET",
  //       color: "purple-text-gradient",
  //     },
  //     {
  //       name: "CLI",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: financeSystem,
  //   source_code_link: "https://github.com/M-Affan-Nazir/finance-management-portal",
  // },


];

const links = {
  github: "https://github.com/M-Affan-Nazir",
  linkedin: "https://www.linkedin.com/in/affan-nazir/",
  resume: "",
  personalEmail: "dm.affan@outlook.com",
  schoolEmail: "dm.affan@outlook.com",
};

const leadership = [
  {
    title: "Vice President",
    company_name: "Society for Artificial Intelligence Literacy (SAIL)",
    company_link: "https://societyforailiteracy.com/", // Replace with actual URL
    icon: sail, // Ensure this icon is imported or defined
    iconBg: "black", // Adjust color as needed
    date: "April 2025 - March 2026",
    points: [
    "Organized seminars to introduce students from technical and non technical backgrounds towards AI concepts",
    "Helped a small healthcare software startup build an AI-enabled portal for securely managing confidential patient data.",
    ]
  },
  {
    title: "Treasurer",
    company_name: "Undergraduate Artificial Intelligence Society (UAIS)",
    company_link: "https://uais.dev/", // Replace with actual URL
    icon: uais, // Ensure this icon is imported or defined
    iconBg: "white", // Adjust color as needed
    date: "April 2024 - March 2025",
    points: [
    "Handeled financial statements and bookkeeping to efficiently track incomming and outgoing funds",
    "Managed submission process for grant applications",
    "Oversaw Artificial Intelligence Projects to completion whilst ensuring timely access to necessary funds"
    ]
  },
  {
    title: "Vice President, Robotics Society",
    company_name: "Lahore Grammar School (LGS)",
    company_link: "https://lgsjt.edu.pk/", // Replace with actual URL
    icon: lgs, // Ensure this icon is imported or defined
    iconBg: "white", // Adjust color as needed
    date: "January 2022 - January 2023",
    points: [
    "Led students at the National Robotics Competition - competing against 30+ teams nationwide - and secured runner-up position",
    "Organized weekly workshops for intoducing students to Arduino Micro-Controller, C++, Python and Image Recognition",
    "Led students in developing multiple hands-on projects - such as an Autonomous Vehicle equipped with ultraSonic and infrared sensors, combat robots, and an air-quality sensing device"
    ]
  },
  {
    title: "Head Boy",
    company_name: "Lahore Grammar School (LGS)",
    company_link: "https://lgsjt.edu.pk/", // Replace with actual URL
    icon: lgs, // Ensure this icon is imported or defined
    iconBg: "white", // Adjust color as needed
    date: "January 2020 - January 2021",
    points: [
    "Lead student delegations to multiple Model United Nations and Parliamentary Debates",
    "Facilitated monthly training sessions to enhance students' presentation and argumentation skills",
    "Helped students prepare for their Cambridge IGCSE Examinations"
    ]
  },
  {
    title: "Vice Captain, House of Excellence",
    company_name: "Lahore Grammar School (LGS)",
    company_link: "https://lgsjt.edu.pk/", // Replace with actual URL
    icon: lgs, // Ensure this icon is imported or defined
    iconBg: "white", // Adjust color as needed
    date: "January 2019 - January 2020",
    points: [
    "Represented school at multiple events",
    "Tutored students in Math and Computer Science"
    ]
  },
];


export {
  services,
  technologiess as technologies,
  experiences,
  testimonials,
  projects,
  links,
  leadership,
};