// images import
import Project3 from './projectImg/project3.png'
import Project2 from './projectImg/project2.png'

export const projectList = [
    {
        title: 'McFaceBook',
        slug: 'mcfacebook',
        img: Project3,
        name: 'McFacebook',
        subheader:`A 2010's FaceBook themed blog app`,
        desc: `McFaceBook is a MERN stack app built by a team of four developers. Users can create a new account, sign in, create, edit, and delete posts.`,
        stacks: [
            "HTML",
            "CSS",
            "MongoDB",
            "Express",
            "React",
            "NodeJs",
            "Bootstrap",
            'React-Bootstrap',
            'MDBootstrap'
        ],
        siteURL: 'https://mcfacebook.netlify.app/',
        githubURL: 'https://github.com/jtw007/domino-client'
    },

    {
        title: 'Project 2',
        slug: 'cocktailapi',
        img: Project2,
        name: 'CocktailAPI',
        subheader:`Cocktail recipe app that pulls from API Ninja's cocktail API`,
        desc: 'Full-stack application app using an 3rd party API that displays cocktail recipes.',
        stacks: [
            "HTML",
            "CSS",
            "EJS",
            "NodeJs",
            "PostgreSQL",
            "Sequelize and Sequelize-Cli",
            "Bootstrap"
        ],
        siteURL: '',
        githubURL: ''
    },
];
