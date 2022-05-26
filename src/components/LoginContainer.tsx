import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import UsernameInput from './UsernameInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';

interface LoginContainerProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  onSubmit: (e: SyntheticEvent) => void;
  signingIn: boolean;
  failed: boolean;
}

const LoginContainer = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
  signingIn,
  failed,
}: LoginContainerProps) => {
  return (
    <div className="bg-dark px-8 py-10">
      <div className="mb-6">
        <h1 className="text-3xl text-white ">Acesso ao dashboard</h1>
        <h2 className="text-md text-white font-light ">
          Seja bem-vindo! Por favor, insira suas credenciais.
        </h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-2">
          <UsernameInput {...{ username, setUsername }} />
        </div>
        <div className={`${failed ? 'mb-1.5' : 'mb-6'}`}>
          <PasswordInput {...{ password, setPassword }} />
        </div>
        {failed && (
          <p className="text-sm text-red font-medium mb-3 ">
            Usuário ou senha incorretos.
          </p>
        )}
        <SubmitButton
          canClick={username.length && password.length ? true : false}
          signingIn={signingIn}
        />
      </form>
    </div>
  );
};

export default LoginContainer;
