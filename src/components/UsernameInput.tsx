import { Dispatch, SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';

interface UsernameInputProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
}

const UsernameInput = ({ username, setUsername }: UsernameInputProps) => {
  return (
    <label>
      <p className="login-input-name">Usuário</p>
      <div className="relative">
        <input
          className="login-input"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu nome de usuário..."
          value={username}
          type="text"
          spellCheck="false"
          autoFocus
        />
        <FaUser size={14} className="text-dark absolute top-2.5 left-3" />
      </div>
    </label>
  );
};

export default UsernameInput;
