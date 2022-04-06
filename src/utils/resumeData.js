import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Resume from "../assets/files/James_Perdue_Resume_APR_2022.pdf"

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

    about : "",
    
}