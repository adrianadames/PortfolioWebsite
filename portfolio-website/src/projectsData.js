

const projectsData = [
    {
        id: 1,
        title: 'Voice Chatroom',
        description: 'Create voice chatroom groups where you can talk directly into your group’s ears and hear others talk into your ears.',
        techStack: ['React', 'Bootstrap', 'Auth0', 'Express', 'Knex', 'Twilio', 'Stripe Library/API', 'Twilio', 'Cloudinary'],
        link: 'https://intercom.netlify.com',
        github: ['https://github.com/intercom-app'], 
        img:'intercom1', 
        responsibilities: [
            'Set up the backend logic for adding money to user account using credit card and the backend logic that subtracts incurred charges from account balance.',
            'Set up the frontend UI/UX for adding a credit card and adding money to user account.', 
            'Designed and constructed the first iteration of our database and REST API architecture.'
            ]
    },
    {
        id: 2,
        title: 'Simple Notes App',
        description: 'Create, edit, and delete notes using a simple notes app.',
        techStack: ['React', 'Styled Components', 'Node.js/Express', 'Knex'],
        link: 'https://adrian-notes-project.netlify.com',
        github: ['github.com/adrianadames/front-end-project-week', 'github.com/adrianadames/LambdaNotesBackend'],
        img: 'notes1',
        responsibilities: [
            'Architected the component level structure of the app, aiming for simplicity in the management and manipulation of state.',
            'Styled app according to the design spec via styled components.',
            'Designed, constructed, and deployed a simple database and REST API for user registration and login and the creation, editing, and deletion of user notes.'
        ],
    },
    {
        id: 3,
        title: 'MUD Text Adventure Game',
        description: 'Explore a multi-user dungeon world and chat with other users along the way.',
        techStack: ['React', 'Styled Components', 'Django', 'Pusher API'],
        link: 'https://adrian-mud-project.netlify.com',
        github: ['github.com/adrianadames/LambdaMUD-Client', 'github.com/adrianadames/LambdaMUD-Project'],
        img: 'mud1', 
        responsibilities: [
            'Architected the component level structure of the app, and designed the look of the app to harken to the era of time when MUD text adventure games were popular.',
            'Styled app according to the above-mentioned design spec via styled components.',
            'Set up the backend logic for achieving realtime bi-directional chat via WebSockets via the Pusher API and the associated front-end logic to enable the user to chat.'
        ]
    }
]

export default projectsData