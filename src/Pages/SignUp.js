import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/navbar';
import { Container, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef(); // Create a useRef reference for the password input
  const passwordConfirmRef = useRef(); // Create a useRef reference for the password confirmation input

  return (
    <div>
      <NavBar></NavBar>
      <Container className='d-flex allign-items-center justify-content-center' style={{minHeight: "100vh"}}>
      <div className='w-100' style={{maxWidth: "400px"}}>
          <Card>
            <Card.Body>
              <h2 className='text-center mb-4'>Sign Up</h2>
              <Form>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required></Form.Control>
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required></Form.Control>
                </Form.Group>
                <Form.Group id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                </Form.Group>
                <Button type='submit' className='w-100'>Sign Up</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 text-center mt-2'>
            Already have an account? Log In
          </div>
        </div>
      </Container>
    </div>
    
  );
};

export default Login;
