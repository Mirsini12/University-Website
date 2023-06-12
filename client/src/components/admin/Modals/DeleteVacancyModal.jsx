
import React, { useState } from 'react';
import { useDeleteVacancy } from '../../../data/vacanciesHook';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import { useQueryClient } from 'react-query';

const DeleteVacancyModal = ({ vacancy }) => {
  const [basicModal, setBasicModal] = useState(false);
  const { mutateAsync: deleteVacancy } = useDeleteVacancy();
  const toggleShow = () => setBasicModal(!basicModal);
  const queryClient = useQueryClient();

  function handleDelete(id) {
    deleteVacancy(id).then(_ => {
      queryClient.invalidateQueries(vacancy)
    })
    toggleShow();
  }
  return (
    <>
      <MDBBtn onClick={toggleShow} color='danger'> Delete </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Are you sure you want to delete {vacancy.title} </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn className='m-2' color='danger' onClick={() => handleDelete(vacancy._id)}>Delete</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default DeleteVacancyModal;
