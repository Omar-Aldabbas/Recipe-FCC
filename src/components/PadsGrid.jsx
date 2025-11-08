import { useState } from "react";
import pads from "./pads";
import { Pad } from "./PadComp";

export const Pads = () => {
  const [isPad, setIsPad] = useState(pads);

  const toggle = (id) => {
    console.log(id);

    setIsPad((prevPads) =>
      prevPads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad))
    );
  };

  return (
    <div className="min-h-screen bg-slate-200  p-12 space-x-2 space-y-2 ">
      {isPad.map((pad) => (
        <Pad
          key={pad.id}
          id={pad.id}
          color={pad.color}
          on={pad.on}
          toggle={toggle}
        />
      ))}
    </div>
  );
};
