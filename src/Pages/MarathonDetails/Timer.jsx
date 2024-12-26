import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ date }) => {
  const difference = (new Date(date) - new Date()) / 1000;

  const day = Math.floor(difference / (60 * 60 * 24));
  const hrs = Math.floor((difference / (60 * 60)) % 24);
  const min = Math.floor((difference / 60) % 60);

  return (
    <div className="mb-4 flex items-center gap-4">
      <div>
        <CountdownCircleTimer
          isPlaying
          duration={day * 24 * 60 * 60}
          strokeWidth={8}
          size={60}
          colors="#28A745"
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            return { shouldRepeat: false, delay: 0 };
          }}
        >
          {({ remainingTime }) => (
            <div className="text-center">
              <p className="text-orange font-medium">
                {Math.floor(remainingTime / (24 * 60 * 60))}
              </p>
            </div>
          )}
        </CountdownCircleTimer>
        <p className="text-orange text-center font-medium">Days</p>
      </div>

      <div>
        <CountdownCircleTimer
          isPlaying
          duration={24 * 60 * 60}
          initialRemainingTime={hrs * 60 * 60}
          strokeWidth={7}
          size={60}
          colors="#28A745"
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            return { shouldRepeat: difference > 0, delay: 0 };
          }}
        >
          {({ remainingTime }) => (
            <div>
              <p className="text-orange font-medium">
                {Math.floor(remainingTime / (60 * 60))}
              </p>
            </div>
          )}
        </CountdownCircleTimer>
        <p className="text-orange text-center font-medium">Hours</p>
      </div>

      <div>
        <CountdownCircleTimer
          isPlaying
          duration={60 * 60}
          initialRemainingTime={min * 60}
          strokeWidth={6}
          size={60}
          colors="#28A745"
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            return { shouldRepeat: difference > 0, delay: 0 };
          }}
        >
          {({ remainingTime }) => (
            <div>
              <p className="text-orange font-medium">
                {Math.floor(remainingTime / 60)}
              </p>
            </div>
          )}
        </CountdownCircleTimer>
        <p className="text-orange text-center font-medium">Minutes</p>
      </div>
    </div>
  );
};

export default Timer;
