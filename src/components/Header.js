import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderContent from './HeaderContent';


class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <HeaderContent/>
            </React.Fragment>
        )
    }
}

export default Header;