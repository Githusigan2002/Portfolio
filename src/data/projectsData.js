import movie_exp from '../../public/assets/movie_exp.png';
import weather_app from '../../public/assets/weather_app.png';
import cdn_financial from '../../public/assets/cdn_financial.png';
import des_financial from '../../public/assets/des_financial.png';

export const projectsData = [
    {
        id: 1,
        title: 'CDN Financial Platform',
        description: 'Modern financial services platform featuring instant approval technology, bridging over 200 lenders with client financial ambitions. Built with a premium, professional design system.',
        image: cdn_financial,
        techStack: ['React.js', 'Tailwind CSS', 'JavaScript'],
        github: null,
        liveDemo: 'https://cdn-financial-redesign.netlify.app/',
        demo: null,
        category: 'frontend'
    },
    {
        id: 2,
        title: 'DES Financial Group',
        description: 'Professional financial advisory website for DES Financial Group, LLC with 20+ years of expertise. Features fiduciary services, consultation booking, and comprehensive financial planning resources.',
        image: des_financial,
        techStack: ['React.js', 'Tailwind CSS', 'JavaScript'],
        github: null,
        liveDemo: 'https://desfinancialgroup.netlify.app/',
        demo: null,
        category: 'frontend'
    },
    {
        id: 3,
        title: 'Movie Explorer',
        description: 'A dynamic web application that allows users to search, browse, and discover movies using the TMDB API. Features include movie details, ratings, and trending sections.',
        image: movie_exp,
        techStack: ['React.js', 'TMDB API', 'Tailwind CSS', 'JavaScript'],
        github: 'https://github.com/githusigan2002/movie-explorer',
        liveDemo: 'https://githusigan2002.github.io/MovieExplorer/',
        demo: null,
        category: 'frontend'
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'Real-time weather application providing current weather conditions, forecasts, and location-based weather data using OpenWeatherMap API.',
        image: weather_app,
        techStack: ['React.js', 'OpenWeatherMap API', 'CSS', 'JavaScript'],
        github: 'https://github.com/githusigan2002/weatherapp',
        liveDemo: 'https://githusigan2002.github.io/WeatherApp/',
        demo: null,
        category: 'frontend'
    },
    {
        id: 5,
        title: 'Currency Converter',
        description: 'A practical currency conversion tool with real-time exchange rates, supporting multiple currencies with a clean, user-friendly interface.',
        image: 'https://images.unsplash.com/photo-1622618688206-6d6fb6844096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1cnJlbmN5JTIwY29udmVydG9yfGVufDB8fDB8fHww',
        techStack: ['React.js', 'Exchange Rate API', 'CSS', 'JavaScript'],
        github: 'https://github.com/Githusigan2002/CurrencyConverter_ReactJs',
        demo: null,
        category: 'frontend'
    },
    {
        id: 6,
        title: 'Digital Clock',
        description: 'An elegant digital clock application displaying real-time updates with customizable themes and display formats.',
        image: 'https://plus.unsplash.com/premium_photo-1661329920696-d9792be2ae5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRpZ2l0YWwlMjBjbG9ja3xlbnwwfHwwfHx8MA%3D%3D',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/Githusigan2002/DigitalClock',
        demo: null,
        category: 'frontend'
    },
    {
        id: 7,
        title: 'Password Generator',
        description: 'Secure password generator with customizable options including length, character types, and complexity levels for enhanced security.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/githusigan2002/passwordgenerator',
        demo: null,
        category: 'tool'
    }
];

export const skillsData = {
    frontend: {
        title: 'Frontend Development',
        skills: [
            { name: 'HTML', level: 90 },
            { name: 'CSS', level: 85 },
            { name: 'JavaScript', level: 85 },
            { name: 'React.js', level: 80 },
            { name: 'Tailwind CSS', level: 75 },
            { name: 'Bootstrap', level: 75 }
        ]
    },
    backend: {
        title: 'Backend Development',
        skills: [
            { name: 'Node.js', level: 75 },
            { name: 'Express.js', level: 75 },
            { name: 'REST APIs', level: 80 }
        ]
    },
    databases: {
        title: 'Databases',
        skills: [
            { name: 'MongoDB', level: 70 },
            { name: 'MySQL', level: 70 },
            { name: 'Firebase', level: 75 }
        ]
    },
    languages: {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', level: 85 },
            { name: 'Java', level: 75 },
            { name: 'Python', level: 80 }
        ]
    },
    tools: {
        title: 'Tools & Technologies',
        skills: [
            { name: 'Git', level: 80 },
            { name: 'GitHub', level: 80 },
            { name: 'Figma', level: 70 }
        ]
    },
};
