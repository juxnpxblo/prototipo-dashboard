interface StatusRowProps {
  title: string;
  dotColor: string;
  total: number;
}

const StatusRow = ({ title, dotColor, total }: StatusRowProps) => {
  return (
    <tr>
      <td className="text-left">
        <span
          className={`text-[3.5rem] absolute top-1.5 select-none ${dotColor}`}
        >
          ·
        </span>
        <span className="pl-5">{title}</span>
      </td>
      <td className="">{total}</td>
    </tr>
  );
};

export default StatusRow;
