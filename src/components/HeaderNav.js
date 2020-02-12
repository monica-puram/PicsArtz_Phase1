import React from 'react';
import {Navbar, Nav, Dropdown, Button, ButtonGroup, Form, FormControl, Row, Col} from 'react-bootstrap';
import { IoIosHome } from 'react-icons/io';
import "../css/headerNav.css";
import Logo from '../images/PicsArtzLogo.png';

class HeaderNav extends React.Component{
	render() { 
		return(
				<Navbar collapseOnSelect expand="md xs" as = {Row} className='navbar' variant="dark">
						<Col lg={{ size: 3, offset: 1 }} md="2" sm = "4" xs="4">
							<Navbar.Brand className="navBrand" href="/home"><img src={Logo} className="logo"/></Navbar.Brand>
						</Col>
						<Col lg="8" md="10" sm="8" xs="8">
							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link as = {Button} href="/home">Home <IoIosHome/></Nav.Link>
								<Dropdown as={ButtonGroup}  >
								<Button as = "a" className = "dropdown" href = "/gallery">Our Gallery</Button>
								<Dropdown.Toggle className = "dropdown" split id="dropdown-custom-2" />
								<Dropdown.Menu>
									<Dropdown.Item href = "#">Best Captures</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href = "#">Candid</Dropdown.Item>
									<Dropdown.Divider />
									<Dropdown.Item href = "#">Wide angle</Dropdown.Item>
                                    <Dropdown.Divider />
									<Dropdown.Item href = "#">Promos</Dropdown.Item>
                                    <Dropdown.Divider />
									<Dropdown.Item href = "#">Video Invites</Dropdown.Item>
                                    <Dropdown.Divider />
									<Dropdown.Item href = "#">Photo Shoot</Dropdown.Item>
								</Dropdown.Menu>
								</Dropdown>
                                <Nav.Link as = {Button} href="/careers">Careers</Nav.Link>
								<Nav.Link as = {Button} href="/about">About Us</Nav.Link>
								<Nav.Link as = {Button}  href="/contactUs">Contact Us</Nav.Link>

							</Nav>
							</Navbar.Collapse>
						</Col>
				</Navbar>
			)
	}
}

export default HeaderNav;