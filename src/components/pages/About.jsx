export default function About() {
    
    return(
        <div id='About' className='text slide'>
            <h1 id='about-text'>JoshWu.about</h1>
            <div id='about-body'>
                <img src='../../../assets/sampleProfile.jpeg' alt='photo of Josh'/>
                <div id='me-skills'>

                    <div id='about-me'>
                        <p id='me-text'>Hello there! I am a front-end software developer (and a sneaker enthusiast) from Southern California, who enjoys cooking and gaming in my off time. I value sincerity and empathy and I take pride in having a resourceful and straightforward approach when problem solving. My core values of sincerity and empathy guide me to take a resourceful and straightforward approach when problem solving, and I thrive in collaborative environments that encourage open communication and diverse perspectives. In the long run, I aspire to drive meaningful change and inspire others to reach their full potential</p>
                    </div>

                    <div id="about-me-skills">
                        <p id='stack'>Current Stack</p>

                        <div id='box-container'>
                            {/* Box 1 */}
                            <div class='about-skills'>
                                <i class="devicon-react-original colored"></i>
                                <div class='react-container'>
                                    <p>React</p>
                                </div>
                            </div>
                            {/* box 2 */}
                            <div class='about-skills'>
                                <i class="devicon-javascript-plain colored"></i>
                                <div class='react-container'>
                                    <p>JavaScript</p>
                                </div>
                            </div>
                            {/* box 3 */}
                            <div class='about-skills'>
                                <i class="devicon-html5-plain colored"></i>
                                <div class='html-container'>
                                    <p>HTML5</p>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>

                </div>
                    

            </div>
        </div>
    )
}