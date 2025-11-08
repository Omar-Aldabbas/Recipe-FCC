import { useState } from "react";
import {cn} from "./cn"
export const Pad = (props) => {
    const [isOn, setIsOn] =useState(props.on)

    const handleClick = () => {
        setIsOn(prev => !prev)
    }
  return (
    <button
    onClick={handleClick}
      key={props.id}
      style={{ backgroundColor: props.color }}
      className={cn("w-36 h-36 border-2- border-gray-800 border-4 rounded-xl ", isOn ? "opacity-100" : "opacity-10")}
    >
    </button>
  );
};
