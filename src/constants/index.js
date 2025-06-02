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

import nat from "../assets/companies/nat.png"
import eu from "../assets/companies/eu.jpg"
import dat from "../assets/companies/dat.jpg"
import instructor from "../assets/companies/instructor.png"
import facialRecognitionCnn from "../assets/projects/facialRecognitionCnn.png"
import transformerEncoder from "../assets/projects/transformerEncoder.png"
import raye from "../assets/projects/raye.png"
import pr from "../assets/projects/pr.png"
import chatbot from "../assets/projects/chatbot.png"
import rnn from "../assets/projects/rnn.png"
import cnn from "../assets/projects/cnn.png"
import financeSystem from "../assets/projects/financeSystem.png"
import arbitrage from "../assets/projects/arbitrage.png"
import svm from "../assets/projects/svm.png"

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
    title: "Data Science Instructor",
    company_name: "Self-Employed",
    company_link: "https://m-affan-nazir.github.io/", // Replace with actual URL
    icon: instructor, // Ensure this icon is imported or defined
    iconBg: "white", // Adjust color as needed
    date: "January 2025 – April 2025",
    points: [
      "Delivered 20+ hours of hands-on Python fundamentals covering functions, lists, tuples, and control structures.",
      "Guided algorithmic problem-solving with loops and modular functions to develop coding solutions.",
      "Taught Pandas techniques for loading, filtering, transforming, and cleaning DataFrames.",
      "Covered data preprocessing best practices—normalization, encoding, and handling missing values.",
      "Led interactive visualization sessions using Matplotlib and Plotly to illustrate data insights.",
      "Provided one-on-one scikit-learn instruction on linear, polynomial, logistic regression, and classification evaluation."
    ],
    technologies: [
      technologies.python,
      technologies.scikitlearn,
      technologies.pandas,
      technologies.pyplot,
      technologies.plotly,
      technologies.jupyter
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "NeurAlberta Tech",
    company_link: "https://www.neuralberta.tech/", // Replace with actual URL
    icon: nat, // Ensure this icon is imported or defined
    iconBg: "black", // Adjust color as needed
    date: "September 2024 – January 2025",
    points: [
      "Developed responsive NAT-Portal interfaces using React and TypeScript for NatHacks 2024, enhancing the official website and portal to support over 100 participants and ensure a seamless user experience.",
      "Implemented 5 custom hooks to streamline data flow across 15+ components, enhancing application performance by 20% and reducing code duplication by 30%.",
      "Maintained and optimized Strapi CMS, reducing load times and improving content updates for 100+ users.",
      "Championed consistent use of Git workflows across the development team, resulting in improved code integrity.",
    ],
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.strapi,
      technologies.git,
    ],
  },
  {
    title: "Technology Grant Winner",
    company_name: "Edmonton Unlimited",
    company_link: "https://www.edmontonunlimited.com/", // Replace with actual URL
    icon: eu, // Ensure this icon is imported or defined
    iconBg: "#9c39ed", // Adjust color as needed
    date: "May 2024 – August 2024",
    points: [
      "Selected for $15,000 technology grant to develop an innovative retail solution.",
      "Conducted interviews with 40+ retail managers and produced a comprehensive Market Analysis Document, leveraging Lean Canvas, SWOT, SAM/TAM/TOM frameworks, and market segmentation techniques to identify three major operational inefficiencies for targeted improvement.",
      "Engineered a high-performance mobile application using TypeScript, React Native, and SQLite. Designed ER diagrams for enhanced data retrieval, and integrated react-native-ml-kit for on-device OCR receipt scanning, streamlining user workflows and increasing user adoption by recruiting 10 active beta testers.",
    ],
    technologies: [
      technologies.typescript,
      technologies.reactNative,
      technologies.sqlite,
      technologies.mlKit,
    ],
  },
  {
    title: "LLM Quality Assurance Specialist",
    company_name: "Data Annotation Tech",
    company_link: "https://www.dataannotationtech.com/", // Replace with actual URL
    icon: dat, // Ensure this icon is imported or defined
    iconBg: "black", // Adjust color as needed
    date: "April 2024 – September 2024",
    points: [
      "Evaluated 500+ generative AI code outputs — dry-running Python, JavaScript, and C++ snippets and gave feedback that boosted model accuracy.",
      "Evaluated RAG models’ code completions — uploaded incomplete codebases, judged outputs against fine-grained criteria, benchmarked multiple models, and supplied corrected code for model learning."
    ],
    technologies: [
      technologies.python,
      technologies.javascript,
      technologies.cpp
    ],
  },
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
    name: "Facial Recognition CNN",
    description:
      "A deep learning model built with Python, Keras, and TensorFlow to identify 138 facial landmarks with ±3 pixels accuracy. Utilizes a 10-layer convolutional architecture, max pooling, batch normalization, and LSTM for pattern recognition.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Keras",
        color: "purple-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
    ],
    image: facialRecognitionCnn,
    source_code_link: "https://github.com/M-Affan-Nazir/facial-landmark-deep-cnn",
  },
  {
    name: "Dynamic Currency Arbitrage Engine",
    description:
      "Engineered a C++ arbitrage system using libcurl for API integration and nlohmann::json for data parsing. Implemented advanced graph structures with Dijkstra's and Bellman-Ford Algorithm and optimized data handling with HashMaps and custom Min Priority Queues, resulting in significant performance improvements and a 1% increase in real-world arbitrage gains",
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
        name: "Dijkstra Algorithm",
        color: "blue-text-gradient",
      },
    ],
    image: arbitrage,
    source_code_link: "https://github.com/M-Affan-Nazir/arbitrage-engine", //to be filled
  },
  {
    name: "BrainWave SVM: Real-Time Mental State Detection",
    description:
      "Participated in NAT Hackathon 2024 by developing a real-time mental state detection system using EEG signals. Collected and processed 20 brainwave frequencies, identified significant features with Welch’s T-Test, and trained an SVM model with a 90% accuracy rate.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "SVM",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
    ],
    image: svm,
    source_code_link: "https://github.com/M-Affan-Nazir/brain-wave-svm",
  },
  {
    name: "Transformer Encoder",
    description:
      "Implemented a Transformer Encoder using Python and PyTorch, featuring tokenization, multi-head attention, and positional encoding. Developed a classification model with improved accuracy over traditional RNNs.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
    ],
    image: transformerEncoder,
    source_code_link: "https://github.com/M-Affan-Nazir/transformer-encoder",
  },
  {
    name: "Global Debates Mobile App",
    description:
      "A social media mobile application built with the MERN stack. Features a React Native front-end and a Node.js, Express, Socket.IO, and MongoDB back-end hosted on a VPS, enabling CRUD operations and real-time data transfer.",
    tags: [
      {
        name: "React Native",
        color: "light-blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: raye,
    source_code_link: "https://github.com/M-Affan-Nazir/raye-network",
  },
  {
    name: "Polynomial Regressor & Logistic Classifier",
    description:
      "Developed machine learning models using stochastic AdaGrad and mini-batch gradient descent to optimize MSE and CCE cost functions for regression and classification tasks.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "Optimization",
        color: "orange-text-gradient",
      },
      {
        name: "Regression",
        color: "blue-text-gradient",
      },
    ],
    image: pr,
    source_code_link: "https://github.com/M-Affan-Nazir/polynomial-logistic-regression-classifier",
  },
  {
    name: "Human-Like Chatbot",
    description:
      "Built a Seq2Seq model with TensorFlow and Python using 400 LSTM units and a vector size of 50. Implemented an attention mechanism to generate coherent text responses, achieving 93% accuracy on the Cornell Movie Dataset.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "LSTM",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "purple-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/M-Affan-Nazir/seq2seq-chatbot",
  },
  {
    name: "Advanced Stock Prediction",
    description:
      "Developed a Recurrent Neural Network using Python, TensorFlow, and Pandas for time series analysis. The model features 4 layers with 200 LSTM units, achieving 95% accuracy on the test dataset.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "RNN",
        color: "green-text-gradient",
      },
    ],
    image: rnn,
    source_code_link: "https://github.com/M-Affan-Nazir/time-series-prediction-deep-rnn",
  },
  {
    name: "Cancer Detection CNN",
    description:
      "Created a Convolutional Neural Network with Python and TensorFlow, featuring 2 convolutional layers and 2 max-pooling layers. The model achieved 98% accuracy on the test dataset for cancer detection.",
    tags: [
      {
        name: "Python",
        color: "yellow-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
    ],
    image: cnn,
    source_code_link: "https://github.com/M-Affan-Nazir/binary-image-classifier-deep-cnn",
  },
  {
    name: "Finance Management System",
    description:
      "Developed a CLI application in C++ with CRUD operations and binary file management. Additionally, built a visual analytics tool using C# and the .NET framework to display line charts and bar graphs.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "purple-text-gradient",
      },
      {
        name: "CLI",
        color: "orange-text-gradient",
      },
    ],
    image: financeSystem,
    source_code_link: "https://github.com/M-Affan-Nazir/finance-management-portal",
  },


];

const links = {
  github: "https://github.com/M-Affan-Nazir",
  linkedin: "https://www.linkedin.com/in/affan-nazir/",
  resume: "",
  personalEmail: "dm.affan@outlook.com",
  schoolEmail: "mnazir1@ualberta.ca",
};

const leadership = [
  {
    title: "Vice President",
    company_name: "Society for Artificial Intelligence Literacy (SAIL)",
    company_link: "https://societyforailiteracy.com/", // Replace with actual URL
    icon: sail, // Ensure this icon is imported or defined
    iconBg: "black", // Adjust color as needed
    date: "April 2025 - Present",
    points: [
    "Organized and coordinated seminars to introduce students from technical and non technical backgrounds towards AI concepts",
    // "Covered concepts like Neural Networks, Large Language Models and Image Recognition",
    // "Co-ordinated with expert speakers including Professors and Industry-Professionals to ensure impactful presentations"
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
    date: "January 2019 - January 2020",
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
    date: "January 2018 - January 2019",
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