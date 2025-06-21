import {
    mobile,
    backend,
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
    carrent,
    jobit,
    tripguide,
} from "../assets";
import react from '../assets/company/react.png'
import MongoDB from '../assets/company/mongodb.png'
import node from '../assets/company/node.jpeg'
import chatapp from '../assets/company/chat-app.png'
import ecommerceback from '../assets/company/ecommerceback.png'
import ecommercereact from '../assets/company/ecommercereact.png'



export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "FullStack Developer",
        icon: web,
    },
    {
        title: "Front-End Developer Reactjs",
        icon: mobile,
    },
    {
        title: "Back-End Developer Nodejs",
        icon: backend,
    }
];

const technologies = [
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

const experiences = [
    {
        title: "Front-End Developer React.js",
        company_name: "Projects",
        icon: react,
        iconBg: "#383E56",
        date: "March 2023",
        points: [
        "Developing and maintaining web applications using React.js and other related technologies.",

    ],
    },
    {
        title: "Back End Developer Nodejs",
        company_name: "Projects",
        icon: MongoDB,
        iconBg: "#E6DEDD",
        date: "Feb 2024",
        points: [
        "Developing and maintaining web applications using Node.js ,MongoDB and other related technologies.",
    ],
    },
    {
        title: "Full stack Developer",
        company_name: "Projects",
        icon: node,
        iconBg: "#383E56",
        date: "Jul 2024",
        points: [
        "Developing and maintaining web applications using React.js, MongoDB, Nodejs and other related technologies.",
    ],
    }
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
        name: "Chat App",
        description:
        "Developed with the MERN stack, Socket.io, TailwindCSS, and Daisy UI, this app provides JWT authentication and authorization for secure user access. It features real-time messaging and online user status tracking. The appleverages Zustand for global state management and includes comprehensive error handling on both the serverand client sides to ensure reliability",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "mongodb",
            color: "green-text-gradient",
        },
        {
            name: "socket.io",
            color: "pink-text-gradient",
        },
        ],
        image: chatapp,
        source_code_link: "https://github.com/Ahmedkamel-1/chat_app",
    },
    {
        name: "Ecommerce backend",
        description:
        "Developed the backend of an eCommerce platform using Express and Mongoose for routing and database management. Integrated Stripe for secure payment processing and nodemailer for email notifications. JWT and bcryptjs are used for user authentication and password security. Joi is employed for input validation, and dotenv manages environment variables. Additionally",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "restapi",
            color: "green-text-gradient",
        },
        {
            name: "scss",
            color: "pink-text-gradient",
        },
        ],
        image: ecommerceback,
        source_code_link: "https://github.com/Ahmedkamel-1/ecommerce",
    },
    {
        name: "React project",
        description:
        "Simple React Project Built a React app with React Router for navigation and React Slick for responsive carousels. Integrated Web Vitals for performance monitoring.",
        tags: [
        {
            name: "nextjs",
            color: "blue-text-gradient",
        },
        {
            name: "supabase",
            color: "green-text-gradient",
        },
        {
            name: "css",
            color: "pink-text-gradient",
        },
    ],
    image: ecommercereact,
    source_code_link: "https://github.com/Ahmedkamel-1/Ecommerce-react",
    },
];

export { services, technologies, experiences, testimonials, projects };
