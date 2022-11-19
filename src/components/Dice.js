import React from "react";

export default function Dice({ value }) {
  return (
    <div className='dice center--content disable--select'>
      {value}
    </div>
  );
}
