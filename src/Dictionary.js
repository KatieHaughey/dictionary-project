import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
  }

  let apiKey = "1693401bba301of7bbf9t44f55436a1a";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form id="searchEngine" onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word..."
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}