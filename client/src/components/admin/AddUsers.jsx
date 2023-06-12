import React, { useState, useEffect } from 'react';
import { useCreateAdmin } from '../../data/adminHooks';
import {
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBSwitch
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../footer/Copyright';



const AddUsers = () => {
  const [form, setForm] = useState({ username: "", password: "", isAdmin: false, date: new Date() })
  const navigate = useNavigate();
  const mutation = useCreateAdmin();

  useEffect(() => {
    if (localStorage.getItem("type") !== "Admin") {
      navigate('/home')
    }
  }, []);

  const createUser = () => {
    if (form.password.length < 6) {
      return;
    }
    const createUserRequest = { ...form, type: form.isAdmin ? "Admin" : "User" }
    mutation.mutateAsync(createUserRequest).then(() => {
      alert("The user saved successfully");
      navigate('/admin/users')
    })
  }

  return (
    <div className='mt-5'>
      <h1 className='mt-3 text-center mb-5'>Add an Admin</h1>
      <MDBValidation onSubmit={createUser}>
        <MDBValidationItem className="mt-4 mb-2 ms-5 me-5" feedback="Fill in the username" invalid>
          <label>Username:</label>
          <MDBInput value={form.username} onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
            placeholder='username' required />
        </MDBValidationItem>
        <MDBValidationItem className="mt-4 mb-2 ms-5 me-5" feedback="Fill in the password" invalid>
          <label>Password:</label>
          <MDBInput value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            type='password' minLength={6} placeholder='password' required />
          {form.password && form.password.length < 6 ? <div className='text-danger text-xsm-2 d-inline-flex'>
            The password must be at least 6 characters </div> : ""}
        </MDBValidationItem>
        <MDBValidationItem className="mt-4 mb-2 ms-5 me-5" feedback="Select the type" invalid required>
          <MDBSwitch label='is Admin' value={form.isAdmin}
            onChange={(e) => setForm((prev) => ({ ...prev, isAdmin: e.target.checked }))} />
        </MDBValidationItem>
        <MDBBtn className='m-5 ' color='dark' type='submit' >
          Add
        </MDBBtn>
        {mutation.isError && <div className='text-danger'>SOMETHING WENT WRONG</div>}
      </MDBValidation>
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

export default AddUsers;
