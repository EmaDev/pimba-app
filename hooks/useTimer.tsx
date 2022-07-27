import { useEffect, useState } from 'react';

export const useTimer = (time: number) => {

  const [timer, setTimer] = useState(time);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (startTimer) {
      const intervalo = setInterval(() => {
        if (timer > 0) setTimer((prev) => prev - 1);
        if (timer === 0) setIsTimerActive(false);
      }, 1000);
      return () => clearInterval(intervalo);
    }
  }, [timer, startTimer]);

  const restartTimer = () => {
    setIsTimerActive(true);
    setTimer(time);
  }

  return { timer, isTimerActive, setStartTimer, restartTimer}
}
