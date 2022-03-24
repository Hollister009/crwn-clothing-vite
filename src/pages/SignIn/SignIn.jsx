import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase.utils';
import SignUpForm from '../../components/SignUpForm';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button type="button" onClick={logGoogleUser}>
        Sign In with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
