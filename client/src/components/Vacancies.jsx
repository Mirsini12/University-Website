import React from 'react';
import { useFetchVacancies } from '../data/vacanciesHook';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import DeleteVacancyModal from './admin/Modals/DeleteVacancyModal';
import EditVacancyModal from './admin/Modals/EditVacancyModal';
import ApplicationModal from './publicModal/ApplicationModal';

const Vacancies = () => {
  const { data } = useFetchVacancies()
  return (
    <div>
       <MDBCard className=" card" >
       <h1 className='mt-4 text-center'>Vacancies at Photophysics group </h1>
       <MDBCardBody>
        <div className='text-center'>
      <MDBCardImage 
      style={{ height: '20%', width: '50%', marginLeft:"auto", marginTop: "1rem" }}
      className='img-fluid '
      src={require('./photos/vacancies1.jpg')}
      alt="..."
      />
      </div>
      </MDBCardBody>
      </MDBCard>
      <MDBContainer className='mb-9 ' >
        <MDBRow className='mb-3'>
          {data?.map((vacancy) => {
            return (
              <MDBCard className="card-body m-3 ps-3" key={vacancy._id}>
                <MDBCol>
                  <MDBCardBody>
                    <MDBCardTitle>{vacancy.title} </MDBCardTitle>
                    <MDBCardText>
                      {vacancy.description}
                    </MDBCardText>
                
                    {!localStorage.getItem('token') &&
                      <ApplicationModal vacancy={vacancy} />}
                    
                    <div className='mt-3 d-inline-flex' >
                    <div className='me-2'>
                    {localStorage.getItem('token') &&
                      <DeleteVacancyModal vacancy={vacancy} />
                    }
                    </div>
                    {localStorage.getItem('token') &&
                      <EditVacancyModal vacancy={vacancy} />
                    }
                    
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBCard>
            )
          })}
        </MDBRow>
      </MDBContainer >
    </div>
  );
}

export default Vacancies;
