import React from "react";

export default function Dialogue({ hideDialogue, dialogueData }) {

  if (!dialogueData) {
    return null;
  }
  const { name, gravity, orbitalPeriod, surfaceArea } = dialogueData;
  console.log("0000000000000000000000")
  
  return (
    <div className="dialog">
      <div className="dialog-header">
        <div className="">{name}</div>
        <svg
          onClick={hideDialogue}
          width="24px"
          height="24px"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >...
        </svg>
      </div>
      <div className="details">Gravity: {gravity} m/s²</div>
      <div className="details">Orbital period: {orbitalPeriod} days</div>
      <div className="details">Surface area: {surfaceArea} million km²</div>
    </div>
  );
}