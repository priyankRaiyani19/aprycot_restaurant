import React, { useState, useEffect } from 'react';

const Timer = () => {
    const initialDays = 1, initialHours = 1, initialMinutes = 40, initialSeconds = 10;

    const [days, setDays] = useState(initialDays);
    const [hours, setHours] = useState(initialHours);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        const myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else if (hours > 0) {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
            } else if (days > 0) {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
            } else {
                clearInterval(myInterval); // Stop the timer
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [seconds, minutes, hours, days]);

    return (
        <div className={`text-[2rem] font-PlayfairDisplay font-semibold`}>
            {days === 0 && hours === 0 && minutes === 0 && seconds === 0 ? (
                <h1>Time's up!</h1>
            ) : (
                <h1>
                    {days} : {hours} : {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                </h1>
            )}
        </div>
    );
};

export default Timer;
