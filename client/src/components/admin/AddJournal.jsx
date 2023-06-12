import React, { useState, useEffect } from 'react';
import { useCreateJournal } from '../../data/hooks';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea
} from 'mdb-react-ui-kit';
import FileBase64 from 'react-file-base64';
import Copyright from '../../footer/Copyright';


const AddJournal = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", journalUrl: "", image: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/home')
    }
  }, [])

  const mutation = useCreateJournal();
  const createJournal = () => {
    if (form.title === '' || form.description === '' || form.journalUrl === '') {
      // alert("please fill all the necessary fields")
      return
    };
    mutation.mutateAsync(form).then(() => {
      alert("The journal saved  successfully!");
      navigate("/journals")

    })
  }



  return (
    <div className='mt-5'>
      <h1 className='mt-3 text-center mb-2'>Add a journal</h1>
    <MDBValidation onSubmit={createJournal}>

      <MDBValidationItem className= "mt-2 mb-2 ms-5 me-5" feedback="Fill in the title" invalid>
        <label>Title:</label>
        <MDBInput value={form.title} onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))} placeholder='title' required />
      </MDBValidationItem>
      <MDBValidationItem className= "mt-4 mb-2 ms-5 me-5" feedback="Fill in the description" invalid>
        <label>Description:</label>
        <MDBTextArea value={form.description} onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))} type='text' placeholder='description' required />
      </MDBValidationItem>
      <MDBValidationItem className= "mt-4 mb-2 ms-5 me-5" feedback="Fill in the url" invalid>
        <label>URL:</label>
        <MDBInput value={form.journalUrl} onChange={(e) => setForm((prev) => ({ ...prev, journalUrl: e.target.value }))} type='text' placeholder='link' required />
      </MDBValidationItem>
      <MDBValidationItem  className= "mt-5 mb-2 ms-5 me-5"  feedback=" ">
        <p className='mb-1'> Upload a photo: </p>
        <FileBase64 type='file'
          multiple={false}
          onDone={({ base64 }) => setForm((prev) => ({ ...prev, image: base64 }))} />
      </MDBValidationItem>
      <MDBBtn className='m-5 ' color='dark' type='submit' >
        Add
      </MDBBtn>
      {mutation.isError && <div> Please fill all the required fields</div>}
    </MDBValidation>
    
    <Copyright/>
    
    </div>
  );
}

export default AddJournal;
