import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter
} from 'mdb-react-ui-kit';
import { useDeleteAdmin } from '../../../data/adminHooks';
import { useQueryClient } from 'react-query';
const DeleteUserModal = ({ admin }) => {
  const [basicModal, setBasicModal] = useState(false);
  const { mutateAsync:deleteUser } = useDeleteAdmin();
  const toggleShow = () => setBasicModal(!basicModal);
  const queryClient=useQueryClient();

  function handleDelete(id) {
    deleteUser(id).then(_=>{ 
        queryClient.invalidateQueries(admin)})
    toggleShow();
  }

  return (
    <>
      <MDBBtn onClick={toggleShow} color='danger'> Delete </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Are you sure you want to delete {admin.username} </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn className='m-2' color='danger' onClick={() => handleDelete(admin._id)}>Delete</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default DeleteUserModal;
