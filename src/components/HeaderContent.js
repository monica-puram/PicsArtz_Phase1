import React from 'react';

function HeaderContent(){
    return(
        <div className='headerContent container'>
            <div className='banner'>
                <img src ='http://localhost:3000/banner.jpg' alt='banner'></img>
            </div>
            <div className='threeColGrid'>
                <div className='column1 col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
                    <h3>What can we do?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                </div>
                <div className='column2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                    <img src= 'http://localhost:3000/thumbnail1.jpg' alt='thumbnail'></img>
                </div>
                <div className='column3 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
                    <iframe src='https://www.youtube.com/embed/jBrttJVhv-4'></iframe>
                </div>
            </div>

        </div>
    )
}

export default HeaderContent;