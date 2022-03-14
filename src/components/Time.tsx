export interface TimeProps {
  value: number;
}

function Time({ value }: TimeProps) {
  const min = ('0' + Math.floor((value / 60000) % 60)).slice(-2);
  const sec = ('0' + Math.floor((value / 1000) % 60)).slice(-2);
  const mil = ('0' + Math.floor((value / 10) % 100)).slice(-2);

  return (
    <>
      <span className="font-semibold">
        {min}:{sec}
      </span>
      <span className="text-[80%] font-thin">.{mil}</span>
    </>
  );
}

export default Time;
