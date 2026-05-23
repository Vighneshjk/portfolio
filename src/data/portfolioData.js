import profileImg from '../assets/porfoli.jpeg';

export const NAME = 'Vighnesh JK';
export const ALIAS = 'VJ';
export const ROLE_HEADLINE = 'AI-Powered Full Stack Developer';
export const ROLE_TAGS = 'Django • React • Generative AI | Building Scalable Web Applications';
export const TYPING_ROLES = [
    'AI-Powered Full Stack Developer',
    'Django & React Developer',
    'Generative AI Builder',
    'Python Developer',
    'BCA Student & Innovator',
    'Cloud & Backend Engineer',
];

export const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
];

export const socialLinks = {
    github: 'https://github.com/Vighneshjk',
    linkedin: 'https://www.linkedin.com/in/vighnesh-jk-033223357',
    email: 'vighneshjk1@gmail.com',
};

export const skills = [
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#4f6ef7',
        items: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'Tailwind CSS', level: 82 },
            { name: 'JavaScript', level: 85 },
            { name: 'React.js', level: 75 },
            { name: 'Responsive UI Design', level: 88 },
        ],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: '#8b5cf6',
        items: [
            { name: 'Python', level: 92 },
            { name: 'Django', level: 95 },
            { name: 'React (Frontend)', level: 75 },
            { name: 'FastAPI', level: 95 },
            { name: 'REST API Development', level: 90 },

        ],
    },
    {
        category: 'Database',
        icon: '🗄️',
        color: '#06b6d4',
        items: [
            { name: 'SQLite', level: 85 },
            { name: 'PostgreSQL (Basic)', level: 65 },
            { name: 'MongoDB', level: 75 },
        ],
    },
    {
        category: 'AI & ML',
        icon: '🤖',
        color: '#22d3ee',
        items: [
            { name: 'OpenCV', level: 78 },
            { name: 'TensorFlow / Basic ML', level: 65 },
            { name: 'Generative AI (LLMs)', level: 70 },
            { name: 'Real-time Gesture Detection', level: 72 },
            { name: 'Machine Learning', level: 85 },
            { name: 'PyTorch', level: 85 },
            { name: 'Computer Vision', level: 85 },
            { name: 'LangChain', level: 80 },
            { name: 'Prompt Engineering', level: 80 },
            { name: 'XGBoost', level: 75 },

        ],
    },
    {
        category: 'Tools & Cloud',
        icon: '☁️',
        color: '#10b981',
        items: [
            { name: 'Git & GitHub', level: 95 },
            { name: 'Railway Deployment', level: 80 },
            { name: 'AWS (Basic)', level: 60 },
            { name: 'Razorpay Integration', level: 75 },
            { name: 'ngrok', level: 100 },
            { name: 'Docker', level: 75 },
            { name: 'Unity', level: 75 },

        ],
    },
];

export const projects = [
    {
        id: 1,
        emoji: '🎙️',
        title: 'F.R.I.D.A.Y. AI Assistant',
        description:
            'A cinematic AI assistant platform inspired by futuristic HUD systems. Integrates Google Gemini API with a Node.js and Express backend for intelligent conversational workflows and real-time diagnostics simulation.',
        features: [
            'Developed cinematic AI assistant platform inspired by futuristic HUD systems using React, Vite, and Framer Motion.',
            'Integrated Google Gemini API with Node.js and Express backend for intelligent conversational workflows.',
            'Designed scalable modular AI architecture with real-time diagnostics simulation and interactive UI feedback.'
        ],
        tech: ['React', 'Vite', 'Framer Motion', 'Node.js', 'Express', 'Gemini API'],
        color: '#00ff41',
        github: 'https://github.com/Vighneshjk/ai_agent4.3',
        demo: '#',
    },
    {
        id: 2,
        emoji: '🔍',
        title: 'DocMind – AI Document Search (RAG Platform)',
        description:
            'An AI-powered Retrieval-Augmented Generation (RAG) platform for conversational querying of PDF documents. Uses semantic search with LangChain and FAISS, with a FastAPI backend and React frontend.',
        features: [
            'Developed AI-powered RAG platform for conversational querying of PDF documents.',
            'Implemented semantic search using LangChain and FAISS for accurate information retrieval.',
            'Built FastAPI backend with React frontend and Docker-based deployment workflows.'
        ],
        tech: ['FastAPI', 'React', 'LangChain', 'FAISS', 'Docker', 'Python'],
        color: '#8b5cf6',
        github: 'https://github.com/Vighneshjk/ai_documentaion_search-RAG-',
        demo: '#',
    },
    {
        id: 3,
        emoji: '🤖',
        title: 'AI Agent v4.2.0',
        description:
            'An intelligent automation agent using LangChain and advanced API integrations. Features a modular pipeline architecture for scalable task execution and autonomous decision-making logic.',
        features: [
            'Developed intelligent AI automation workflows using LangChain and API integrations.',
            'Designed modular AI pipeline architecture for scalable task execution systems.',
            'Implemented autonomous decision-making logic for intelligent workflow automation.'
        ],
        tech: ['Python', 'LangChain', 'APIs', 'Workflow Automation'],
        color: '#ffaa00',
        github: 'https://github.com/Vighneshjk/autonomous-agent-24',
        demo: '#',
    },
    {
        id: 4,
        emoji: '🦯',
        title: 'Blind Object Detection System',
        description:
            'An assistive AI-based object detection system combining computer vision with real-time camera feed analysis. Designed to assist visually impaired users via accessibility-focused audio alerts.',
        features: [
            'Developed assistive AI-based object detection system using OpenCV and Unity Engine.',
            'Implemented real-time object detection and live camera feed analysis for obstacle recognition.',
            'Designed accessibility-focused audio alert system for visually impaired users.'
        ],
        tech: ['Python', 'OpenCV', 'Unity Engine', 'Computer Vision'],
        color: '#06b6d4',
        github: 'https://github.com/Vighneshjk/blind_object_detection',
        demo: '#',
    },
    {
        id: 5,
        emoji: '🖐️',
        title: 'Sign Language Detection System',
        description:
            'An AI-powered gesture recognition system utilizing MediaPipe and OpenCV for high-accuracy, real-time hand tracking and gesture classification workflows.',
        features: [
            'Built AI-powered gesture recognition system using OpenCV and MediaPipe.',
            'Implemented real-time hand tracking and gesture classification workflows.'
        ],
        tech: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
        color: '#10b981',
        github: 'https://github.com/Vighneshjk/sign-language-detection',
        demo: '#',
    },
    {
        id: 6,
        emoji: '☁️',
        title: 'CloudShare – File Sharing Platform',
        description:
            'A secure, backend-integrated file-sharing platform designed with scalable upload workflows, robust user authentication, and secure file management functionalities.',
        features: [
            'Built secure backend-integrated file-sharing platform with scalable upload workflows.',
            'Developed authentication systems and secure file management functionalities.'
        ],
        tech: ['Django', 'Python', 'Tailwind CSS', 'PostgreSQL'],
        color: '#ff003c',
        github: 'https://github.com/Vighneshjk/cloud-share',
        demo: '#',
    },
];



export const profile = {
    name: 'Vighnesh JK',
    role: 'Full Stack Developer',
    location: 'India',
    availability: 'Available for Hire',
    email: 'vighneshjk1@gmail.com',
    experience: '2+ Years',
    avatar: profileImg, // Local stylized avatar
    stats: [
        { label: 'Projects', value: '6+' },
        { label: 'Experience', value: '2y+' },
    ],
};

export const hireMe = [
    {
        title: 'Full Stack Excellence',
        desc: 'Proficient in both frontend (React, Tailwind) and backend (Django, Python) development.',
    },
    {
        title: 'AI Integration',
        desc: 'Specialized in integrating LLMs and generative AI into practical web applications.',
    },
    {
        title: 'Rapid Deployment',
        desc: 'Experience with CI/CD and cloud platforms (Vercel, Railway, AWS) for quick turnaround.',
    },
    {
        title: 'Problem Solver',
        desc: 'Strong analytical skills to debug complex issues and optimize performance.',
    },
];

export const achievements = [
    { icon: '🧠', title: 'Strong Backend Logic', desc: 'Expert at building robust, scalable server-side systems using Django and Python.' },
    { icon: '🤖', title: 'Real-Time AI Systems', desc: 'Built production-ready AI applications with real-time gesture detection and disease prediction.' },
    { icon: '☁️', title: 'Cloud Deployment', desc: 'Hands-on experience deploying apps on Railway, Vercel, AWS, and Ngrok tunnels.' },
    { icon: '💳', title: 'Payment Integration', desc: 'Successfully integrated Razorpay payment gateway in real-world cab booking applications.' },
    { icon: '🎨', title: 'Clean UI Design', desc: 'Consistently delivers polished, responsive user interfaces with modern design principles.' },
    { icon: '📦', title: 'Full Stack Delivery', desc: 'End-to-end project delivery from database design to frontend deployment.' },
];
