import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authenticator = (props) => {
  const { children } = props;

  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const currentSession = async () => {
      try {
        const response = await Auth.currentUserPoolUser();
        setIsAuth(true);
      } catch (error) {
        navigate('/login', { replace: true });
      }
    }

    currentSession();
  }, [])

  return (
    <>
      {isAuth && children}
    </>
  )
}

export default Authenticator