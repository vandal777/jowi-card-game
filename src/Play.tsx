import React from "react";

export default function Play(props: any) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      ' Z'
    </button>
  );
}
