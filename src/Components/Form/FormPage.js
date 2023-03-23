// import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormPage({changeASsState}) {

  const[Info, setInfo] = useState({
    // email: "ola@gmail.com",
    // password: "12345678",
    email: "",
    password: "",
  })

  const[InfoError, setInfoError] = useState({
    emailError: null,
    passwordError: null,
  })

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    console.log(e.target.value , e.target.name);
    switch (e.target.name){
      case "email":
        setInfo({
          ...Info,
          email : e.target.value,
        })
          setInfoError({
            ...InfoError,
            emailError : e.target.value.length === 0 ? "Email Address is Required" : !isValidEmail(e.target.value)  ? "Email Address is Invalied" : null,
          })
      break;

      case "password":
        setInfo({
          ...Info,
          password : e.target.value,
        })
          setInfoError({
            ...InfoError,
            passwordError : e.target.value.length === 0 ? "Password is Required" : e.target.value.length < 8 ? "Password must be at least 8 characters" : null,
          }) 
      break;  
      
      default:
      break;
    }
  }

  const handleSubmit = (e) => {

      
    // if(Info.email.length === 0  || Info.password.length === 0){
    //   e.preventDefault()
    // }

    // if(InfoError.emailError !== null || InfoError.passwordError !== null){
    //   e.preventDefault()
    // }

    if(Info.email.length === 0  || Info.password.length === 0){
      e.preventDefault()
    } else if(InfoError.emailError !== null || InfoError.passwordError !== null){
      e.preventDefault()
    }else{
    changeASsState()
      
    }

    // console.log("aaa");
    // changeASsState()
  }

  return (

  <div >

    <Form className=' position-absolute top-50 start-50 translate-middle'>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-primary fw-bold'>Email Address</Form.Label>
          <input className={`mb-1 form-control ${InfoError.emailError ? "border-danger" : ""}`} placeholder='Enter Email' value={Info.email} onChange={handleChange} name="email"/>
          <small className='text-danger d-block ms-2'>{InfoError.emailError}</small>
          <Form.Text className="text-muted ms-2">
                We'll never share your email with anyone else.
          </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-primary fw-bold'>Password</Form.Label>
          <input className={`mb-1 form-control ${InfoError.passwordError ? "border-danger" : ""}`} type="password" placeholder='Password' value={Info.password} onChange={handleChange} name="password"/>
          <small className='text-danger d-block ms-2'>{InfoError.passwordError}</small>
          {/* <button className='btn btn-primary w-100' onClick={handleSubmit}>save</button> */}
      </Form.Group>

      <Button variant="primary" type="submit" className='w-100' onClick={handleSubmit}>
            Submit
      </Button>

    </Form>




      {/* <Form className='w-50 mx-auto mt-5'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control  placeholder="Enter email"  value={Info.email} name='email' onChange={handleChange} />
            <small className='text-danger d-block ms-2'>{InfoError.emailError}</small>
            <Form.Text className="text-muted ms-2">
             We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={Info.password} name='password' onChange={handleChange}/>
            <small className='text-danger d-block ms-2'>{InfoError.passwordError}</small>
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100' onClick={handleSubmit}>
            Submit
        </Button>

      </Form> */}

  </div>

  )
}

export default FormPage ;

