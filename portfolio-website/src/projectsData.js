const projectsData = [
    {
        id: 1,
        title: 'Voice Chatroom',
        description: 'Create voice chatroom groups where you can talk directly into your group’s ears and hear others talk into your ears.',
        techStack: ['React', 'Bootstrap', 'Auth0', 'Node.js/Express', 'Knex.js', 'Twilio', 'Stripe Library/API', 'Cloudinary'],
        link: 'https://intercom.netlify.com',
        github: ['https://github.com/intercom-app'], 
        url:'/images/intercom1.PNG', 
        responsibilities: [
            'Collaboratively developed and documented app product canvas in team of five, identifying target audience, essential features and wireframe views, and the tech stack to accomplish such within five weeks.',
            'Designed and constructed first iteration of database (SQLite) and REST API.', 
            'Developed front and back-end logic for payment feature (i.e. UI/UX and API endpoints to assign user Stripe ID, add credit card(s) or funds to account, and subtract incurred charges). Gained reps resolving merge conflicts.'
            ]
    },
    {
        id: 2,
        title: 'MUD Text Adventure Game',
        description: 'Explore a multi-user dungeon world and chat with other users along the way.',
        techStack: ['React', 'Styled Components', 'Django', 'Pusher API'],
        link: 'https://adrian-mud-project.netlify.com',
        github: ['https://github.com/adrianadames/MudTextAdventureFE', 'https://github.com/adrianadames/MudTextAdventureBE'],
        url:'/images/mud1.PNG', 
        responsibilities: [
            'Built entire front-end; styled app with an aesthetic harkening back to era when MUD text adventure games were popular.',
            'Set up back-end logic for login/registration (using Django auth system) and realtime bi-directional chat via WebSockets via Pusher API.'
        ]
    }, 
    {
        id: 3,
        title: 'Simple Notes App',
        description: 'Create, edit, and delete notes using a simple notes app.',
        techStack: ['React', 'Styled Components', 'Node.js/Express', 'Knex.js'],
        link: 'https://adrian-notes-project.netlify.com',
        github: ['https://github.com/adrianadames/SimpleNotesAppFE', 'https://github.com/adrianadames/SimpleNotesAppBE'],
        url:'/images/notes1.PNG',
        responsibilities: [
            'Developed and deployed simple notes app with front-end hosted on Netlify and back-end REST API and PostgreSQL database hosted on Heroku.',
            'Styled app according to a given design spec via styled components.'
        ],
    },
]

export default projectsData