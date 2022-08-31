import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const LogIn = () => {

  const [confirmationCode, setConfirmationCode] = useState(false);

  const navigate = useNavigate();

  async function signIn(e) {
    e.preventDefault();

    const datosFormulario = Object.fromEntries(
      new FormData(e.target)
    )

    const { username, password } = datosFormulario;

    try {
      const user = await Auth.signIn(username, password);
      navigate(`/`, {replace: true});
    } catch (error) {
      console.log('error signing in:', error);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Log In</h1>
        <form onSubmit={signIn}>
          <div>
            <label>Username </label>
            <input name='username' type='text' required />
          </div>
          <div>
            <label>Password </label>
            <input name='password' type='password' required />
          </div>
          <button type='submit'>
            Sing in
          </button>
        </form>
      </div>
    </div>
  )
}

export default LogIn