import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Resume from "../assets/files/James_Perdue_Resume_APR_2022.pdf"
import {
    AssignmentOutlined,
    Devices,
    Language,
    WebOutlined,
    YouTube,
    AccountBalance,
  } from "@mui/icons-material/";

export default {
    name: 'James Pierre Perdue III',
    title: 'Software Engineer',

    birthday: '21 May 1988',
    email: 'jmsperdue@gmail.com',
    address: '123 Test St',
    phone: '702 755 7790',
    socials: {
        Facebook: {
            link: 'https://facebook.com/jmsperdue',
            text: 'My Facebook',
            icon: <FacebookIcon />,
        },
        Instagram: {
            link: 'https://instagram.com/saddy_d4ddy',
            text: 'My Instagram',
            icon: <InstagramIcon />,
        },
        LinkedIn: {
            link: 'https://linkedin.com/in/jpp3/',
            text: 'My LinkedIn',
            icon: <LinkedInIcon />,
        },
        GitHub: {
            link: 'https://github.com/Jmsperdue',
            text: 'My GitHub',
            icon: <GitHubIcon />,
        },
    },

    resume: Resume,

    about : "Software Engineer with proven academic excellence, professional leadership experience, and longevity. Lifelong learner driven to stay abreast of emerging technologies and solve challenging problems. \n\nSeeking Software Engineering opportunity to leverage and further develop skill set and make a positive impact.",
    
    experiences: [
        {
            institute: 'United States Marine Corps - Camp Pendleton, CA',
            title:'3043 Supply Admin',
            date: 'August 2006 - May 2008',
            description: '• Responsible for Ground Supply Administration and Operations.\n• Data entry, wholesale supply accounting, auditing, warehouse, cataloging, maintain custody records, and report consolidation and reconciliation.\n• Attached to an infantry unit in California we had to be ready to deploy at any moment.\n• Maintained cross platform reports.',
        },
        {
            institute: 'EZPawn - Las Vegas, NV and Austin, TX',
            title:'Master Pawnbroker, General Manager',
            date: 'August 2008 - December 2018',
            description: '• Responsible for daily operations of the store and providing excellent customer service.\n• Communicating ideas from upper management and team members.\n• Lead new hire orientations and train new team members. Experience in adhering to local and federal regulations.\n• Inventory audit, maintenance, shrink minimization, and work from Profit and Loss Statements to maximize company profits.',
        },
        {
            institute: 'Clark County School District - Las Vegas, NV',
            title:'Substitute Teacher',
            date: 'January 2020 - March 2020',
            description: '• Provided instruction and managed classroom environment in absence of regular teacher.\n• Adhered to Lesson Plans and increased understanding of new ideas.\n• Privately tutored junior high and high school students in core math to help supplement curriculum.',
        },
        {
            institute: 'Paradigm IoT - Las Vegas, NV',
            title:'Software Engineer Intern ',
            date: 'January 2022 - March 2022',
            description: '• Implemented features for various applications in Java, PHP, and Python.\n• Wrote elegant, self-documenting code, legible and palatable for other developers.\n• Designed embedded systems software in collaboration with designers for clean interfaces and intuitive interactions and experiences.',

        },
    ],

    education: [

        {
            title:'AA, Associate of Arts ',
            institute: 'College of Southern Nevada, Las Vegas',
            date: 'December 2004 - December 2018',
            description: 'Presidents List and Deans List in final year',

        },
        {
            title:'BS, Computer Science',
            institute: 'University of Nevada, Las Vegas',
            date: 'December 2018 - December 2021',
            description: 'GPA 3.36',

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
          description: [
            "ReactJS",
            "JavaScript",
            "Bootstrap",
            "Material UI",
          ],
        },
        {
          title: "BACK-END",
          description: [ "Java", "Python", "C++", "PHP", "MySQL"],
        },
        {
          title: "CONCEPTS & METHODOLOGIES",
          description: ["OOP", "Machine Learning", "Objective", "Forward Thinker", "Strong Communication Skills"],
        },
        {
          title: "SOURCE CONTROL & VIRTUALIZATION",
          description: ["Git", "GitHub", "Bitbucket", "Docker", "VirtualBox", "Parallels"],
        },
      ],
};