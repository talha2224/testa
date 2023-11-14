import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12;
      const timeString = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      setCurrentTime(timeString);
    }

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>{currentTime}</span>
  );
}

export default CurrentTime;
