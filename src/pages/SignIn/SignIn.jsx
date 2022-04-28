import SignUpForm from '../../components/SignUpForm';
import SignInForm from '../../components/SignInForm';

const SignIn = () => (
  <div style={{ display: 'flex' }}>
    <SignInForm />
    <SignUpForm />
  </div>
);

export default SignIn;
