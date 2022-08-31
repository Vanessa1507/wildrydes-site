import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();

  async function signUp(e) {
    e.preventDefault();

    const datosFormulario = Object.fromEntries(
      new FormData(e.target)
    )

    const { username, password, email, phone_number } = datosFormulario;


    try {
      const result = await Auth.signUp({
        username,
        password,
        attributes: {
          email,          // optional
        },
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      });

      navigate(`/confirm-code?username=${result.user.username}`, {replace: true});
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Register</h1>
        <form onSubmit={signUp}>
          <div>
            <label>Username </label>
            <input name='username' type='text' required />
          </div>
          <div>
            <label>Password </label>
            <input name='password' type='password' required />
          </div>
          <div>
            <label>Email </label>
            <input name='email' type='email' required />
          </div>
          <button type='submit'>
            Sing up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register