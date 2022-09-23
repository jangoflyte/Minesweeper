import React, {useState, useEffect} from 'react';

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    const resetTimer = () => {
        setSeconds(0);
    };

    useEffect(() => {
        setTimeout(() => {
        setSeconds((seconds) => seconds + 1);
        }, 1000);
    }, [seconds]);

    return (
        <div>
            <h1>Timer: {seconds}s</h1>
        </div>
    )
}