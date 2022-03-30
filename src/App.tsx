import { useState, useEffect } from "react";
import { Clock } from "./components/Clock";
import { TimeProps } from "./components/types";
import { getTime } from "./utils/utils";

export function App() {
  const [time, setTime] = useState<TimeProps>(getTime());

  useEffect(() => {
    setInterval(() => setTime(getTime()), 1000);
  }, [time]);

  return (
    <>
      <h1>
        Brazil
        <span>Timer</span>
      </h1>

      <Clock {...time} />
    </>
  );
}
