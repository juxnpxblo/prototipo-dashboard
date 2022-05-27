interface DashboardContainerProps {
  title: string;
  children: React.ReactNode;
}

const DashboardContainer = ({ title, children }: DashboardContainerProps) => {
  return (
    <>
      <h2 className="text-2xl text-light pb-3 ">{title}</h2>
      <div className="bg-dark-2 shadow-lg">{children}</div>
    </>
  );
};

export default DashboardContainer;
