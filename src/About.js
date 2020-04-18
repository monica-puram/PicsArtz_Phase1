import React from 'react';


class About extends React.Component{
    render(){
        return(
            <div className='aboutUs container'>
                <div className='aboutUsGrid'>
                    <div className='aboutText'>
                        <h4>Who we are?</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                    <div className='aboutImg'>
                        <img src = 'http://localhost:3000/gallery1.jpg' alt='about'/>
                    </div>
                    <div className='aboutImg'>
                        <img src = 'http://localhost:3000/gallery1.jpg' alt='about'/>
                    </div>
                    <div className='aboutText'>
                        <h4>Our Mission</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                    
                    <div className='aboutText'>
                        <h4>Our Vision</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
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