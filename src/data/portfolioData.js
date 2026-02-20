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
    github: 'https://github.com/vighneshjk',
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
            { name: 'JavaScript', level: 75 },
            { name: 'React.js', level: 70 },
            { name: 'Responsive UI Design', level: 88 },
        ],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: '#8b5cf6',
        items: [
            { name: 'Python', level: 92 },
            { name: 'Django', level: 90 },
            { name: 'React (Frontend)', level: 70 },
            { name: 'FastAPI', level: 95 },
            { name: 'REST API Development', level: 82 },

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
        color: '#f59e0b',
        items: [
            { name: 'OpenCV', level: 78 },
            { name: 'TensorFlow / Basic ML', level: 65 },
            { name: 'Generative AI (LLMs)', level: 70 },
            { name: 'Real-time Gesture Detection', level: 72 },
            { name: 'Machine Learning', level: 85 },
            { name: 'PyTorch', level: 85 },
            { name: 'Computer Vision', level: 85 },

        ],
    },
    {
        category: 'Tools & Cloud',
        icon: '☁️',
        color: '#10b981',
        items: [
            { name: 'Git & GitHub', level: 88 },
            { name: 'Railway Deployment', level: 80 },
            { name: 'AWS (Basic)', level: 55 },
            { name: 'Razorpay Integration', level: 75 },
            { name: 'ngrok', level: 100 },
            { name: 'Docker', level: 75 },

        ],
    },
];

export const projects = [
    {
        id: 1,
        emoji: '🖐',
        title: 'Sign Language Recognition System',
        description:
            'An AI-based real-time sign language detection system using Python, OpenCV, and machine learning. Captures hand gestures through a webcam and translates them into readable text.',
        features: [
            'Real-time hand tracking',
            'Gesture-to-text conversion',
            'ML-based prediction',
            'Accessible communication tool',
        ],
        tech: ['Python', 'OpenCV', 'Machine Learning'],
        color: '#4f6ef7',
        github: '#',
        demo: '#',
    },
    {
        id: 2,
        emoji: '🏥',
        title: 'Doctor AI (ongoing)',
        description:
            'An AI-powered medical assistant system that predicts possible diseases based on user symptoms and provides basic health suggestions.',
        features: [
            'Symptom-based prediction',
            'ML classification model',
            'User-friendly interface',
            'Medical data processing',
        ],
        tech: ['Python', 'Django', 'Machine Learning'],
        color: '#8b5cf6',
        github: '#',
        demo: '#',
    },
    {
        id: 3,
        emoji: '🚗',
        title: 'Rydex Booking System',
        description:
            'A full-stack cab booking web application similar to Uber/Ola, allowing users to book rides and manage trip details seamlessly.',
        features: [
            'User authentication',
            'Booking system',
            'Ride status tracking',
            'Payment integration (Razorpay)',
            'Admin dashboard',
        ],
        tech: ['Django', 'Tailwind CSS', 'PostgreSQL'],
        color: '#06b6d4',
        github: '#',
        demo: '#',
    },
    {
        id: 4,
        emoji: '📚',
        title: 'Book Hive',
        description:
            'An online book management and marketplace platform where users can browse, add, and manage books with a clean and intuitive interface.',
        features: [
            'User registration & login',
            'Book listing system',
            'Search & filter',
            'Admin panel',
            'Secure database management',
        ],
        tech: ['Django', 'Tailwind CSS'],
        color: '#f59e0b',
        github: '#',
        demo: '#',
    },
    {
        id: 5,
        emoji: '☁️',
        title: 'CloudShare',
        description:
            'A secure cloud-based file sharing web application allowing users to upload, manage, and share files with ease from anywhere.',
        features: [
            'File upload & download',
            'Secure authentication',
            'Cloud deployment',
            'User dashboard',
        ],
        tech: ['Django', 'Railway Deployment', 'GitHub'],
        color: '#10b981',
        github: 'https://github.com/Vighneshjk/cloud-share',
        demo: '#',
    },
    {
        id: 6,
        emoji: '🍃',
        title: 'Guava Disease Detection (Team Project)',
        description:
            'A collaborative AI project to detect diseases in guava plants using image processing and deep learning. Helps farmers identify issues early for better crop management.',
        features: [
            'Deep Learning Model',
            'Image Classification',
            'Disease Identification',
            'Team Collaboration',
        ],
        tech: ['Python', 'TensorFlow', 'Image Processing'],
        color: '#ef4444',
        github: '#',
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
        { label: 'Projects', value: '10+' },
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
