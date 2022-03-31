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
        Timer
        <span>Now</span>
      </h1>

      <Clock {...time} />
    </>
  );
}
