import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DeleteUserModal from './Modals/DeleteUserModal'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
} from 'mdb-react-ui-kit';

import { useFetchAdmins } from '../../data/adminHooks';
import Copyright from '../../footer/Copyright';


const ListAdmins = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("type") !== "Admin") {
      navigate('/home')
    }
  }, [])

  const { data } = useFetchAdmins();

 
  return (
    <div>
      <div className='mb-4 mt-5 text-center' >
      <Link className='text-dark' to={'/admin/add'}>Add User</Link>
      </div>
    <MDBContainer className='mb-9 mt-3' >
      
      <MDBRow>
        {data?.map((admin) => {
          return (
            <MDBCard className="card-body ms-3 ps-3 m-4" key={admin._id}>
              <MDBCol>
                <MDBCardBody>
                  <MDBCardTitle>{admin.username} </MDBCardTitle>
                  <MDBCardText>
                    {admin.type}
                  </MDBCardText>
                  <MDBCardText>
                    {admin.status}
                  </MDBCardText>
                  <MDBCardText>
                    {admin.date}
                  </MDBCardText>                  
                 <DeleteUserModal admin={admin}/>
                </MDBCardBody>
              </MDBCol>
            </MDBCard>
          )
        })}
      </MDBRow>
    </MDBContainer>
    <footer>
    <Copyright/>
    </footer>

    </div>
  )
}

export default ListAdmins;