import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogInAdmin } from '../../data/adminHooks';
// import PostLoginData from "./PostLoginData";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBValidation,
  MDBValidationItem
}
  from 'mdb-react-ui-kit';
import Copyright from '../../footer/Copyright';
const LoginAdmin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" })
  const mutation = useLogInAdmin();
  const handleClick = (e) => {
    e.preventDefault();
    if (form.username === '' || form.password === '' || form.password.length < 6) {
      return;
    }

    mutation.mutateAsync(form).then((res) => {
      console.log(res);
      localStorage.setItem('type', res.data.type);
      localStorage.setItem('token', res.data.token);
      alert("You logged in successfully!")
      navigate('/home');
    })


  }

  return (

    <MDBContainer className="p-3 my-5 m-5 d-flex flex-column w-50">
      <h1 className='mt-3 text-center mb-2' >Login Admin</h1>
      {/* <div class="img-fluid m-9">
        <img src={require('../photos/homePage1.jpg')}
          class="img-fluid" alt="Sample image"/>
      </div> */}
      <MDBValidation onSubmit={handleClick}>
        <MDBValidationItem className="mt-4 mb-4 ms-5 me-5" feedback="Fill in your username" invalid>
          <label>Username:</label>
          <MDBInput
            value={form.username}
            onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
            wrapperClass='mb-4' placeholder='username' id='form1' type='text'
            required
          />
        </MDBValidationItem>
        <MDBValidationItem className="mt-5 mb-2 ms-5 me-5" feedback="Fill in the password." invalid>
          <label>Password:</label>
          <MDBInput
            value={form.password}
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
            wrapperClass='mb-4' placeholder='Password' id='form2' type='password'
            minLength={6}
            required
          />
        </MDBValidationItem>
        <MDBBtn className='m-5 ' color='dark' type="submit"  >Sign in</MDBBtn>
      </MDBValidation>
      {mutation.isError && <div className='text-danger'> Username or Password is incorrect</div>}
    </MDBContainer>
    
  );
}

export default LoginAdmin;
