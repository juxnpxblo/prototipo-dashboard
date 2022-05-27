import { useEffect } from 'react';
import VisaoGeral from '../common/components/VisaoGeral.component';
import ListaDeTickets from '../common/components/ListaDeTickets.component';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <div className="w-full h-full px-10 pt-10">
      <div className="max-w-[1280px] flex gap-6 mx-auto">
        <div className="w-[325px]">
          <VisaoGeral />
        </div>
        <div className="grow">
          <ListaDeTickets />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
