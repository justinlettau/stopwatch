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
    <main className="flex flex-col">
      <section className="border-b bg-gray-50 p-10">
        <div className="container mx-auto">
          <Stopwatch onStop={handleStop} />
        </div>
      </section>
      <section className="p-10">
        <div className="container mx-auto">
          <History data={history} />
        </div>
      </section>
    </main>
  );
}

export default App;
