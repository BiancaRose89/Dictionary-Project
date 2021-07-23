import React from "react";

export default function Phonestic(props) {
  console.log(props.phonestic);
  return (
    <div className="Phonetic">
      <a href={props.phonestic.audio} target="_blank">
        Listen
      </a>
      <br />
      {props.phonestic.text}
    </div>
  );
}
