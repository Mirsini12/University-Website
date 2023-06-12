import React, { useState } from 'react';
import { useDeleteJournal } from '../../../data/hooks';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter
} from 'mdb-react-ui-kit';

const DeleteJournalModal = ({ journal }) => {
  const [basicModal, setBasicModal] = useState(false);
  const { mutate } = useDeleteJournal();
  const toggleShow = () => setBasicModal(!basicModal);


  function handleDelete(id) {
    mutate(id);
    toggleShow();
  }

  return (
    <>
      <MDBBtn onClick={toggleShow} color='danger'> Delete </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Are you sure you want to delete {journal.title} </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn className='m-2' color='danger' onClick={() => handleDelete(journal._id)}>Delete</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default DeleteJournalModal;
