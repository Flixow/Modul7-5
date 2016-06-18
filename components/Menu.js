import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

export default class Menu extends React.Component {
	render(){
		return (
			<Navbar inverse fluid={true}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">React- First Project</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<IndexLinkContainer to="/">
						    <NavItem eventKey={1}>Home</NavItem>
						</IndexLinkContainer>
					    <LinkContainer to="/taskslist">
						    <NavItem eventKey={2}>Taks List</NavItem>
						</LinkContainer>
						<LinkContainer to="/taskslists">
						    <NavItem eventKey={3}>Tasks Lists</NavItem>
						</LinkContainer>
						<LinkContainer to="/posts">
						    <NavItem eventKey={4}>Posts</NavItem>
						</LinkContainer>
						<LinkContainer to="/syncano">
						    <NavItem eventKey={5}>Syncano</NavItem>
						</LinkContainer>
				    </Nav>
					<Nav pullRight>
					    <NavDropdown eventKey={1} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem divider />
							<LinkContainer to="/timer">
								<NavItem eventKey={1.2}>Timer</NavItem>
							</LinkContainer>
					    </NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)		
	}
}