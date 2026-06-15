import { useEffect, useState } from "react";

export function useCountdown(targetDate: Date) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(
    0,
    targetDate.getTime() - now
  );

  return {
    days: Math.floor(diff / 84000006),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}