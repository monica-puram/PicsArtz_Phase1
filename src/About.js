import React from 'react';


class About extends React.Component{
    render(){
        return(
            <div className='aboutUs container'>
                <div className='aboutUsGrid'>
                    <div className='aboutText'>
                        <h4 className = 'headingContent'>Who we are?</h4><hr/>
                        <p className = 'headingContent'>We are creative picture artists that strive to capture important moments of your life that are soulful and are to be cherished forever. Passion, professionalism and dedication are values that are translated in our work.</p>
                    </div>
                    <div className='aboutImg'>
                        <img src = 'http://localhost:3000/gallery1.jpg' alt='about'/>
                    </div>
                    <div className='aboutImg'>
                        <img src = 'http://localhost:3000/gallery1.jpg' alt='about'/>
                    </div>
                    <div className='aboutText'>
                        <h4 className = 'headingContent'>Our Mission</h4><hr/>
                        We strive for customer satisfaction. Rightly said by - <i>Mahatma Gandhi</i><br/>
                        <q><i>A customer is the most important visitor on our premises. He is not dependent on us. We are dependent on him. He is not an interruption of our work. 
                            He is the purpose of it.</i></q>
                    </div>
                    
                    <div className='aboutText'>
                        <h4 className = 'headingContent'>Our Vision</h4><hr/>
                        <p className = 'headingContent'> Our creative vision is to translate beautiful images that will last a lifetime. We envisage to become one of the few photographic and videographic establishments
                             out there that have made a difference.</p>
                    </div>
                    <div className='aboutImg'>
                        <img src = 'http://localhost:3000/gallery1.jpg' alt='about'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;