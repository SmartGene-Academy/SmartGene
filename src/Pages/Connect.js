import React from 'react';
import { MDBTextArea, MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit';
import NavBar from '../Components/navbar';

export default function Connect() {
  return (
  <div>
    <NavBar></NavBar>
    <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
      <h2>Contact us</h2>

      <MDBValidationItem invalid feedback='Please provide your name.'>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea wrapperClass='mb-4' label='Message' required />
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      </MDBValidationItem>

      <MDBBtn type='submit' color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </MDBValidation>
    </div>
  );
}