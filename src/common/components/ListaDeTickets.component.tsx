import { tickets } from '../../app/data';
import { getFormattedISODate } from '../helpers/dashboard.helper';
import DashboardContainer from './DashboardContainer.component';
import ProfilePic from './ProfilePic.component';
import Status from './Status.component';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

const ListaDeTickets = () => {
  return (
    <>
      <DashboardContainer title="Lista de tickets">
        <table className="table-2">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Criado em</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(
              (
                { contact: { name, number, profilePicUrl }, createdAt, status },
                i
              ) => {
                const [day, time] = getFormattedISODate(createdAt);

                return (
                  <tr key={i}>
                    <td>
                      <ProfilePic src={profilePicUrl} />
                      <span>{name}</span>
                    </td>
                    <td>{number}</td>
                    <td>{day + ' às ' + time}</td>
                    <td>
                      <Status status={status} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </DashboardContainer>
      <div className="text-xs text-light flex justify-between mt-2 pb-3">
        <div className="flex">
          <IoIosArrowDropleftCircle size={15} />
          <IoIosArrowDroprightCircle size={15} />
          <span className="ml-1.5">Página 1 de 1</span>
        </div>
        <div>Mostrando 11 de 11 tickets</div>
      </div>
    </>
  );
};

export default ListaDeTickets;
