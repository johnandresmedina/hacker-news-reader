import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Hacker News Reader</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <Link to='/'>
                  <DropdownItem>Home</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink target='_blank' href='https://github.com/johnandresmedina/hacker-news-reader'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
