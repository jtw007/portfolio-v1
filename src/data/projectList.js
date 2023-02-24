// images import
import Project3 from './projectImg/project3.png'
import Project2 from './projectImg/project2.png'

export const projectList = [
    {
        title: 'Project 3',
        img: Project3,
        name: 'McFacebook',
        desc: `A 2010's FaceBook themed blog app`,
        stacks: [
            "HTML",
            "CSS",
            "React",
            "NodeJs",
            "MongoDB",
            "Bootstrap"
        ],
        siteURL: 'https://mcfacebook.netlify.app/',
        githubURL: 'https://github.com/jtw007/domino-client'
    },

    {
        title: 'Project 2',
        img: Project2,
        name: 'CocktailAPI',
        desc: 'Cocktail recipe app using an 3rd party API',
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
