import React,{useState} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
  } from 'mdb-react-ui-kit';
  import { useUpdateVacancy } from '../../../data/vacanciesHook';
  import { useQueryClient } from 'react-query';

const EditVacancyModal = ({vacancy}) => {
    const [basicModal, setBasicModal] = useState(false);
  const [title, setTitle] = useState(vacancy.title);
  const [description, setDescription] = useState(vacancy.description);  

  const { mutateAsync:editVacancy }= useUpdateVacancy(vacancy);
  const queryClient=useQueryClient();
  const toggleShow = () => setBasicModal(!basicModal);


  const handleUpdateVacancy = () => {
    editVacancy({ ...vacancy, title, description }).then(_ => {
        queryClient.invalidateQueries(vacancy)
      })
    toggleShow();

  }
    return (
        <>
        <MDBBtn onClick={toggleShow}> Edit </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>{vacancy.title} </MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBTextArea className= "mt-4 mb-2 " label='Title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <MDBTextArea className= "mt-4 mb-2 " label='Description' type='text' value={description} onChange={(e) => setDescription(e.target.value)} />    
              </MDBModalBody>
  
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={handleUpdateVacancy}>Save changes</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default EditVacancyModal;
