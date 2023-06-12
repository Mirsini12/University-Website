import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center ' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>



        <section className=''>
          <MDBRow>
            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>The University</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Jobs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Visit Us
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Useful Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Learn Ultra
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>

                    UO
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Self service
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Hub(internal)
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='#!'>
          University
        </a>
      </div>
    </MDBFooter>
  );
}