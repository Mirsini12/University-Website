import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn
} from "mdb-react-ui-kit";

import './NavBar.css'

const NavBar = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/home')
  };

  return (
    <MDBNavbar className='sb p-1' expand="lg" dark bgColor="dark" >
      <MDBContainer fluid>
        <MDBNavbarBrand to="/" className="m-2 fs-1">
          <a href='https://physics-website.netlify.app/' className='text-white'>
            UNIVERSITY
          </a>

        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavColorSecond(!showNavColorSecond)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={showNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0 sb">
            <MDBNavbarItem className="mt-5 ms-4 " >
              <Link to="/home" className="text-light">
                Our Group
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="mt-5 ms-4">
              <Link to="/journals" className="text-light">
                Publications
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="mt-5 ms-4 ">
              <Link to="/vacancies" className="text-light">
                Vacancies
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="mt-5 ms-3 link ">
              <div>
                {
                  localStorage.getItem('token') &&

                  <Link className='link' to="/admin/journal" >Add Journal </Link>
                }
              </div>
              <div>
                {
                  localStorage.getItem('token') &&
                  <Link className='link' to="/admin/vacancy" >Add Vacancy </Link>
                }
              </div>
              <div>
                {
                  localStorage.getItem('token') && localStorage.getItem('type') === 'Admin' &&
                  <Link className='link' to="/admin/users"> List of users </Link>
                }
              </div>
              <div>
                {
                  localStorage.getItem('token') ?
                    <MDBBtn className="btnLogout link" color='light' onClick={logout}>Logout</MDBBtn> :
                    <MDBBtn className="btnLogin link" color='light' onClick={() => { navigate('admin/login') }}> Log in</MDBBtn>
                }
              </div>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar >

  );
}

export default NavBar;
