import { StatusType } from '../interfaces/dashboard.interface';
import { getStatusComponentProps } from '../helpers/dashboard.helper';

interface StatusProp {
  status: StatusType;
}

const Status = ({ status }: StatusProp) => {
  const { text, textColor, bgColor } = getStatusComponentProps(status);

  return (
    <div
      className={`${textColor} ${bgColor}
      } font-semibold text-center select-none rounded-md py-1.5`}
    >
      {text}
    </div>
  );
};

export default Status;
