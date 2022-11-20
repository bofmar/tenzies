import React from "react";

export default function Dice({ value, isHeld, hold }) {
  return (
    <div className={`dice center--content disable--select ${isHeld ? 'held' : ''}`} onClick={hold}>
      {value}
    </div>
  );
}
