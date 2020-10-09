import React, { useState } from "react";
import "./App.css";
import NasaList from "./components/NasaList"
import logo from "./assets/nasa-logo.png"
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,  NavbarText } from 'reactstrap';

function App() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
      <div className="logo-container">
         <img  className="nasa_logo" 
               src={logo}
              alt="nasa offical logo"/>
       </div> 
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://www.nasa.gov/">NASA.gov</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Galleries
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="https://www.nasa.gov/multimedia/imagegallery/iotd.html" style={{color: 'blue'}}>
                  NASA Image of the Day
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://www.nasa.gov/multimedia/imagegallery/index.html" style={{color: 'blue'}}>
                  NASA Image Gallery
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://www.nasa.gov/multimedia/videogallery/index.html"style={{color: 'blue'}}>
                  NASA Video Gallery
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Discover the stars</NavbarText>
        </Collapse>
        </Navbar>
      <div>
        <NasaList /> 
      </div>
    </div>
  );
}

export default App;
