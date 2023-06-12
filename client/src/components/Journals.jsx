import React, { useState } from 'react';
import { useFetchJournals } from '../data/hooks';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardText,
  MDBCardLink,
  MDBCardImage,
  MDBInput,
  MDBFooter,
} from 'mdb-react-ui-kit';
import Copyright from '../footer/Copyright';
import EditJournalModal from './admin/Modals/EditJournalModal';
import DeleteJournalModal from './admin/Modals/DeleteJournalModal';

const Journals = () => {
  const [filter, setFilter] = useState("")
  const { data } = useFetchJournals(filter);

  return (
    <div>
       <MDBCard className=" card" >
       <h1 className='mt-4 text-center'>Latest Publications</h1>
       <MDBCardBody>
        <div className='text-center'>
      <MDBCardImage 
      style={{ height: '15%', width: '45%', marginLeft:"auto", marginTop: "1rem" }}
      className='img-fluid shadow-4 '
      src={require('./photos/nanomaterial.jpg')}
      alt="..."
      />
      </div>
      </MDBCardBody>
      </MDBCard>

    <MDBContainer className='mb-9 mt-3'>
      <span className='mb-1'>Search by title/description:</span>
      <MDBInput className='m-3' value={filter} placeholder='Search...' onChange={(e) => {
        setFilter(e.target.value)
      }}
      />
      <MDBRow className='mb-9'>
        {data?.map((journal) => {
          return (
            <MDBCard className="card-body m-3 ps-3" key={journal._id}>
              <MDBCol>
                <MDBCardBody>
                  <MDBCardTitle>{journal.title} </MDBCardTitle>
                  <MDBCardText>
                    {journal.description}
                  </MDBCardText>
                  {journal.image ? <MDBCardImage  src={journal.image} /> : null}
                  <MDBCardLink className='ms-3' href={journal.journalUrl} target="_blank">visit the journal</MDBCardLink>
                  <br/>
                  <div className='mt-3 d-inline-flex' >
                    <div className='me-2'>
                  {localStorage.getItem('token') &&
                    <DeleteJournalModal journal={journal} />
                  }
                  </div>
                  {localStorage.getItem('token') &&
                    <EditJournalModal journal={journal} />
                  }
                   </div>
                </MDBCardBody>
              </MDBCol>


            </MDBCard>
          )
        })}
      </MDBRow>        
    </MDBContainer>
   
    </div>

  );
}

export default Journals;
