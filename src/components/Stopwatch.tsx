import { useEffect, useState } from 'react';
import play from '../assets/play.svg';
import stop from '../assets/stop.svg';
import Time from './Time';

export interface StopwatchProps {
  onStop: (milliseconds: number) => void;
}

function Stopwatch({ onStop }: StopwatchProps) {
  const [now, setNow] = useState<Date | null>(null);
  const [start, setStart] = useState<Date | null>(null);
  const isRunning = start != null;
  const milliseconds = isRunning ? +(now || 0) - +start : 0;

  useEffect(() => {
    let id: number;

    if (isRunning) {
      id = setInterval(() => setNow(new Date()), 5);
    }

    return () => clearInterval(id);
  });

  const handleToggle = () => {
    if (isRunning) {
      onStop(milliseconds);
      setStart(null);
    } else {
      setNow(new Date());
      setStart(new Date());
    }
  };

  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="text-6xl">
        <Time value={milliseconds} />
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={handleToggle}
          className="rounded-full bg-sky-500 p-4 transition-colors hover:bg-sky-600"
        >
          <img src={isRunning ? stop : play} />
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
