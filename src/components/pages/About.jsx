export default function About() {
    
    return(
        <div id='About' className=''>
            <h1 id='about-text'>JoshWu.About</h1>
            <p id='connect'>Connect with me!</p>
            <div id='about-contact'>
                <a className='link' href="https://www.linkedin.com/in/joshuatwudev/" target="_blank" rel="noopener noreferrer">
                    <i className="icon devicon-linkedin-plain colored"></i>
                </a>
                <a className='link' href="https://github.com/jtw007" target="_blank" rel="noopener noreferrer">
                    <i className="icon devicon-github-original"></i>
                </a>
            </div>

            <div id='about-body'>
                <div id='img-container'>
                    <img src='../../../assets/profilePicture1.png' alt='photo of Josh'/>
                </div>

                <div id='me-skills'>

                    <div id='about-me'>
                        <p id='me-text'>Hello there! I am a front-end software developer (and a sneaker enthusiast) from Southern California, who enjoys cooking and gaming in my off time. I value sincerity and empathy and I take pride in having a resourceful and straightforward approach when problem solving. My core values of sincerity and empathy guide me to take a resourceful and straightforward approach when problem solving, and I thrive in collaborative environments that encourage open communication and diverse perspectives. In the long run, I aspire to drive meaningful change and inspire others to reach their full potential.</p>
                    </div>

                    <div id="about-me-skills">
                        <p id='stack'>Current Stack 📚</p>

                        <div id='skills-container'>
                            {/* Box 1 */}
                            <div className='about-skills'>
                                <i className="devicon-react-original colored"></i>
                                <div className='react-container'>
                                    <p>React</p>
                                </div>
                            </div>
                            {/* box 2 */}
                            <div className='about-skills'>
                                <i className="devicon-javascript-plain colored"></i>
                                <div className='react-container'>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            {/* box 3 */}
                            <div className='about-skills'>
                                <i className="devicon-html5-plain colored"></i>
                                <div className='html-container'>
                                    <p>HTML5</p>
                                </div>
                            </div>
                            {/* box 4 */}
                            <div className='about-skills'>
                                <i className="devicon-css3-plain colored"></i>
                                <div className='css-container'>
                                    <p>CSS3</p>
                                </div>
                            </div>
                            {/* box 5 */}
                            <div className='about-skills'>
                                <i className="devicon-express-original"></i>
                                <div className='express-container'>
                                    <p>Express</p>
                                </div>
                            </div>
                            {/* box 6 */}
                            <div className='about-skills'>
                                <i className="devicon-nodejs-plain colored"></i>
                                <div className='node-container'>
                                    <p>Node.js</p>
                                </div>
                            </div>
                            {/* box 7 */}
                            <div className='about-skills'>
                                <i className="devicon-bootstrap-plain colored"></i>
                                <div className='node-container'>
                                    <p>Bootstrap</p>
                                </div>
                            </div>
                            {/* box 8 */}
                            <div className='about-skills'>
                                <i className="devicon-postgresql-plain"></i>
                                <div className='node-container'>
                                    <p>PostgreSQL</p>
                                </div>
                            </div>
                            {/* box 9 */}
                            <div className='about-skills'>
                                <i className="devicon-mongodb-plain colored"></i>
                                <div className='node-container'>
                                    <p>MongoDB</p>
                                </div>
                            </div>

                        </div>
                        
                    </div>

                </div>
                    

            </div>
        </div>
    )
}