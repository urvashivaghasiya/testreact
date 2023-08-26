import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Layout = ({ children }, args) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>

      <Navbar {...args}>
        <NavbarBrand href="/">TEXTUTIL</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/user">
                User
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>

      {children}
      Footer
    </div>
  )
}

export default Layout

