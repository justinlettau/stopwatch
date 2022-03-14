import { useState } from 'react';
import History from './components/History';
import Stopwatch from './components/Stopwatch';
import { HistoryItem } from './interfaces';

function App() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleStop = (milliseconds: number) => {
    setHistory((x) => [{ milliseconds, id: x.length + 1 }, ...x]);
  };

  return (
    <main className="container mx-auto">
      <div className="flex flex-col">
        <section className="border-b bg-gray-50 p-10">
          <Stopwatch onStop={handleStop} />
        </section>
        <section className="p-10">
          <History data={history} />
        </section>
      </div>
    </main>
  );
}

export default App;
