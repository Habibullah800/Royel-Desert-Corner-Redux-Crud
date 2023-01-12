import React from "react";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoImage from '../assets/Spicy Desert Cornrt.png';
import './Header.css'

const Header = () => {
  // style={{ backgroundImage: `url('${LogoImage}')`, backgroundRepeat: "no-repeat", width: '20rem', height: '80rem' }}

  return (
    <div >
      <img src={LogoImage} class=" w-100 h-25 position-relative " alt="Responsive image"></img>

      <Navbar collapseOnSelect expand="sm" className="position-fixed top-0 start-0 w-100 " >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">



              <NavLink to="/" className="text-uppercase font-weight-bold  text-decoration-none px-3 pt-3 text-dark h6 " >
                Home
              </NavLink>
              <NavLink to="/add" className="bd-highlight text-uppercase font-weight-bold  text-decoration-none px-3 pt-3 h6 text-dark" >
                Add
              </NavLink>
              <NavLink to="/about" className=" text-uppercase font-weight-bold  text-decoration-none px-3 pt-3 h6 text-dark" >
                About
              </NavLink>







            </Nav>





            <Nav>

              <Nav.Link className=" text-uppercase font-weight-bold  text-decoration-none px-3 pt-3 h6 text-dark">More deets
              </Nav.Link>
              <Nav.Link className=" text-uppercase font-weight-bold  text-decoration-none px-3 pt-3 h6 text-dark">
                Dank memes
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>


  );
};

export default Header;
