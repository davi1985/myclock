import "./styles.scss";
import { TimeProps } from "./types";

export const Clock = ({
  hour,
  minute,
  second,
  beforeOrAfterMidday,
}: TimeProps) => {
  return (
    <div className="clock-container">
      <div className="clock-col">
        <p className="clock-hours clock-timer">
          {String(hour).padStart(2, "0")}
        </p>
        <p className="clock-label">Hours</p>
      </div>
      <div className="clock-col">
        <p className="clock-minutes clock-timer">{minute}</p>
        <p className="clock-label">Minutes</p>
      </div>
      <div className="clock-col">
        <p className="clock-seconds clock-timer">{second}</p>
        <p className="clock-label">Seconds</p>
      </div>
      <div className="clock-col">
        <p className="clock-day clock-timer">{beforeOrAfterMidday}</p>
        <p className="clock-label">AM/PM</p>
      </div>
    </div>
  );
};
