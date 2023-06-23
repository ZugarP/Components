
import React, { FC, useEffect, useState } from 'react';
import './css/Login.css';



interface DefaultProps {
  show: boolean;
}

const Clock: FC<DefaultProps> = ({ show }): JSX.Element => {
  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <>
      {show && (
        <div>
          <h1 className="display-4" style={{ fontSize: "2rem" }}>
            {new Date().toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h1>
          <h1 className="display-1" style={{ fontSize: "4rem" }}>
            {clock}
          </h1>
        </div>
      )}
    </>
  );
};


export default function DigitalClock() {
  const [showClock, setShowClock] = useState<boolean>(true);
  
  return (

          <div><Clock show={showClock} /></div>
  
  );
}

