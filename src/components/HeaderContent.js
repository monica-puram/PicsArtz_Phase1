import React from 'react';

function HeaderContent() {
    return (
        <div className='headerContent container'>
            <div className='banner'>
                <img src='banner.jpg' alt='banner'></img>
            </div>
            <div className='threeColGrid'>
                <div className='column1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <h3 className='headingContent'>What we do?</h3>
                    <hr />
                    <p>We're specialized in photo editing and video editing of content of pretty much any occasion, leveraging industry standard software Adobe Photoshop and Apple's Final Cut Pro X.
                        Cherish a well-documented photographs and videos from us. </p>
                </div>
                <div className='column2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                    <img src='thumbnail1.jpg' alt='thumbnail'></img>
                </div>
                <div className='column3 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                    <iframe src='https://www.youtube.com/embed/jBrttJVhv-4' title='preWed'></iframe>
                </div>
            </div>

        </div>
    )
}

export default HeaderContent;