import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import getSearchParams from '../js/getSearchParams';

const ConfirmCode = () => {
  const [username, setUserName] = useState();

  const navigate = useNavigate();


  useEffect(() => {
    const username = getSearchParams('username');
    setUserName(username);
  }, [])

  async function confirmSignUp(e) {
    e.preventDefault();

    const datosFormulario = Object.fromEntries(
      new FormData(e.target)
    )

    const { code } = datosFormulario;

    try {
      const result = await Auth.confirmSignUp(username, code);
      navigate('/login', {replace: true})
      console.log('%cConfirmCode.js line:30 result', 'color: #007acc;', result);
    } catch (error) {
      console.log('error confirming sing up:', error);
    }
  }

  const resendConfirmationCode = async () => {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    }
    catch(err){
      console.log('error resending code: ', err);
    }
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Confirmation code</h1>
        <form onSubmit={confirmSignUp}>
          <div>
            <label>Code: </label>
            <input name='code' type='password' required />
          </div>
          <button type='submit'>
            Confirm code
          </button>
          <button type='button' onClick={resendConfirmationCode}>
            Resend code
          </button>
        </form>
      </div>
    </div>
  )
}

export default ConfirmCode