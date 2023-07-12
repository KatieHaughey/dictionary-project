import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <p>
        {props.meaning.definition}
        <br />
        Synonyms:
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
