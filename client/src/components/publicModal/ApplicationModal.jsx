import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64'
import validator from 'validator';
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
    MDBValidation,
    MDBValidationItem,
    MDBCard,
    MDBInput
  } from 'mdb-react-ui-kit';
import { useCreateApplication } from '../../data/applicationHooks';


const ApplicationModal = ({vacancy}) => {
    const [basicModal, setBasicModal] = useState(false);
    const navigate=useNavigate();
    const [form, setForm] = useState({ vacancyId: vacancy._id, email: "" ,cv:"",statement:""});
    const mutation=useCreateApplication();
    const toggleShow = () => setBasicModal(!basicModal);     
   

    const createApplication = () => {
        if (form.vacancyId === '' || form.email === '' || form.statement==='' || !validator.isEmail(form.email) ) return;  
      
        mutation.mutateAsync(form).then(() => {
          alert("The application sent  successfully!");
          toggleShow();
         navigate("/home"); 
         
        })
      }
    return (
        <>
        <MDBBtn color='dark' onClick={toggleShow}> Apply </MDBBtn>
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
              
                <MDBModalTitle>Please fill all the required fields </MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBValidation>
              <MDBValidationItem className="mt-4 mb-2 ms-5 me-5" feedback='Please give a correct email' invalid >
                <label>Email <span className='text-danger'>*</span> :</label>
                <MDBInput value={form.email} type='email'
                onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                 placeholder='email'  />
                 {form.email && !validator.isEmail(form.email) ? <div className='text-danger' >Please enter a valid email</div>  : "" }
                 </MDBValidationItem>
                 <MDBValidationItem className="mt-4 mb-2 ms-5 me-5">
                 <label >Motivation Letter <span className='text-danger'>*</span> :</label>
                <MDBTextArea  type='text' value={form.statement} 
                onChange={(e) => setForm((prev) => ({ ...prev, statement: e.target.value }))} 
                placeholder='' required />    
                  </MDBValidationItem>
                  <div className="mt-4 mb-2 ms-5 me-5">
                    <label className='mb-1'>Upload your cv:</label>
                 <FileBase64 type='file'
                 multiple={false}
                 onDone={({base64})=>setForm((prev) => ({ ...prev, cv: base64 }))}/>
                 </div>
                 <MDBCard >
                 </MDBCard>
                  </MDBValidation>
                  {mutation.isError &&<div> Something went wrong </div>}
              </MDBModalBody>
  
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn onClick={createApplication} disabled={!form.email || !form.statement }>SEND</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    );
}

export default ApplicationModal;
