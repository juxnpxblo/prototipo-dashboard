import {
  getTotalTicketsByStatus,
  getTotalTickets,
} from '../helpers/dashboard.helper';
import DashboardContainer from './DashboardContainer.component';
import StatusRow from './StatusRow.component';

const VisaoGeral = () => {
  const {
    open: openTotal,
    closed: closedTotal,
    pending: pendingTotal,
  } = getTotalTicketsByStatus();

  const StatusesRows = [
    { title: 'Abertos', dotColor: 'text-open-2', total: openTotal },
    { title: 'Pendentes', dotColor: 'text-pending-2', total: pendingTotal },
    { title: 'Fechados', dotColor: 'text-closed-2', total: closedTotal },
  ];

  return (
    <DashboardContainer title="Visão geral">
      <div className="p-4">
        <table className="table-1">
          <thead>
            <tr>
              <th>Status</th>
              <th>Nº de tickets</th>
            </tr>
          </thead>
          <tbody>
            {StatusesRows.map(({ title, dotColor, total }) => (
              <StatusRow
                title={title}
                dotColor={dotColor}
                total={total}
                key={title}
              />
            ))}
            <tr>
              <td>Total</td>
              <td>{getTotalTickets()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default VisaoGeral;
