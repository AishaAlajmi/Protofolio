import Bena from '../images/photo_2024-08-06_18-56-35.jpg';
import Bainah from '../images/photo_2024-08-06_18-01-27.jpg';
import Pro from '../images/photo_2024-08-06_18-17-03.jpg';
import Techlad from '../images/Screenshot (265).png';
import face_recognition from '../images/SLS-facial-2023.png';
import IfsahHomePage from '../images/IfsahHomePage.png';
import Anis from '../images/Anis.png';
import Ifsah2 from '../images/upload files to generate your finincial statmen4t.png';
import Ifsah3 from '../images/upload files to generate your finincial statment.png';
import Ifsah4 from '../images/upload files to generate your finincial statment2.png';
import Ifsah5 from '../images/upload files to generate your finincial statment3.png';
import Ifsah6 from '../images/Login.png';

import Ach from '../images/Ach.png';
import Core from '../images/Core.png';
import HomeM from '../images/HOME - M.png';
import Committees from '../images/committees.png';
import Musaned from '../images/screencapture-localhost-3000-2024-07-11-11_04_51.png';
import Musaned2 from '../images/screencapture-localhost-3000-QFeedback-2024-07-11-11_06_11.png';
import Musaned3 from '../images/screencapture_localhost_3000_Leader_board_2024_07_11_11_06_45.png';
import Musaned4 from '../images/screencapture_localhost_3000_Student_HomePage_2024_07_11_11_02_32.png';
import Musaned5 from '../images/Screenshot (938).png';
import Musaned6 from '../images/chat.png';
import TechTrend from '../images/TechTrend.png';
import TechTrend2 from '../images/TechTrends.png';
import jsTechTrends from '../images/jsTechTrends.png';
import SigTechTrends from '../images/SigTechTrends.png';
import FluTechTrends from '../images/FluTechTrends.png';
import artTechTrends from '../images/artTechTrends.png';
import DisTechTrends from '../images/DisTechTrends.png';
import FCIT from '../images/FCIT.png';
import FCIT4 from '../images/14.png';
import FCIT5 from '../images/15.png';
import FCIT6 from '../images/16.png';
import FCIT7 from '../images/17.png';
import FCIT1 from '../images/11.png';
import FCIT2 from '../images/12.png';
import FCIT3 from '../images/13.png';
import FCIT8 from '../images/18.png';
import Cus from '../images/User_segmentation_1_179e76be0e.png';
import vercel from '../images/Vercel-Logo-SVG_006.svg';
import Health from '../images/Health.jpg';
import Eduthon from '../images/Eduthon.jpg';
import Tersuies from '../images/Tersuies.jpg';
import Aithin from '../images/Aithin.jpg';

export const achievements = [
  {
    title: "Eduthon Hackathon",
    date: "2024",
    description:
      "Won 2nd place at King Khalid University's Eduthon Hackathon among 30 teams. We developed Musanid, an AI-powered educational system that generates questions based on course learning objectives (CLOs) and student performance. It provides personalized feedback, enables interactive competitions, and helps improve understanding while enhancing competitiveness and academic performance.",
    image: Eduthon,
  },
  {
    title: "Innovate in Health Hackathon",
    date: "2024",
    description:
      "Won 5th place out of 500 teams. Honored at the Global Health Exhibition by the Minister of Health, Mr. Fahad Al-Jalajel, for an innovative healthcare solution.",
    image: Health,
  },
  {
    title: "Tourism Hackathon",
    date: "2024",
    description:
      "Won 3rd place during TechHub2024. Recognized by the Vice President of the University and Dean of the Computing Faculty for a solution that highlights cultural and heritage tourism.",
    image: Tersuies,
  },
  {
    title: "AI in Project Management Hackathon",
    date: "2024",
    description:
      "Won 3rd place for demonstrating the use of AI in project management to improve project efficiency, streamline workflows, and support data-driven decision-making. Our solution utilized AI algorithms to analyze project data, predict potential bottlenecks, and provide recommendations to enhance project outcomes.", image: Aithin,
  },
];

export const projects = [
  {
    id: 4,
    title: "Ifsah",
    description:
      "Ifsah is an accounting solution that enhances financial transparency by ensuring accurate disclosures of transactions with related parties, customers, and suppliers. It automates financial statement generation, ensures compliance with built-in alerts and approvals, and features a smart digital assistant to support accountants in making informed decisions and improving company performance.",
    images: [IfsahHomePage, Ifsah6, Ifsah2, Ifsah3, Ifsah4, Ifsah5],
    tags: ["HTML", "CSS", "JS", "PHP"],
    category: "web app",
  },
  {
    id: 11,
    title: "IEEE Website",
    description:
      "IEEE Website is a modern, engaging platform designed for the IEEE community. The home page features a dynamic banner and easy navigation to quickly access the latest news and events. A dedicated committees section provides detailed insights into each group’s role, while the core team area highlights key members and their contributions. An achievements area showcases IEEE milestones and success stories—all wrapped in a clean, responsive design for a seamless experience on any device.",
    images: [Ach, Core, HomeM, Committees],
    tags: ["React", "JS"],
    category: "web app",
  }, {
    id: 1,
    title: "Musaned",
    description:
      "Musaned is an educational system that generates questions based on the subject learning objectives (CLOs) and the students’ level using artificial intelligence. Students’ performance in the training questions is analyzed to provide recommendations and feedback that help them improve their understanding of the material. It also allows students to compete in solving questions quickly and accurately through interactive competitions, which enhances the competitiveness and enjoyment of the subject in addition to raising the academic level.",
    images: [Musaned, Musaned4, Musaned6, Musaned5, Musaned2, Musaned3],
    tags: [
      "React js",
      "Python",
    ],
    category: "web app",

  },
  {
    id: 12,
    title: "TechTrends",
    description:
      "TechTrends is a mobile app designed to serve as a hub for developers, tech enthusiasts, and learners to access high-quality knowledge, resources, and discussions about the latest trends in the tech world. The app offers a user-friendly interface where users can sign up or log in to access a wide variety of tech-related content, including articles, tutorials, and discussions. TechTrends provides a seamless experience for users to stay informed and engaged with the latest advancements in technology.",
    images: [TechTrend, TechTrend2, jsTechTrends, SigTechTrends, FluTechTrends, artTechTrends, DisTechTrends],
    tags: ["Figma"],
    category: "UI/UX Design",
  }, {
    id: 12,
    title: "FCIT Emergency Center",
    description:
      "The FCIT Emergency Center app is designed to help students and faculty quickly report emergencies within the university campus. The app provides an easy-to-use interface where users can sign up, login, and report emergencies by providing essential details like location and description. It allows users to view and delete previous reports, keeping the emergency management process smooth and efficient.",
    images: [FCIT, FCIT1, FCIT2, FCIT3, FCIT4, FCIT5, FCIT6, FCIT7, FCIT8],
    tags: ["Figma"],
    category: "UI/UX Design"
  },
  {
    id: 2,
    title: "Anis",
    description:
      "Anis is an AI-powered intelligent character designed to improve psychological therapy. It analyzes the patient's psychological and medical data, as well as their social media activity (with the patient's consent), to provide personalized consultations that predict psychological crises before they occur, enabling early intervention and appropriate support. Anis enhances communication between patients and specialists, raises patients' awareness of their condition, improving the quality of care while reducing costs and the number of therapy sessions.",
    image:
      Anis,
    tags: ["Figma"],
    category: "UI/UX Design"

  },
  {
    id: 9,
    title: "Bena",
    description:
      "A company that aims to use computing to build a sustainable society, by developing and using computers and software in responsible ways, with a focus on environmental and economic sustainability, solving communication problems, and disposing of computing components properly.",
    image: Bena,

    tags: [
      "Php",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    category: "web app",

  },

  {
    id: 0,
    title: "Bainah",
    description:
      "Website of a law firm providing legal services in the Kingdom of Saudi Arabia.",
    image:
      Bainah,
    tags: ["Php",
      "JavaScript",
      "HTML",
      "CSS"],
    category: "web app",
  },
  {
    id: 10,
    title: "Techlad",
    description:
      "Techlad helps you open doors with advanced technology, as we replace plastic cards with a digital card on the mobile phone, which uses the NFC technology found in smartphones.",
    image:
      Techlad,
    tags: ["React js", "Django", "HTML", "CSS"],
    category: "web app",

  }, ,
  {
    id: 13,
    title: "Customer Segmentation and Loyalty Classification",
    description:
      "This project focuses on analyzing customer behavior to classify customers based on their spending patterns and loyalty levels. By leveraging data mining techniques, we classify customers into categories such as 'gold', 'silver', 'elite', and 'occasional' based on factors like income, spending score, purchase frequency, and membership years. The project uses a classification model to predict loyalty levels and spending behavior, helping businesses develop targeted marketing strategies and increase sales.",
    image:
      Cus,
    tags: ["Python", "Machine Learning", "Data Mining"],
    category: "machine learning",
  },
  {
    id: 8,
    title: "Face Recognition",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      face_recognition,

    tags: ["Python", "Keras", "TensorFlow"],
    category: "machine learning",
  }
];

export const Bio = {
  name: "Aisha Alajmi",
  roles: [
    "Web Developer",
    "UI/UX Designer",
  ],
  description:
    "A fast learner with a positive mindset, I am a motivated and adaptable person who enjoys solving problems. I'm always open to new opportunities that help me grow both personally and professionally. I am dedicated to delivering high-quality work and contributing to team success.",
  github: "https://github.com/AishaAlajmi",
  resume:
    "https://drive.google.com/file/d",
  linkedin: "https://www.linkedin.com/in/Aisha-Alajmi/",
  twitter: "https://twitter.com/Aiisha_h17",
};

export const skills = [

  {
    title: "Web Development",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Material UI",
        image:
          "data:image/png;base64,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",
      },


      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PHP",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
    ],
  },

  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Vercel",
        image: vercel,
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Figma",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
    ],
  },
];
