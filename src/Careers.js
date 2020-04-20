import React from 'react';
import {TiLocation} from 'react-icons/ti';

class Careers extends React.Component{
    render(){
        return(
            <div className='careers container'>
                <h1 className = 'headingContent'>We're hiring!!</h1>
                <div className='panel'>
                    <a href='/careersApply'><h5>Needed a full time senior photographer.</h5></a>
                    <p className='location'><TiLocation/> Hyderabad, Telangana, India</p>
                    <ul className='jobDetails headingContent'>
                        <li>Artistic Ability: Photographers need to be able to compose a shot, understand framing, </li><p id="extra_content1" className="extra_content">color and light to create a visually pleasing photograph.
                        <li>Business Skills: Independent photographers need skills to bring in new clients, meet with people, talk with customers, as well as run their own business, keep records and keep expenses in check.</li>
                        <li>Computer Skills: Most photographic manipulation is done through computer. Retouching photos, adding details, or other digital additions will be through a computer.</li>
                        <li>Attention to Detail: Photographers must have an eye on everything before, during and after the shot. Attention to detail makes sure that every hair is in place and nobody is photobombing in the back of the shot.</li>
                        <li>Interpersonal Skills: When working with people, photographers need to speak clearly and in a friendly way to get what they want out of the photograph.</li></p>
                        <button id="read_more1" className="read_more" onClick={()=>{
                            changeClass("read_more1", "extra_content1");
                        }}>Show More</button>
                    </ul>
                </div>
                <div className='panel'>
                    <a href='/careersApply'><h5>Needed a full time junior photographer.</h5></a>
                    <p className='location'><TiLocation/> Hyderabad, Telangana, India</p>
                    <ul className='jobDetails headingContent'>
                        <li>Photographer who works in a freelance capacity, </li><p id="extra_content2" className="extra_content">and assists in moving camera / videographic equipment.
                        <li>Works directly in co-ordination with a senior photographer or independently on few occasions.</li>
                        <li>Computer Skills: Most photographic manipulation is done through computer. Basic computer skills are expected. </li></p>
                        <button id="read_more2" className="read_more" onClick={()=>{
                            changeClass("read_more2", "extra_content2");
                        }}>Show More</button>
                    </ul>
                </div>
                <div className='panel'>
                    <a href='/careersApply'><h5>Needed a video editor</h5></a>
                    <p className='location'><TiLocation/> Hyderabad, Telangana, India</p>
                    <ul className='jobDetails headingContent'>
                        <li>Work both on and off-site to capture studio-quality photographs and videos.</li><p id="extra_content3" className="extra_content">
                        <li>Work creatively and manage and oversee all technical aspects of video recording and editing.</li>
                        <li>Proficient in Final Cut Pro X, Adobe After Effects, Adobe Photoshop.</li></p>
                        <button id="read_more3" className="read_more" onClick={()=>{
                            changeClass("read_more3", "extra_content3");
                        }}>Show More</button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Careers;

function changeClass(btnClassId, extraContentId) {
  var content = document.getElementById(extraContentId);
  var btn = document.getElementById(btnClassId);
  content.classList.toggle('show');

  if (content.classList.contains("show")) {
      btn.innerHTML = "Show Less";
  } else {
      btn.innerHTML = "Show More";
  }
}