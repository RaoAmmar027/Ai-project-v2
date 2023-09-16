import React, { useState } from 'react';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your validation logic here
    validateForm();
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setFormErrors(errors);

    if (isValid) {
      // Handle form submission or API request here
      console.log('Form data submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };
  const handleSignUp = () => {
  
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  
    
    setFormErrors({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };
  
  return (
    <>
<Page>
        <Container>
            <Row>
                <Col>

    <FormContainer>
      <FormHeader>Create an <Span> Account </Span> </FormHeader>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Error>{formErrors.name}</Error>
        </FormGroup>

        <FormGroup>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Error>{formErrors.email}</Error>
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Error>{formErrors.password}</Error>
        </FormGroup>

        <FormGroup>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Error>{formErrors.confirmPassword}</Error>
        </FormGroup>

        <SubmitButton type="submit" onClick={handleSignUp}>Sign Up</SubmitButton>
      </StyledForm>
    </FormContainer>
                </Col>
            </Row>
        </Container>
</Page>
    </>
  );
};

 const Span = styled.span`
   color: #ff2963;
 `

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
`;

const FormHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:white;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  width:100%;
  background: #403d84;
  border-radius: 50px;
  color: white;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none; 
    border-color: #ccc; 
    background: #403d84;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: white !important;
  }
  
 
`;

const Error = styled.div`
  color: #ff2963;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
   &:focus {
    outline: none; 
    
  }
`;
const Page = styled.div`
background:#0e113b;
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
`
export default Form;
