import React from "react";
import "./search.css";
import axios from "axios";

function Search() {
  const [search, setSearch] = React.useState("");

  function handleInput(e) {
    setSearch(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {

      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: search },
        headers: {
          "X-RapidAPI-Key":
            "098ad6773bmsha4c38f8de20da25p11ec2ejsnc0e0d26fb9b5",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }
  return (
    <div className="search_section">
      <div className="search_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for city"
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default Search;
