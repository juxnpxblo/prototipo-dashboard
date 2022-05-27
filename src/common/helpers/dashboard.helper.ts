import { tickets } from '../../app/data';
import { StatusType } from '../interfaces/dashboard.interface';

export const getTotalTicketsByStatus = () => {
  const total = {
    open: 0,
    pending: 0,
    closed: 0,
  };

  for (let { status } of tickets) {
    if (status === 'open') total.open++;
    else if (status === 'closed') total.closed++;
    else total.pending++;
  }

  return total;
};

export const getTotalTickets = () =>
  Object.values(getTotalTicketsByStatus()).reduce(
    (sum, current) => sum + current,
    0
  );

export const getFormattedISODate = (ISODate: string) => {
  const formattedDate = new Date(ISODate).toLocaleString('pt-BR').split(' ');
  return [formattedDate[0], formattedDate[1]];
};

export const getStatusComponentProps = (status: StatusType) => {
  const props = {
    text: '',
    textColor: '',
    bgColor: '',
  };

  if (status === 'open') {
    props.text = 'Aberto';
    props.textColor = 'text-open-2';
    props.bgColor = 'bg-open-1';
  } else if (status === 'closed') {
    props.text = 'Fechado';
    props.textColor = 'text-closed-2';
    props.bgColor = 'bg-closed-1';
  } else {
    props.text = 'Pendente';
    props.textColor = 'text-pending-2';
    props.bgColor = 'bg-pending-1';
  }

  return props;
};
