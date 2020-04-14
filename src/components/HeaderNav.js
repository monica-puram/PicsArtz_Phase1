import React from 'react';
import Logo from '../images/PicsArtzLogo.png';
import '../css/styles.css';
import {IoIosMenu,IoIosHome, IoIosArrowDropdown, IoIosContacts, IoIosBusiness, IoIosPhonePortrait} from 'react-icons/io';

function HeaderNav(){
		return(
			<div className= 'navbar'>
				<div className = 'logo col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3'>
					<a href='/home'><span><img src={Logo} alt="PicsArtzLogo" className="logo"/></span></a>
				</div>
				<button className='hamburger' onClick={()=>{
						toggleNav();
					}}>
					<span><IoIosMenu/></span>
				</button>
				
				<div className='nav col-6 col-sm-6 col-md-6 col-lg-9 col-xl-9' id='nav'>
					<a href="#" className="closebtn" onClick={()=>{
						toggleNav();
					}}>&times;</a>
					<ul>
						<li className='navLink'>
							<a href='/home'>Home <IoIosHome/></a>
						</li>
						<li className='navLink' id='dropdown'>
							<a href='/gallery'>Our gallery <IoIosArrowDropdown/></a>
							
								<ul className='navDropdown'>
									<li className='dropdownLink'>
									<a href='/gallery'>Best Captures</a>
									</li>
									<li className='dropdownLink'>
									<a href='/gallery'>Candid</a>
									</li>
									<li className='dropdownLink'>
									<a href='/gallery'>Wide Angle</a>
									</li>
									<li className='dropdownLink'>
									<a href='/gallery'>Promos</a>
									</li>
									<li className='dropdownLink'>
									<a href='/gallery'>Video Invites</a>
									</li>
									<li className='dropdownLink'>
									<a href='/gallery'>Photo shoot</a>
									</li>
								</ul>
							
						</li>
						
						<li className='navLink'>
							<a href='/careers'>Careers <IoIosContacts/></a>
						</li>
						<li className='navLink'>
							<a href='/about'>About Us <IoIosBusiness/></a>
						</li>
						<li className='navLink'>
							<a href='/contactus'>Contact Us <IoIosPhonePortrait/></a>
						</li>
					</ul>
					
				</div>
			</div>
			
		);
	
}

export default HeaderNav;

function toggleNav() {
	var x = document.getElementById("nav");
	if (x.className === "nav col-6 col-sm-6 col-md-6 col-lg-9 col-xl-9") {
		x.className += " responsive";
	}
	else {
		x.className = "nav col-6 col-sm-6 col-md-6 col-lg-9 col-xl-9";
	}
}
