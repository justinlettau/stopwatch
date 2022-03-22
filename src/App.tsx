import { useEffect, useState } from 'react';
import { ReactComponent as DarkIcon } from './assets/dark.svg';
import { ReactComponent as LightIcon } from './assets/light.svg';
import History from './components/History';
import Stopwatch from './components/Stopwatch';
import { HistoryItem } from './interfaces';

function App() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [darkMode, setDarkMode] = useState(prefersDark);

  useEffect(() => {
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [darkMode]);

  const handleToggle = () => setDarkMode((value) => !value);
  const handleStop = (milliseconds: number) => {
    setHistory((x) => [{ milliseconds, id: x.length + 1 }, ...x]);
  };

  return (
    <main className="flex min-h-screen flex-col dark:bg-zinc-700 dark:text-white">
      <section className="relative border-b bg-gray-50 p-10 dark:border-zinc-600 dark:bg-zinc-800">
        <button
          type="button"
          className="absolute top-0 right-0 p-2 text-2xl"
          onClick={handleToggle}
        >
          {darkMode ? <DarkIcon className="fill-white" /> : <LightIcon />}
        </button>
        <div className="container mx-auto">
          <Stopwatch onStop={handleStop} />
        </div>
      </section>
      <section className="flex-1 p-10">
        <div className="container mx-auto">
          <History data={history} />
        </div>
      </section>
      <footer className="p-10">
        <p className="text-center">
          <a
            href="https://github.com/justinlettau/stopwatch"
            className="text-sm text-neutral-400 hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
