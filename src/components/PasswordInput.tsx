import { useState, Dispatch, SetStateAction } from 'react';
import { BiKey } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';

interface PasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <label>
      <p className="login-input-name">Senha</p>
      <div className="relative">
        <input
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha..."
          value={password}
          type={showPassword ? 'text' : 'password'}
          spellCheck="false"
        />
        <BiKey size={18} className="text-dark absolute top-2.5 left-3" />
        {password.length ? (
          <FaEye
            size={14}
            className="text-dark cursor-pointer select-none absolute top-3 right-3"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : null}
      </div>
    </label>
  );
};

export default PasswordInput;
