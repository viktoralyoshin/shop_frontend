type TypeProps = {
  title: string;
  value?: number;
};

const StatisticCard = ({ title, value }: TypeProps) => {
  return (
    <div className="p-4 border rounded-xl">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">{value}</p>
        <p className="text-muted-foreground text-md">{title}</p>
      </div>
    </div>
  );
};

export default StatisticCard;
