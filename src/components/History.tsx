import { HistoryItem } from '../interfaces';
import Statistic from './Statistic';
import Time from './Time';

export interface HistoryProps {
  data: HistoryItem[];
}

function History({ data }: HistoryProps) {
  const length = data.length;
  const values = data.map((x) => x.milliseconds);
  const min = length > 0 ? Math.min(...values) : 0;
  const max = length > 0 ? Math.max(...values) : 0;
  const average = length > 0 ? values.reduce((a, b) => a + b, 0) / length : 0;

  return (
    <>
      <div className="mb-10 flex gap-10">
        <Statistic label="Min">
          <Time value={min} />
        </Statistic>
        <Statistic label="Max">
          <Time value={max} />
        </Statistic>
        <Statistic label="Average">
          <Time value={average} />
        </Statistic>
      </div>

      <table>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-1">
                <span className="text-neutral-400">#{item.id}</span>
              </td>
              <td className="px-2 py-1">
                <Time value={item.milliseconds} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default History;
