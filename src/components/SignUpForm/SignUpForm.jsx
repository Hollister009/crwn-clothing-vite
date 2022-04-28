import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase/firebase.utils';

import FormInput from '../FormInput';
import Button from '../Button';

import './SignUpForm.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert("Can't create a user, email already in use");
      }
      console.error('User creation encountered an error', error.message);
    } finally {
      setFormFields(defaultFormFields);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const formInputFields = [
    {
      id: 'displayName',
      label: 'Display Name',
      type: 'text',
      name: 'displayName',
      value: displayName,
    },
    { id: 'email', label: 'Email', type: 'email', name: 'email', value: email },
    { id: 'password', label: 'Password', type: 'password', name: 'password', value: password },
    {
      id: 'confirmPassword',
      label: 'ConfirmPassword',
      type: 'password',
      name: 'confirmPassword',
      value: confirmPassword,
    },
  ];

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account yet?</h2>
      <span>Sign up with your email and password</span>
      <form action="POST" onSubmit={handleSubmit}>
        {formInputFields.map((field) => (
          <FormInput key={field.id} onChange={handleChange} required {...field} />
        ))}
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
