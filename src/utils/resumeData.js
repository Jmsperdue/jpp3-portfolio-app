import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Resume from "../assets/files/James_Perdue_Resume_APR_2022.pdf";
import { portfolioImages } from "./portfolioImages";
import {
  AssignmentOutlined,
  Devices,
  Language,
  WebOutlined,
  YouTube,
  AccountBalance,
} from "@mui/icons-material/";

export default {
  name: "James Pierre Perdue III",
  title: "Software Engineer",

  birthday: "21 May 1988",
  email: "jmsperdue@gmail.com",
  location: "Las Vegas, Nevada",
  phone: "702 755 7790",
  socials: {
    Facebook: {
      link: "https://facebook.com/jmsperdue",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    LinkedIn: {
      link: "https://linkedin.com/in/jpp3/",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/Jmsperdue",
      text: "My GitHub",
      icon: <GitHubIcon />,
    },
  },

  resume: Resume,

  about:
    "Software Engineer with proven academic excellence, professional leadership experience, and longevity. Lifelong learner driven to stay abreast of emerging technologies and solve challenging problems.  \n\nSeeking Software Engineering opportunity to leverage and further develop skill set and make a positive impact.\n\nFormer Marine with over ten years of Pawn and Credit Constraint Financing experience. When I'm not coding I enjoy going to concerts, reading, working out, socializing/rehoming dogs, and spending time with my family.",

  experiences: [
    {
      institute: "United States Marine Corps - Camp Pendleton, CA",
      title: "3043 Supply Admin",
      date: "August 2006 - May 2008",
      description:
        "• Responsible for Ground Supply Administration and Operations.\n• Data entry, wholesale supply accounting, auditing, warehouse, cataloging, maintain custody records, and report consolidation and reconciliation.\n• Attached to an infantry unit in California we had to be ready to deploy at any moment.\n• Maintained cross platform reports.",
    },
    {
      institute: "EZPawn - Las Vegas, NV and Austin, TX",
      title: "Master Pawnbroker, General Manager",
      date: "August 2008 - December 2018",
      description:
        "• Responsible for daily operations of the store and providing excellent customer service.\n• Communicating ideas from upper management and team members.\n• Lead new hire orientations and train new team members. Experience in adhering to local and federal regulations.\n• Inventory audit, maintenance, shrink minimization, and work from Profit and Loss Statements to maximize company profits.",
    },
    {
      institute: "Clark County School District - Las Vegas, NV",
      title: "Substitute Teacher",
      date: "January 2020 - March 2020",
      description:
        "• Provided instruction and managed classroom environment in absence of regular teacher.\n• Adhered to Lesson Plans and increased understanding of new ideas.\n• Privately tutored junior high and high school students in core math to help supplement curriculum.",
    },
    {
      institute: "Paradigm IoT - Las Vegas, NV",
      title: "Software Engineer Intern ",
      date: "January 2022 - March 2022",
      description:
        "• Implemented features for various applications in Java, PHP, and Python.\n• Wrote elegant, self-documenting code, legible and palatable for other developers.\n• Designed embedded systems software in collaboration with designers for clean interfaces and intuitive interactions and experiences.",
    },
  ],

  education: [
    {
      title: "AA, Associate of Arts ",
      institute: "College of Southern Nevada, Las Vegas",
      date: "December 2004 - December 2018",
      description: "Presidents List and Deans List in final year",
    },
    {
      title: "BS, Computer Science",
      institute: "University of Nevada, Las Vegas",
      date: "December 2018 - December 2021",
      description: "GPA 3.36",
    },
  ],
  services: [
    {
      title: "Software Development",
      description:
        "I have built a few personal projects with Python, Java, and C++",
      icon: <Devices />,
    },
    {
      title: "Web-App Developer",
      description:
        "New to the world of web technologies, but looking forward to learning as much as I can.",
      icon: <WebOutlined />,
    },
    {
      title: "Adapt and Overcome",
      description:
        "Failure is part of the process and it does not define us, but rather it is what we do when we fail that defines us.",
      icon: <AccountBalance />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "JavaScript", "Bootstrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["Java", "Python", "C++", "PHP", "MySQL"],
    },
    {
      title: "CONCEPTS & METHODOLOGIES",
      description: [
        "OOP",
        "Machine Learning",
        "Objective",
        "Forward Thinker",
        "Strong Communication Skills",
      ],
    },
    {
      title: "SOURCE CONTROL & VIRTUALIZATION",
      description: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Docker",
        "VirtualBox",
        "Parallels",
      ],
    },
  ],
  projects: [
    {
      tag: "Quorum",
      images: [...portfolioImages.quorum.geomap],
      caption: "Accessible Geographic Map for Quorum Language",
      title: "Accessible Geographic Mapping Application",
      description: "The Quorum programming language has features for reading data and outputting it in chart form. Our goal is to add an accessible geographic map of the United States to Quorum’s standard data science library. The user will be able to apply color to each state on the map based on data or explicit input. In addition to this, we will include some basic accessibility features, such as allowing information to be spoken aloud from a screen reader program and navigating the cells of the map using basic keyboard input.",
      links: [
        {
          link: "https://quorumlanguage.com/",
          icon: <Language />,
        },
      ],
    },
    {
      tag: "Python",
      images: [...portfolioImages.python.mlpClassifier],
      caption: "Made on GoogleColab",
      title: "Multi-Layer Perceptron Classifier to detect forged banknotes",
      description: "The Goal of our model is to take the attributes and properly seperate forged bank notes from genuine ones.",
      links: [
        {
          link: "https://github.com/Jmsperdue/machineLearningNoteBooks/blob/MultiLayerPerceptron/Ast6.ipynb",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Python",
      images: [...portfolioImages.python.mlpRegressor],
      caption: "Made on GoogleColab",
      title: "Multi-Layer Perceptron Regressor to predict Gas Mileage",
      description: "The goal is to train both models to accurately predict MPG off of the distinct attributes of the car.",
      links: [
        {
          link: "https://github.com/Jmsperdue/machineLearningNoteBooks/blob/multiLayerPerceptronRegressor/ast5.ipynb",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "Java",
      images: [...portfolioImages.java.espresso],
      caption: "Compiler Construction",
      title: "The Espresso Compiler Project",
      description: "Gained practical experience working in existing code both independently and in groups while completing an unfinished compiler for a “simplified” version of Java. To maintain academic honesty code can be presented upon request.",
      links: [
        {
          link: "http://www.egr.unlv.edu/~matt/teaching/CSC460/Espresso.pdf",
          icon: <Language />,
        },
      ],
    },
  ],
  
};
