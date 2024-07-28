/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRandomRange } from "app/utils";
import { useEffect, useState } from "react";
import { useInterval } from "react-use";

/**
 * Cycles thought the min and max and ends with the finalValue
 */
export default function RandomNumber({
  min,
  max,
  rolls,
  speed,
  finalValue,
}: {
  min: number;
  max: number;
  rolls: number;
  speed: number;
  finalValue: number;
}) {
  const [rounds, setRounds] = useState(0);

  useInterval(
    () => {
      setRounds(rounds + 1);
    },
    rounds >= rolls ? null : speed || 100
  );

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <data>
      {rounds < rolls ? Math.ceil(getRandomRange(min, max)) : finalValue}
    </data>
  );
}
