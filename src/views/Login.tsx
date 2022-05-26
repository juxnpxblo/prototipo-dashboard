import {
  useState,
  useEffect,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react';
import EmptyGrayContainer from '../components/EmptyGrayContainer';
import LoginContainer from '../components/LoginContainer';

interface LoginProps {
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setAuthenticated }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    document.title = 'Dashboard • Login';
  }, []);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!username.length || !password.length || signingIn) return;

    setSigningIn(true);
    setFailed(false);

    setTimeout(() => {
      setSigningIn(false);

      if (username === 'admin' && password === 'admin') {
        setAuthenticated(true);
      } else {
        setFailed(true);
      }
    }, 2000);
  };

  return (
    <div className="h-full flex flex-col">
      <EmptyGrayContainer />
      <div className="bg-bg-1 grow flex items-center justify-center">
        <LoginContainer
          {...{
            username,
            setUsername,
            password,
            setPassword,
            onSubmit,
            signingIn,
            failed,
          }}
        />
      </div>
      <EmptyGrayContainer />
    </div>
  );
};

export default Login;
