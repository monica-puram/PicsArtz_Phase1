import React from 'react';
import {IoLogoYoutube, IoLogoFacebook, IoLogoTwitter,IoLogoGithub} from 'react-icons/io';


class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className='footerContent'>
                    <a href='https://www.youtube.com/channel/UClxpDtb1YM84asWTgYqPC4g'><IoLogoYoutube/></a>
                    <a href='https://www.facebook.com/'><IoLogoFacebook/></a>
                    <a href='https://twitter.com/purammonica'><IoLogoTwitter/></a>
                    <a href='https://github.com/Shrikanth7/PicsArtz_Phase1'><IoLogoGithub/></a>
                    <p className = 'copyRight'>© 2019 Copyright:
                        <a href="https://www.google.com">
                            <strong> Google.com</strong>
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer;