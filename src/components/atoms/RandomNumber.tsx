/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRandomRange } from "app/utils";
import { useEffect, useState } from "react";
import { useInterval, useTimeoutFn } from "react-use";

/**
 * Cycles thought the min and max and ends with the finalValue
 */
export default function RandomNumber({
  min,
  max,
  finalValue,
  duration = 2000,
  speed = 100,
}: {
  min: number;
  max: number;
  duration: number;
  speed: number;
  finalValue: number;
}) {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [rolling, setRolling] = useState(true);

  useTimeoutFn(() => {
    setRolling(false);
  }, duration);

  useInterval(
    () => {
      setDisplayNumber(Math.ceil(getRandomRange(min, max)));
    },
    rolling ? speed : null
  );

  return (
    <data value={rolling ? -1 : finalValue}>
      {rolling ? displayNumber : finalValue}
    </data>
  );
}
