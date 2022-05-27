import classnames from 'classnames';

interface SubmitButtonProps {
  canClick: boolean;
  signingIn: boolean;
}

const SubmitButton = ({ canClick, signingIn }: SubmitButtonProps) => {
  const inputClassNames = classnames(
    'text-white font-medium transition-colors w-[180px] py-3',
    canClick ? 'bg-orange-2' : 'bg-orange-1 cursor-default',
    signingIn ? 'cursor-default' : 'cursor-pointer',
    canClick && !signingIn && 'hover:bg-orange-3'
  );

  return (
    <div className="relative w-min">
      <input
        className={inputClassNames}
        value={signingIn ? ' ' : 'Continuar'}
        type="submit"
      />
      {signingIn && <div className="loader absolute top-3.5 left-20"></div>}
    </div>
  );
};

export default SubmitButton;
