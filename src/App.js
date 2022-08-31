import logo from './logo.svg';
import './App.css';

import { Amplify, Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

Amplify.configure({
  Auth: {
    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:66b34d9b-8388-4540-a8cf-998a0b75ca04',

    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_4p2N3hXTx',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '5euk085dng8jb4hbjvt0ts4ah7',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
    // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
    signUpVerificationMethod: 'code', // 'code' | 'link'
  }
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/register'>
          Register
        </Link>
        <Link to='/login'>
          Login
        </Link>
      </header>
    </div>
  );
}

export default App;
