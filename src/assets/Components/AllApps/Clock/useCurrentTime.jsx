import { useState, useEffect } from 'react';

// Custom Hook: useCurrentTime
function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const time = `${hours}:${minutes}`;
      setCurrentTime(time);
    };

    // Update time initially and every minute
    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}

export default useCurrentTime;
