import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBContainer, MDBRow, MDBCol, MDBCardText, MDBCardTitle } from "mdb-react-ui-kit";

import Footer from '../footer/Footer'


const Home = () => {


  return (
    <div>
      <div className='m-2 d-inline-flex'>
        <h1 className='mt-2 ms-5 me-5'>THE University</h1>
        <h1 className='m-2 ms-5'> Organic Electroactive Materials Group</h1>
      </div>
      <MDBContainer className=" mt-1 ms-4 ">
        <MDBRow >
          <MDBCol size='xxl' lg='4' style={{ height: 'auto', width: 420 }} className='g-1 m-1 ms-3 me-3' >
            <MDBCard className=" card" >
              <MDBCardBody>
                <MDBCardImage
                  style={{ height: 'auto', width: 'auto' }}
                  className='img-fluid shadow-4'
                  src={require('./photos/homePage1.jpg')}
                  alt="..."
                />
                <MDBCardTitle className='mt-3'>THE University</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. Obcaecati quidem optio fugiat consectetur itaque!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. Obcaecati quidem optio fugiat consectetur itaque!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol size='xxl' lg='4' style={{ height: 'auto', width: 420 }} className='g-1  me-3'>
            <MDBCard className=" card" >
              <MDBCardBody >
                <MDBCardImage
                  style={{ height: 350, width: 400 }}
                  className='img-fluid shadow-4 '
                  src={require('./photos/homePage2.jpg')}
                  alt="..."
                />
                <MDBCardTitle className='mt-3'>Facilities and Equipment</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. Obcaecati quidem optio fugiat consectetur itaque!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. Obcaecati quidem optio fugiat consectetur itaque!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>
          <MDBCol size='xl' lg='4' style={{ height: 'auto', width: 320 }} className='g-1 mb-2'>
            <MDBCard className=" card" >
              <MDBCardBody >
                <MDBCardImage
                  style={{ height: 'auto', width: 400 }}
                  className='img-fluid shadow-4'
                  src={require('./photos/labb.jpg')}
                  alt="..."
                />
                <MDBCardTitle className='mt-3 '>Postgraduate Study</MDBCardTitle>
                <MDBCardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Et eligendi aspernatur dolorum dolores repudiandae recusandae quibusdam praesentium incidunt earum?
                  Doloribus dolorem officia, ea eos harum voluptatibus laudantium! Voluptatem, accusamus facilis?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. Obcaecati quidem optio fugiat consectetur itaque!
                  Minima eius mollitia sit
                  impedit deserunt nemo, consequuntur nam, at error eveniet temporibus
                  dicta ad dignissimos. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>

          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default Home;
