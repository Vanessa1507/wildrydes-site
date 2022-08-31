import logo from '../logo.svg';
import '../styles/App.css';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
import Authenticator from './Authenticator';

function App() {
  const navigate = useNavigate();

  const singOut = async () => {
    try {
      await Auth.signOut();
      navigate('/home', { replace: true })
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <Authenticator>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type='button' onClick={singOut}>
            Sing out
          </button>
        </header>
      </div>
    </Authenticator>
  );
}

export default App;
