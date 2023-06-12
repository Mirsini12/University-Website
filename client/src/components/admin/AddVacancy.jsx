import React, { useState, useEffect } from 'react';
import { useCreateVacancy } from '../../data/vacanciesHook';
import { useNavigate } from 'react-router-dom';
import {
    MDBInput,
    MDBBtn,
    MDBValidation,
    MDBValidationItem,
    MDBTextArea
  } from 'mdb-react-ui-kit';
import Copyright from '../../footer/Copyright';

const AddVacancy = () => {
    const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/home')
    }
  }, [])

  const mutation = useCreateVacancy();
  const createVacancy = () => {
    if (form.title === '' || form.description === '' || form.journalUrl === '') return;  
    mutation.mutateAsync(form).then(() => {
      alert("The vacancy saved  successfully!");
     navigate("/vacancies")

    })
  }
    return (
      <div  className='mt-5'>
        <h1 className='mt-3 text-center mb-5'>Add a vacancy</h1>
        <MDBValidation onSubmit={createVacancy}>
      
        <MDBValidationItem className= "mt-2 mb-2 ms-5 me-5" feedback="Fill in the title" invalid>
        <label>Title:</label>
          <MDBInput value={form.title} onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))} placeholder='title' required />
        </MDBValidationItem>
        <MDBValidationItem className= "mt-4 mb-2 ms-5 me-5" feedback="Fill in the description" invalid>
        <label>Description:</label>
          <MDBTextArea value={form.description} onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))} type='text' placeholder='description' required />
        </MDBValidationItem>        
        <MDBBtn className='m-5 ' color='dark' type='submit'>
          Add
        </MDBBtn>       
        {mutation.isError && <div> Please fill all the necessary fields</div>}
      </MDBValidation>
      <Copyright/>
      </div>
    );
}

export default AddVacancy;
