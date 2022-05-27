import { useState, Dispatch, SetStateAction } from 'react';
import { BiKey } from 'react-icons/bi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const PasswordInput = ({ password, setPassword }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const Icone = showPassword ? FaEyeSlash : FaEye;

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
          autoComplete="on"
        />
        <BiKey size={18} className="text-dark-1 absolute top-2.5 left-3" />
        {password.length ? (
          <Icone
            size={14}
            className="text-dark-1 cursor-pointer select-none absolute top-3 right-3"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : null}
      </div>
    </label>
  );
};

export default PasswordInput;
