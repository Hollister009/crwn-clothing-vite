import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../firebase/firebase.utils';

import FormInput from '../FormInput';
import Button from '../Button';

import './SignInForm.scss';

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFormFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>
      <form action="POST" onSubmit={handleSubmit}>
        <FormInput
          id="semail"
          name="email"
          type="email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <FormInput
          id="spassword"
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div className="btn-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" clickHandler={logGoogleUser}>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
