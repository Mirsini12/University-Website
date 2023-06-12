import React, { useState } from 'react';
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
  MDBCardImage
} from 'mdb-react-ui-kit';
import { useUpdateJournal } from '../../../data/hooks';
import FileBase64 from 'react-file-base64'

const EditJournalModal = ({ journal }) => {
  const [basicModal, setBasicModal] = useState(false);
  const [title, setTitle] = useState(journal.title);
  const [description, setDescription] = useState(journal.description);
  const [url, setUrl] = useState(journal.journalUrl);
  const [image,setImage] = useState(journal.image);  
  

  const { mutate } = useUpdateJournal(journal);
  const toggleShow = () => setBasicModal(!basicModal);


  const handleUpdateJournal = () => {
    mutate({ ...journal, title, description, journalUrl: url, image })
    toggleShow();
  }

  return (
    <>
      <MDBBtn onClick={toggleShow}> Edit </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle> {journal.title} </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBTextArea className= "mt-4 mb-2 " label='Title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
              <MDBTextArea className= "mt-4 mb-2 " label='Description' type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
              <MDBTextArea className= "mt-4 mb-2 " label='Url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />  
                <p>photo:</p>          
              <FileBase64 type='file'
                 multiple={false}
                 onDone={({base64})=>setImage(base64)}/>
                 {image && <MDBCardImage src={image}/>}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={handleUpdateJournal}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default EditJournalModal;
