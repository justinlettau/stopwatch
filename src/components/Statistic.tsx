import { PropsWithChildren } from 'react';

export interface StatisticProps {
  label: string;
}

function Statistic({ children, label }: PropsWithChildren<StatisticProps>) {
  return (
    <div>
      <span className="text-lg leading-none">{children}</span>
      <span className="block text-sm leading-none text-gray-500">{label}</span>
    </div>
  );
}

export default Statistic;
